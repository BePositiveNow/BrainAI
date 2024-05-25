import check from "../assets/check-02.svg"
import React from 'react';
import img1 from "../assets/collaboration/discord.png"
import img2 from "../assets/collaboration/figma.png"
import img3 from "../assets/collaboration/framer.png"
import img4 from "../assets/collaboration/notion.png"
import img5 from "../assets/collaboration/photoshop.png"
import img6 from "../assets/collaboration/protopie.png"
import img7 from "../assets/collaboration/raindrop.png"
import img8 from "../assets/collaboration/slack.png"
const Collab = () => {
    return (
        <div className='p-10 w-full flex items-center justify-between max-sm:flex-col max-sm:gap-16 max-sm:items-start'>
            <div >

            <h1 className='font-bold text-6xl max-sm:text-4xl'>AI Chat for <br /> Seamless <br /> collabration</h1>
            <div className="mt-8 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <img src={check } width={35} height={35} />
                      <h1 className="font-semibold text-2xl max-sm:text-xl">Seamless Integration</h1>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={check } width={35} height={35} />
                      <h1 className="font-semibold text-2xl max-sm:text-xl">Smart Automation</h1>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={check } width={35} height={35} />
                      <h1 className="font-semibold text-2xl max-sm:text-xl">Top notch Security</h1>
                  </div>
            </div>
            <button className="bg-black text-white w-[100px] rounded-md h-[2.5rem] m-8">Try now</button>
            </div>
            <div className="grid grid-cols-4 max-w-md gap-16">
                  
                     <img src={img1} width={55} height={55}/> 
                     <img src={img2} width={55} height={55}/> 
                     <img src={img3} width={55} height={55}/> 
                     <img src={img4} width={55} height={55}/> 
                     <img src={img5} width={55} height={55}/> 
                     <img src={img6} width={55} height={55}/> 
                     <img src={img7} width={55} height={55}/> 
                     <img src={img8} width={55} height={55}/> 
                     
                  
            </div>
        </div>
    );
}

export default Collab;
