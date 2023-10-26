import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function About() {
  return (
    <div>
      <Navbar/>
      <div className='bg-[#98b5cf] w-full'>
        <div className='max-w-[1000px] m-auto pt-[50px] pb-[50px] flex items-center md:text-[40px] text-[25px] leading-[30px] md:leading-[50px] text-left px-4 text-[#111] bg-[#98b5cf] text-white'>
            <div>
        <p>
            We are a registerd import/export company Galaxy Exhibitions since 2005. We are also representing international exhibitions in India and leading partipation groups to international tradefair and exhibitions.
        </p>
        <p className='pt-8 md:pt-12 md:pt-12'>
            Galaxy Exhibitions
        </p>
        <p className='pt-8 md:pt-12 md:pt-12'>Bank Name: BOMBAY MERCANTILE BANK</p>
        <p>36 Netaji Subhash Marg, Darya Ganj, New Delhi-110002</p>
        <p>IFSC Code: BMCB0000044</p>
        <p>Account No: 200110100035733</p>
        <p>GST No: 07AGHPA3849G1ZJ</p>
        <p>IECODE: 0505041448</p> 
        <p>APEDA RCMC No: 198685</p>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
