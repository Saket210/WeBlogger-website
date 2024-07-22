import connectDb from "@/lib/config/db";
import blogModel from "@/lib/models/blogModel";
import {writeFile} from 'fs/promises'

const fs = require("fs");

const { NextResponse } = require("next/server");

const loadDb = async () => {
    await connectDb();
}
loadDb();

export async function GET(request){

    const blogId = request.nextUrl.searchParams.get("id");
    if(blogId){
        const blog = await blogModel.findById(blogId);
        return NextResponse.json(blog);
    } else {
        const blogs = await blogModel.find({});
        return NextResponse.json({blogs})
    }
}

export async function POST(request){
    const formData = await request.formData();
    const time = Date.now();
    console.log(formData);

    const image = formData.get('image');
    const imageByte = await image.arrayBuffer();
    const buffer = Buffer.from(imageByte);
    const path = `./public/${time}_${image.name}`;
    await writeFile(path, buffer);
    const imageUrl = `/${time}_${image.name}`;

    const blogdata = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imageUrl}`,
        authorImg: `${formData.get('authorImg')}`
    }
    await blogModel.create(blogdata);
    console.log("Blog saved");

    return NextResponse.json({success: true, msg: "Blog Added"})
}

export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get("id");
    const blog = await blogModel.findById(id);
    fs.unlink(`./public${blog.image}`,()=> {});
    await blogModel.findByIdAndDelete(id);
    return NextResponse.json({msg: "Blog Deleted"})
}