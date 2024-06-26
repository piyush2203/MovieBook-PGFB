import React from 'react';
import image from "/me.png" ;
import instagram from "/instagram.png"
import linkedin from "/linkedin3.png"
import twitter from "/twitter.png"
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import gray from '/grey.jpg'

const Contact = () => {
    const navigate = useNavigate();

  return (
    <div className='h-screen relative w-screen flex items-center justify-center' >

        <Link onClick={() => navigate(-1)} className='absolute top-[5%] text-white left-[4%]'>
          <FaArrowLeft className="hover:text-[#6556CD] text-[2.5vw] " />
        </Link>
      <div className='bg-zinc-900 h-[50%] w-[45%]  border-2 border-white flex rounded-xl'>
        <div  className="left relative flex w-[35%]  h-full border-r-2 border-zinc-00">
            <img src={image} alt="" className='h-[90%] absolute bottom-0 w-full rounded-xl'/>
            <div className='w-[50%] bg-zinc-500 h-full rounded-xl'></div>
        </div>
        <div className='right w-[65%] h-full ' >
            <div className='w-full h-[20%] bg-gray-400 flex items-center justify-center mt-[7%] mb-[5%]'>
                <h1 className='text-[3vw] text-center '>CONTACT US !</h1>
            </div>
            
            <div className='w-full h-[20%]  flex items-center justify-center'>
                <img src={instagram} alt="" className='h-[55%]  mr-[3%]' />   <a target='_blank' href="https://www.instagram.com/pg_piyush/" className='text-[1.8vw] text-zinc-400'> @pg_piyush</a>
             </div>
        

             <div className='w-full h-[20%]  flex items-center justify-center'>
                <img src={linkedin} alt="" className='h-[55%] mr-[3%]' />   <a target='_blank' href="https://www.linkedin.com/in/piyush-gupta-b8820a193/" className='text-[1.8vw] text-zinc-400'> @PiyushGupta</a>
             </div>
          

             <div className='w-full h-[20%]  flex items-center justify-center'>
                <img src={twitter} alt="" className='h-[55%] mr-[3%]' />   <a target='_blank' href="https://x.com/pg_piyush22" className='text-[1.8vw] text-zinc-400'> @pg_piyush22</a>
             </div>
            
        </div>
        
      </div>
    </div>
  )
}

export default Contact





// import React from 'react';
// import image from "/me.png" ;
// import instagram from "/instagram.png"
// import linkedin from "/linkedin3.png"
// import twitter from "/twitter.png"
// import { Link, useNavigate } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa';
// import gray from '/grey.jpg'

// const Contact = () => {
//     const navigate = useNavigate();

//   return (
//     <div className='h-screen relative w-screen flex items-center justify-center' >

//         <Link onClick={() => navigate(-1)} className='absolute top-[5%] text-white left-[4%]'>
//           <FaArrowLeft className="hover:text-[#6556CD] text-[2.5vw] " />
//         </Link>
//       <div className='bg-zinc-900 h-[50%] w-[45%]  border-2 border-white flex rounded-xl'>
//         <div  className="left relative flex w-[35%]  h-full border-r-2 border-gray-200">
//             <img src={image} alt="" className='h-[85%] absolute bottom-0 w-full rounded-xl'/>
//             <div className='w-[55%] bg-red-400 h-full rounded-xl'></div>
//         </div>
//         <div className='right w-[65%] h-full ' >
//             <div className='w-full h-[20%] bg-gray-400 flex items-center justify-center mt-[7%] mb-[5%]'>
//                 <h1 className='text-[3vw] text-center '>CONTACT US !</h1>
//             </div>
            
//             <div className='w-full h-[20%]  flex items-center justify-center'>
//                 <img src={instagram} alt="" className='h-[55%]  mr-[3%]' />   <a target='_blank' href="https://www.instagram.com/pg_piyush/" className='text-[1.8vw] text-zinc-400'> @pg_piyush</a>
//              </div>
        

//              <div className='w-full h-[20%]  flex items-center justify-center'>
//                 <img src={linkedin} alt="" className='h-[55%] mr-[3%]' />   <a target='_blank' href="https://www.linkedin.com/in/piyush-gupta-b8820a193/" className='text-[1.8vw] text-zinc-400'> @PiyushGupta</a>
//              </div>
          

//              <div className='w-full h-[20%]  flex items-center justify-center'>
//                 <img src={twitter} alt="" className='h-[55%] mr-[3%]' />   <a target='_blank' href="https://x.com/pg_piyush22" className='text-[1.8vw] text-zinc-400'> @pg_piyush22</a>
//              </div>
            
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default Contact
