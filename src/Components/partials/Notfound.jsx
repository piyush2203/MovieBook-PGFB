import React from 'react'
import loader from "/loading.gif"
import { Link, useNavigate } from 'react-router-dom'
import { MdClose } from 'react-icons/md'

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute w-screen flex items-center justify-center top-0  left-0 z-100 bg-[rgba(0,0,0,0.7)]">
      <Link onClick={() => navigate(-1)}>
          <MdClose className="hover:text-[#6556CD]  text-white text-[1.5vw] absolute top-[5%] left-[5%] text-[3vw]" />
        </Link>
      <div className=' flex justify-center  h-screen justify-center w-screen items-center '>
      <h1 className='text-white text-center top-[50%] px-[20%] bg-black py-[15%] border-2 border-white'>Error (404)!!  Not Found</h1>
    </div>
    </div>
  )
}

export default Notfound
