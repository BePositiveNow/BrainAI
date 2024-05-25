import React from 'react';
import robot from "../assets/services/service-2.png"
import robot2 from "../assets/services/service-3.png"
import img1 from "../assets/chrome-cast.svg"
import img2 from "../assets/recording-01.svg"
import img3 from "../assets/sliders-04.svg"
import img4 from "../assets/disc-02.svg"
const Video = () => {
    return (
        <div className="w-full h-[120vh] max-sm:h-max max-sm:flex-col p-10 flex items-center justify-between">
            <div className='h-full flex-1 relative '>
                   <img src={robot} className='w-full h-full relstive'/>
                  <div className='font-bold text-4xl absolute bottom-8 '>
                      Photo Editing!
                  </div>
                  </div>
                  <div className='bg-gray-700 mono text-white w-max p-5 rounded-l-3xl rounded-tr-3xl absolute mt-8'>
                       Hey brainAI enhance this photo!
                  </div>
                  <div className='h-full  flex-1 bg-[rgb(21,19,29)] overflow-hidden'>
                    <div className='flex flex-1 flex-col p-5 gap-4 mt-8'>
                          <h1 className='font-normal text-4xl text-white'>Video generation</h1>
                          <p className='max-w-sm text-gray-400 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio eius veniam, facere quam rem totam!</p>
                          <div className='flex items-center gap-6 justify-center mt-8 '>
                            <div className='bg-gray-800 h-[4rem] w-[4rem] flex items-center justify-center rounded-xl'>
                             <img src={img1} width={25} height={35}/>
                            </div>
                            <div className='bg-gray-800 h-[4rem] w-[4rem] flex items-center border-2 border-green-700 border-solid justify-center rounded-xl'>
                             <img src={img2} width={25} height={35}/>
                            </div>
                            <div className='bg-gray-800 h-[4rem] w-[4rem] flex items-center justify-center rounded-xl'>
                             <img src={img3} width={25} height={35}/>
                            </div>
                            <div className='bg-gray-800 h-[4rem] w-[4rem] flex items-center justify-center rounded-xl'>
                             <img src={img4} width={25} height={35}/>
                            </div>
                           
                          </div>
                    </div>
                    <div className='w-full bg-gray-800 flex-1 mt-12 rounded-xl relative'>
                           <img src={robot2} className='w-full h-full object-cover'/>
                           <h2 className='mono bg-gray-700 text-white text-md rounded-l-3xl top-8 left-8 rounded-tr-3xl p-5 absolute'>
                              Video genrated!
                              <p className='text-sm text-right text-gray-400'>1m ago</p>
                           </h2>
                    </div>
                  </div>
        </div>
    );
}

export default Video;
