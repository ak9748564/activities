import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

export default function Contact() {
    const [form,setForm] = React.useState({});

    const handleform = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleContact = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/contact',form)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        alert('Message Sent Successfully');
        window.location.href = "/contact";
    }
  return (
    <div>
      <Navbar/>
      <div className='px-4 max-w-[1200px] m-auto md:flex my-10'>
        <div className='md:w-[300px] grow-0 shrink-0 w-full'>
            <div className='px-4 py-10 bg-[#fff4f9] flex items-center'>
                <div className='h-[50px] w-[50px] hover:bg-[#9b5273] flex items-center justify-center hover:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                </div>
                <div className='pl-4'>
                    <p className='text-[24px] leading-[29px]'>Phone</p>
                    <p className='text-[18px] leading-[29px] text-[#161718]'>+91 9899928902</p>
                    <p className='text-[18px] leading-[29px] text-[#161718]'>+91 9015858366</p>
                </div>
            </div>
            <div className='px-4 py-10 bg-[#fff4f9] flex items-center mt-6'>
                <div className='h-[50px] w-[50px] hover:bg-[#9b5273] flex items-center justify-center hover:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg>
                </div>
                <div className='pl-4'>
                    <p className='text-[24px] leading-[29px]'>Email</p>
                    <p className='text-[18px] leading-[29px] text-[#161718]'>galaxyexhibitions@gmail.com</p>
                    {/* <p className='text-[18px] leading-[29px] text-[#161718]'>support@example.com</p> */}
                </div>
            </div>
            <div className='px-4 py-10 bg-[#fff4f9] flex items-center mt-6'>
                <div className='h-[50px] w-[50px] hover:bg-[#9b5273] flex items-center justify-center hover:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                    </svg>
                </div>
                <div className='pl-4'>
                    <p className='text-[24px] leading-[29px]'>Address</p>
                    <p className='text-[18px] leading-[29px] text-[#161718]'>G-26, Syndicate House, Shahzada Bagh</p>
                    <p className='text-[18px] leading-[29px] text-[#161718]'>Inderlok, Delhi-110035</p>
                </div>
            </div>
        </div>
        <div className='md:pl-6 grow shrink w-full pt-10'>
            <form onSubmit={(e)=>handleContact(e)}>
            <p className='text-[32px] leading-[38px]'>Contact Form</p>
            <input type="text" name="name" placeholder='Name' className='px-4 h-[50px] border-[#cccccc] border w-full outline-[#9b5273] text-[20px] mt-4' onChange={(e)=>handleform(e)} required/>
            <input type="email" name="email" placeholder='Email' className='px-4 h-[50px] border-[#cccccc] border w-full outline-[#9b5273] text-[20px] mt-4' onChange={(e)=>handleform(e)} required/>
            <input type="text" name="phone" placeholder='Phone' className='px-4 h-[50px] border-[#cccccc] border w-full outline-[#9b5273] text-[20px] mt-4' onChange={(e)=>handleform(e)} required/>
            <textarea type="text" name="message" placeholder='Message' className='px-4 h-[50px] border-[#cccccc] border w-full outline-[#9b5273] text-[20px] mt-4 h-[200px]' rows='10' cols='10' onChange={(e)=>handleform(e)} required></textarea>
            <button className='text-[#9b5273] border border-[#9b5273] h-[50px] w-[200px] text-center leading-[50px] text-[20px] hover:bg-[#9b5273] hover:text-white hover:transition-all'>Send</button>
            </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
