'use client'
import Header from "@/components/Header/header";
import BlogList from "@/components/BlogList/bloglist";
import Footer from "@/components/Footer/footer"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
    <ToastContainer theme="dark"/>
    <div style={{minHeight:"100vh",display:"flex", flexDirection:"column",justifyContent:"space-between"}}>
    
      <div>
      <Header/>
      <BlogList/>
      </div>
      <Footer/>
    </div>
    </>
  );
}
