import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import './header.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const header = () => {

  const [email,setEmail] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    console.log("onSubmit clicked")
    const response = await axios.post('/api/email',formData);
    if(response.data.success){
      toast.success(response.data.msg);
      setEmail('');
    } else {
      toast.error("Error");
    }
  }

  return (
    <div className='main-container'>
        <div className="header-flex">
            <p>WeBlogger</p>
            <button>Get Started <Image src={assets.arrow} alt=''/></button>
        </div>
        <div className='text-header'>
            <h1>Latest Blogs</h1>
            <p>Share your experience with everyone ...</p>
            <form onSubmit={onSubmitHandler} className='form'>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type='email' placeholder='Enter your Email'/>
                <button type='submit'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default header