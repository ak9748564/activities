import React from 'react';

import Sidebar from './Sidebar';
import SidebarMobile from './SidebarMobile';

export default function SideBarWhole() {
  // console.log('sidebarWhole');
  return (
    <>
      <div className="fixed w-[50px] z-10 hidden s3:block "><Sidebar /></div>
      <div className={'fixed w-[250px] z-10 block s3:hidden left-[-250px]'}><SidebarMobile /></div>     
    </>
  )
}