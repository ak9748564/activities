import React from 'react'

export default function Footer() {
  return (
    <div className='px-4'>
      <div className='max-w-[1200px] m-auto h-[132px] flex flex-col sm:flex-row items-center justify-center sm:justify-between border-t'>
        <div className='text-[18px] leading-[36px] flex items-center'>
            <p>© 2023 Galaxy Exhibitions</p>
        </div>
        <div className='flex items-center'>
            <p className='text-[18px] leading-[36px] hover:text-[#9b5273]'>galaxyexhibitions@gmail.com</p>            
        </div>
      </div>
    </div>
  )
}
