import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const blogtableitem = ({authorImg,title,author,date,deleteBlog,mongoId}) => {
    const blogDate = new Date(date);
  return (
    <tr>
        <td colSpan={5} style={{textAlign:'center', padding:'10px 0px'}}>
            <Image width={50} height={50} src={authorImg?authorImg:assets.profile_icon} alt=''/>
            <p style={{margin:'2px'}}>{author?author:"Anonymous"}</p>
        </td>
        <td colSpan={5} style={{textAlign:'center'}}>
            {title?title:"No title"}
        </td>
        <td colSpan={5} style={{textAlign:'center'}}>
            {blogDate.toDateString()}
        </td>
        <td  onClick={()=> deleteBlog(mongoId)} colSpan={5} style={{textAlign:'center'}}>
            X
        </td>
    </tr>
  )
}

export default blogtableitem