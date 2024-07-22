import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import "./sidebar.css";
import Link from "next/link";

const sidebar = () => {
  return (
      <div className="sidebar-flex-col">
        <p className="sidebar-logo">WeBlogger</p>
        <div className="sidebar-options-container">
          <Link href='/admin/addBlog' className="sidebar-option">
            <Image src={assets.add_icon} alt="" />
            <p>Add Blog</p>
          </Link>
          <Link href='/admin/blogList' className="sidebar-option">
            <Image src={assets.blog_icon} alt="" />
            <p>Blogs</p>
          </Link>
          <Link href='/admin/subscriptions' className="sidebar-option">
            <Image src={assets.email_icon} alt="" />
            <p>Subscriptions</p>
          </Link>
        </div>
      </div>
  );
};

export default sidebar;
