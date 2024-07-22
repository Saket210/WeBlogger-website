import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import "./blogitem.css";
import Link from "next/link";

const blogitem = ({ image, category, title, description,id }) => {
  return (
    <div className="blog-item-div">
      <div className="item-content">
        <Link href={`/blogs/${id}`}>
        <Image width={270} height={170} className="item-img" src={image} alt=''/>
        </Link>
        <h6>{category}</h6>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link href={`/blogs/${id}`}>
      <div className="readmore">
        <h6>Readmore</h6> <Image className="read-img" src={assets.arrow} alt=''/>
      </div>
      </Link>
    </div>
  );
};

export default blogitem;
