import React from 'react';
import line from "../assets/hero/curve.png"
import robot from "../assets/hero/robot.jpg"
import img1 from "../assets/notification/image-1.png"
import img2 from "../assets/notification/image-2.png"
import img3 from "../assets/notification/image-3.png"
import img4 from "../assets/notification/image-4.png"
import img5 from "../assets/home-smile.svg"
import img6 from "../assets/search-md.svg"
import img7 from "../assets/plus-square.svg"
import img8 from "../assets/file-02.svg"
import yourlogo from "../assets/yourlogo.svg"

const Home = () => {
    return (
        <>
        <div className='w-full hero flex items-center flex-col gap-6 justify-center h-max ' 
>
    <div className='mt-[10rem] mb-10 flex items-center justify-center gap-6 flex-col'>

            <h1 className='font-bold text-black text-6xl text-center max-sm:text-4xl '>
                  Explore the Possibilites <br /> of AI Chatting with 
                  {" "}
                  <span className='relative inline-block'>
                  BrainAI 
                  <img  src={line} alt=""  width={200} height={100}
                  className="absolute top-full left-0 mx-4 "
                  />
                  </span>
            </h1>
            
            <p className='text-gray-700 font-normal text-xl max-w-lg text-center max-sm:text-lg'>
                 Unleah the power of AI within BrainAI. Upgrade your productivity with BrainAI, the open AI chat app.
            </p>
            <button className='w-[110px] h-[2.5rem] rounded-md bg-black text-white'>Get Started</button>
                  </div>
            
        <div className="p-10 w-full h-max flex items-center justify-center relative" >
            <div className="border-[3px] rounded-xl border-solid border-purple-700 w-full h-[100vh] max-sm:h-[50vh] overflow-hidden ">
                  <img src={robot} className="object-cover w-full "/>
            </div>
        <div className='flex items-center p-2 rounded-md bg-[rgba(255,255,255,.5)] backdrop-blur-md border border-solid border-gray-300 gap-2 absolute top-[5rem] right-0' >
            <img src={img1} className='w-[3rem] h-[3rem] rounded-md' />
                  <div className='flex gap-2 flex-col'>
                  <h1 className='text-md font-semibold'>Code generation</h1>
            <div className='flex items-center gap-1'>
                        <img src={img2}  className='h-[20px] w-[20px] rounded-full'/>
                        <img src={img3}  className='h-[20px] w-[20px] rounded-full'/>
                        <img src={img4}  className='h-[20px] w-[20px] rounded-full'/>
                  </div>
            </div>
            
        </div>
        <div className='flex items-center p-2 rounded-md bg-[rgba(255,255,255,.1)] backdrop-blur-md  gap-2 absolute bottom-[5rem] left-[2rem]' >
           
                  
            <div className='flex items-center gap-3'>
                        <img src={img5}  className='h-[20px] w-[20px] rounded-full'/>
                        <img src={img6}  className='h-[20px] w-[20px] rounded-full'/>
                        <img src={img7}  className='h-[20px] w-[20px] rounded-full'/>
                        <img src={img8}  className='h-[20px] w-[20px] rounded-full'/>
                  </div>
            </div>

        </div>
        <div className='w-full h-max flex flex-col items-center justify-center'>

          <h2 className='font-bold uppercase text-gray-400 text-sm'>
            Helping people creating beautiful content at 
          </h2>
          
        </div>
        </div>
        </>
    );
}

export default Home;
