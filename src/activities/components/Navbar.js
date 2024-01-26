import React from 'react';
import logo from './../components/images/logoGE.jpg';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [active,setActive] = React.useState(1);
    const [menu,setMenu] = React.useState(false);

//    window.addEventListener('scroll',()=>{
//     if(window.scrollY >300){
//       document.getElementById("navbar").style.height = "90px";
//       document.getElementById("navbar").style.background = "#fff";
//       document.getElementById("navbar").style.boxShadow = "10px 10px 10px #ccc";
//     }
//    })
  return (
    <div className='px-4 relative bg-[#98b5cf]'>
        <div className='m-auto max-w-[1200px] flex justify-between items-center h-[62px] md:h-[74px] lg:h-[114px] xl:h-[130px]' id="navbar">
            <div className=''>
                <img src={logo} className='sm:h-[130px] h-[40px]'/>
                {/* <p className='sm:text-[36px] text-[20px]'>Galaxy Exhibitions</p> */}
            </div>
            <div className='hidden lg:block'>
                <ul className='flex items-center'>
                    <Link to="/" className={'text-[20px] hover:text-[#9b5273] mx-8 font-semibold cursor-pointer'} onClick={()=>setActive(1)}>Home</Link>
                    <Link to="/france-fair" className={'text-[20px] hover:text-[#9b5273] mx-8 font-semibold cursor-pointer'} onClick={()=>setActive(2)}>France Fair</Link>
                    <Link to="/about" className={'text-[20px] hover:text-[#9b5273] mx-8 font-semibold cursor-pointer'} onClick={()=>setActive(3)}>About</Link>
                    {/* <Link to="/" className={'text-[20px] hover:text-[#9b5273] mx-8 font-semibold cursor-pointer'} onClick={()=>setActive(4)}>Pages</Link> */}
                    <Link to="/contact" className={'text-[20px] hover:text-[#9b5273] mx-8 font-semibold cursor-pointer'} onClick={()=>setActive(5)}>Contact</Link>
                </ul>
            </div>
            <div className='lg:hidden flex items-center' onClick={()=>setMenu(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <p className='text-[18px] ml-1'>Menu</p>
            </div>
        </div>
        <div className={menu ? "absolute top-0 left-0 w-full bg-white shadow-lg flex justify-center transition-all" : "hidden"}>
            <div className='pt-10 relative w-full flex flex-col items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg absolute right-[20px] top-[20px]" viewBox="0 0 16 16" onClick={()=>setMenu("")}>
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
            <Link to="/" className={ active === 1 ? 'text-[20px] text-[#9b5273] my-3 font-semibold cursor-pointer block' : 'text-[20px] hover:text-[#9b5273] my-3 font-semibold cursor-pointer block' } onClick={()=>setActive(1)}>Home</Link>
            <Link to="/france-fair" className={ active === 2 ? 'text-[20px] text-[#9b5273] my-3 font-semibold cursor-pointer block' : 'text-[20px] hover:text-[#9b5273] my-3 font-semibold cursor-pointer block' } onClick={()=>setActive(2)}>France Fair</Link>
            <Link to="/about" className={ active === 3 ? 'text-[20px] text-[#9b5273] my-3 font-semibold cursor-pointer block' : 'text-[20px] hover:text-[#9b5273] my-3 font-semibold cursor-pointer block' } onClick={()=>setActive(3)}>About</Link>
            {/* <Link to="/" className={ active === 4 ? 'text-[20px] text-[#9b5273] my-3 font-semibold cursor-pointer block' : 'text-[20px] hover:text-[#9b5273] my-3 font-semibold cursor-pointer block' } onClick={()=>setActive(4)}>Pages</Link> */}
            <Link to="/contact" className={ active === 5 ? 'text-[20px] text-[#9b5273] my-3 font-semibold cursor-pointer block' : 'text-[20px] hover:text-[#9b5273] my-3 font-semibold cursor-pointer block' } onClick={()=>setActive(5)}>Contact</Link>
            </div>
        </div>      
    </div>
  )
}
