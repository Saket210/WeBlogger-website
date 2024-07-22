'use client'
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import './page.css'
import Footer from '@/components/Footer/footer';
import Link from 'next/link';
import axios from 'axios';

const page = ({params}) => {

  const [blogdata,setblogdata] = useState(null);

  const fetchBlogData = async () => {
     const response = await axios.get('/api/blog',{
      params: {
        id:params.id,
      }
     })
     setblogdata(response.data);
  }

  useEffect(() => {
    fetchBlogData()
  },[])

  return (blogdata?<>
    <div className='container'>
       <div className="blog-item-header">
            <Link href='/' style={{textDecoration:'none', color: 'black' }}>
              <p>WeBlogger</p>
            </Link>
            <button>Get Started <Image src={assets.arrow} alt=''/></button>
        </div>
        <div className='blog-details'>
          <p className='blog-title'>{blogdata.title}</p>
          <Image className='blog-profile-img' width={50} height={50} src={blogdata.authorImg} alt=''/>
          <p className='blog-author'>{blogdata.author}</p>
          <Image className='blog-img' width={300} height={400} src={blogdata.image} alt=''/>
          <p className='blog-description'>{blogdata.description}</p>
        </div>
        <Footer/>
    </div>
    </> : <></>
  )
}

export default page