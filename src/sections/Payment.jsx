import React from 'react';
import ball from "../assets/4-small.png"
import { PaymentArr } from '../constants';
import check from "../assets/check.svg"
const Payment = () => {
    return (
        <div>
            <div className='w-[20rem] h-[20rem] mx-auto'>
            <img src={ball}  className='w-full h-full object-cover'/>
            </div>
            <div className='text-center mt-16'>
                  <h2 className='uppercase text-sm text-green-600'>[ Get Started with BrainAI ]</h2>
                  <h1 className='font-semibold text-6xl max-sm:text-4xl '>Pay once , use forever.</h1>
            </div>
            <div className='flex items-center gap-4 mt-12 justify-center max-sm:flex-col'>
                  {
                     PaymentArr.map((item) => {
                          return <div className='w-[20rem] bg-gray-100 p-5 flex flex-col gap-6 rounded-md border border-solid border-gray-200'>
                            <h1 className= {`font-semibold text-4xl ${item.color}` }>{item.title}</h1>
                            <p className='text-sm max-w-sm text-gray-500'>{item.desc}</p>
                            {item.price &&
                            <h3 className='font-semibold text-6xl'><sup>$</sup>{item.price}</h3>
                            }
                            <button className='bg-black rounded-md text-white h-[2.5rem]'>{item.btntxt}</button>
                            <ul className='flex flex-col gap-4'>
                                <li className='flex items-center gap-2 border-t border-solid border-gray-200 p-2'>
                                      <img src={check} width={35} height={35}/>
                                      <p className='text-black text-sm'>{item.line1}</p>
                                </li>
                                <li className='flex items-center gap-2 border-t border-solid border-gray-200 p-2'>
                                      <img src={check} width={35} height={35}/>
                                      <p className='text-sm text-black'>{item.line2}</p>
                                </li>
                            </ul>
                              </div>
                     })
                  }
            </div>
            <div className='flex items-center justify-center'>

            <a className="underline text-sm mt-12"href="#">See the full details</a>
            </div>
        </div>
    );
}

export default Payment;
