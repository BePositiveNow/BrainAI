import React from 'react';
import img1 from "../assets/socials/discord.svg"
import img2 from "../assets/socials/facebook.svg"
import img3 from "../assets/socials/instagram.svg"
import img4 from "../assets/socials/telegram.svg"
import img5 from "../assets/socials/twitter.svg"
const Footer = () => {
    return (
        <div className='p-10 w-full flex items-center max-sm:flex-col justify-between border-t border-solid border-gray-200'>

            <p className='text-sm text-gray-500'>©2024 All rights reserved</p>
            <div className="flex items-center gap-4 ">
                  <img src={img1} width={35} height={35}/>
                  <img src={img2} width={35} height={35}/>
                  <img src={img3} width={35} height={35}/>
                  <img src={img4} width={35} height={35}/>
                  <img src={img5} width={35} height={35}/>
            </div>
            
        </div>
    );
}

export default Footer;
