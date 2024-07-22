"use client";
import React, { useEffect, useState } from "react";
import SubsTableItem from "@/components/Admin/SubsTableItem/subsTableItem";
import "./page.css";
import axios from "axios";
import { toast } from "react-toastify";

const page = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get("/api/email");
    setEmails(response.data.emails);
  };

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete("/api/email",{
      params: {
        id: mongoId,
      },
    });
    if(response.data.success){
      toast.success(response.data.msg);
      fetchEmails();
    } else {
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="subscriptions-container">
      <h1>All Subscriptions</h1>
      <div className="list-table-subs">
        <table className="table-subs">
          <thead className="table-head-subs">
            <tr>
              <th colSpan={7}>Email Id</th>
              <th colSpan={4}>Date</th>
              <th colSpan={4}>Action</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => {
              return (
                <SubsTableItem
                  key={index}
                  mongoId={item._id}
                  email={item.email}
                  date={item.date}
                  deleteEmail={deleteEmail}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
