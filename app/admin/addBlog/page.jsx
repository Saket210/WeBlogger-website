'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import './page.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const page = () => {

    const [image,setImage] = useState(false)
    const [data,setData] = useState({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bennett",
        authorImg: "/authorimg.png"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data,[name]:value}));
        console.log(data);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('authorImg',data.authorImg);
        formData.append('image', image);
0
        const response = await axios.post('/api/blog',formData);
        if(response.data.success){
            toast.success(response.data.msg);
            setImage(false);
            setData({
                title: "",
                description: "",
                category: "Startup",
                author: "Alex Bennett",
                authorImg: "/authorimg.png"
            });
        } else {
            toast.error("Error");
        }

    }

  return (
    <>
        <form className='form-container' onSubmit={onSubmitHandler}>
            <p className='form-heads'>Upload Blog Image</p>
            <label htmlFor='image'>
                <Image width={200} height={100} src={!image?assets.upload_area:URL.createObjectURL(image)} alt=''/>
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>
            <p>Blog Category</p>
            <select className='category-select' name='category' onChange={onChangeHandler} value={data.category}>
                <option value="Startup">Startup</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
            </select>
            <p>Blog Title</p>
            <input name='title' onChange={onChangeHandler} value={data.title} className='input-fields' type='text' placeholder='Enter blog title' required/>
            <p>Blog Description</p>
            <textarea  name='description' onChange={onChangeHandler} value={data.description} className='input-fields' rows={6} type="text" placeholder="Enter blog description" required/>
            <button className='blog-add-btn' type='submit'>Add Blog</button>
        </form>
    </>
  )
}

export default page