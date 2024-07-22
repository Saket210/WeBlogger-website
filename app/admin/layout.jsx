import { assets } from '@/assets/assets'
import Sidebar from '@/components/Admin/Sidebar/sidebar'
import Image from 'next/image'
import './layout.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({children}) {
    return (
        <>
            <div className='admin-container'>
                <ToastContainer theme='dark'/>
                <Sidebar/>
                <div className='admin-view-container'>
                    <div className='admin-header'>
                        <h3>Admin Panel</h3>
                        <Image className='admin-profile' src={assets.profile_icon} alt=''/>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}