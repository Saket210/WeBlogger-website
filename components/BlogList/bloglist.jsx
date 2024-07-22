import React, { useEffect, useState } from "react";
import "./bloglist.css";
import BlogItem from "../BlogItem/blogitem";
import axios from "axios";

const bloglist = () => {
  const [category, setCategory] = useState("All");
  const [blogs,setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  }

  useEffect(() => {
    fetchBlogs();
  },[])

  return (
    <div className="blog-container">
      <div className="categories">
        <button
          className={category === "All" ? "active" : "inactive"}
          onClick={() => setCategory("All")}
        >
          All
        </button>
        <button
          className={category === "Technology" ? "active" : "inactive"}
          onClick={() => setCategory("Technology")}
        >
          Technology
        </button>
        <button
          className={category === "Startup" ? "active" : "inactive"}
          onClick={() => setCategory("Startup")}
        >
          Startup
        </button>
        <button
          className={category === "Lifestyle" ? "active" : "inactive"}
          onClick={() => setCategory("Lifestyle")}
        >
          Lifestyle
        </button>
      </div>
      <div className="blogs">
        {blogs
          .filter((item) =>
            category === "All" ? true : item.category === category
          )
          .map((item, index) => {
            return (
              <BlogItem
                key={index}
                image={item.image}
                category={item.category}
                title={item.title}
                description={item.description}
                id={item._id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default bloglist;
