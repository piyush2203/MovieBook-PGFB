import React from 'react'
import loader from "/loading.gif"
import { IoWarning } from "react-icons/io5";

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center bg-black items-center absolute'>
      <img className='w-[50%] ' src={loader} alt="" />
      <div className='absolute flex items-center justify-center bottom-[5%] w-[100%] '>
        {/* <IoWarning  className='text-white  text-xl mr-[1%]'/> */}
        <h3 className='text-zinc-300  text-[1.3vw] font-[franklin]'>( If you are a JIO User, Kindly use VPN !)</h3>
      </div>
    </div>
  )
}

export default Loading
