"use client";
import React, { useEffect, useState } from "react";
import BlogTableItem from "@/components/Admin/BlogTableItem/blogtableitem";
import "./page.css";
import axios from "axios";
import { toast } from 'react-toastify'

const page = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  const deleteBlogs = async (mongoId) => {
    const response = await axios.delete("/api/blog", {
      params: {
        id: mongoId,
      },
    });
    toast.success(response.data.msg);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="bloglist-container">
      <h1>All Blogs</h1>
      <div className="list-table">
        <table className="table">
          <thead className="table-head">
            <tr>
              <th colSpan={5}>Author Name</th>
              <th colSpan={5}>Blog Title</th>
              <th colSpan={5}>Date</th>
              <th colSpan={5}>Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {blogs.map((item, index) => {
              return (
                <BlogTableItem
                  key={index}
                  mongoId={item._id}
                  title={item.title}
                  author={item.author}
                  authorImg={item.authorImg}
                  date={item.date}
                  deleteBlog={deleteBlogs}
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
