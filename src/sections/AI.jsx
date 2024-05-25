import React from 'react';
import robot from "../assets/services/service-1.png"
import check from "../assets/check.svg"
const AI = () => {
    return (
        <>
        
        <div className='p-10 w-full flex items-center justify-between max-sm:flex-col '>
            <div className='flex items-center flex-col gap-4'>
            <h1 className='font-bold text-6xl max-sm:text-4xl text-center'>Generative AI made for creators.</h1>
            <p className='text-gray-500 text-center text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className='flex items-center max-sm:flex-col justify-between'>

            <div className='w-70vh w-[50rem] mt-4  '>
                  <img src={robot} alt="robot" className='w-full h-full object-cover' />
            </div>
            </div>
            </div>
            <div className='w-full flex items-center justify-center flex-col h-max gap-6'>
                 <h2 className='font-bold text-4xl max-sm:text-3xl '>Smartest AI</h2>
                 <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                 <h2 className='flex items-center gap-4 font-semibold  p-2 border-t border-gray-200 border-b'>
                      <img src={check} width={35} height={35}/>
                      Photo generating
                 </h2>
                 <h2 className='flex items-center gap-4 font-semibold  p-2 border-t border-gray-200 border-b'>
                      <img src={check} width={35} height={35}/>
                      Photo enhance
                 </h2>
                 <h2 className='flex items-center gap-4 font-semibold  p-2 border-t border-gray-200 border-b'>
                      <img src={check} width={35} height={35}/>
                      Seamless integration
                      
                 </h2>
                 
            </div>

        </>
    );
}

export default AI;
