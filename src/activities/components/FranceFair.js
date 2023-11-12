import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import montlucon from './images/montlucon.png'

export default function FranceFair() {
  return (
    <div>
      <Navbar/>
      <div className='bg-[#98b5cf] w-full'>
        <div className='max-w-[1000px] m-auto pt-[50px] pb-[50px] flex items-center md:text-[40px] text-[25px] leading-[30px] md:leading-[50px] text-left px-4 text-[#111] bg-[#98b5cf] text-white'>
            <div>
                <img src={montlucon} className='max-w-[1000px] m-auto'/>
                <p className='mt-10'>France Art And Consumer Fair MONTLUCON</p>
                <p>Oct 7 - Oct 15, 2023</p>
                <p className='pt-8 md:pt-12'>Booth Size: 9' x 9' with carpet Front strip, two spot lights, electrical connection, exhibitor badge.</p>
                <p className='pt-8 md:pt-12'>Booth Installation Cost - Euro 1980* + taxes</p>
                {/* <p>Total: CAD $7500* + tax</p> */}
                <p className='pt-8 md:pt-12'>Sector your business is related to:</p>

        <p className='pt-8 md:pt-12'>Sports Goods, Sweets/Premium Sweets, Herbal & Ayurvedic Food Supplements, Ethnic Indian Apparel, Home Decor, Fashion and Apparel, Hosiery Products, Beauty and Personal Care, Indian Silk Products, Cashews and Nuts, Footwear, Jewellery, Coir Products, Health Care & Wellness Jute Products, Decorative Lighting for Home, Handicrafts, Leather/Leather Products, Tea and Coffee, Watches, Wool/Woolen Products</p>

        <p className='pt-8 md:pt-12'>We will be happy to see you at France Trade Fair Show. Last year there were 60,000+ visitors. Now We hope more importer / distributor and consumer will give you satisfaction to grow business in France. Looking forward to hear from you. </p>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
