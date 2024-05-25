import React from 'react';
import logo from "../assets/brainwave.svg"
const Header = () => {
    return (
        <div className='w-full h-[3rem] p-10 flex items-center justify-around max-sm:justify-between fixed bg-white z-10 top-0 left-0'>
            <div className='flex items-center'>
                <div className=''>
                   <img src={logo} />

                </div>
                   <p className='font-semibold text-purple-700 text-xl'>BrainAI</p>
            </div>

            <div className='flex items-center gap-4 max-sm:hidden'>
                  <a href="#" className='text-sm font-bold mono'>Features</a>
                  <a href="#" className='text-sm font-bold mono'>How to use?</a>
                  <a href="#" className='text-sm font-bold mono'>Pricing</a>
                  <a href="#" className='text-sm font-bold mono'>Road map</a>
                  <a href="#" className='text-sm font-bold mono'>New account</a>
            </div>
                   <button className='w-[100px] h-[2.5rem] rounded-full bg-purple-500 text-white border-none outline-none '>Sign Up</button>
            
            
        </div>
    );
}

export default Header;
