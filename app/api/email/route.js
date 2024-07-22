import connectDb from "@/lib/config/db";
import emailModel from "@/lib/models/emailModel";

const { NextResponse } = require("next/server");

const loadDb = async ()=> {
    await connectDb();
}
loadDb();

export async function GET(request) {
    const emails = await emailModel.find({});
    return NextResponse.json({emails});
}

export async function POST(request) {
    const formData = await request.formData();
    const emailData = {
        email: `${formData.get('email')}`
    }
    await emailModel.create(emailData);
    console.log("Email added");
    return NextResponse.json({success: true, msg: "Email Subscribed"})
}

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    await emailModel.findByIdAndDelete(id);
    return NextResponse.json({success: true,msg: "Email Deleted"});
}