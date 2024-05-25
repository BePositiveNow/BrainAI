import React from 'react';
import hero from "../assets/roadmap/hero.png"
import img1 from "../assets/roadmap/image-1.png"
import img2 from "../assets/roadmap/image-3.png"
import img3 from "../assets/roadmap/image-4.png"

const New = () => {
    return (
        <div className='p-10 mt-12 w-full h-max'>
            <h2 className='font-semibold text-center uppercase text-gray-400  '>[ Ready to get Started ]</h2>
            <h1 className='font-bold text-6xl max-sm:text-4xl text-center mt-8'>What we're working on.</h1>
            <div className='flex items-center justify-between w-full h-max mt-12 max-sm:flex-col'>
                <div className='flex-1 max-sm:h-[100vh] bg-[rgb(19,29,29)] relative rounded-xl f'>

                    <div className='absolute top-8 right-8 text-gray-500 text-sm'>

                        [ May 2023 ]
                    </div>
                    <img src={img1} className='w-full h-full object-contain' />
                    <div className='text-3xl font-semibold absolute text-white bottom-8 left-8'>
                        Voice Recording
                    </div>
                </div>

                <div className='flex-1 relative rounded-lg '>
                    
                        <div className=' text-gray-500 absolute top-8 left-8'>
                            [ May 2023 ]
                            
                        </div>
                    
                    <img src={hero} className='w-full h-full object-contain' />
                </div>
            </div>
            <div className='w-full flex items-center max-sm:flex-col'>
                <div className='flex-1 h-max bg-gray-900 relative rounded-xl flex items-center flex-col pb-5'>
                    <div className='absolute top-8 left-8 text-gray-400'>
                        [ May 2023 ]
                    </div>
                    
                      <img src={img2} className='object-contain'/>
                      <div>
                          <h1 className='text-4xl text-center font-bold mt-2 text-white'>Chatbot customization</h1>
                          <p className='mt-2 text-sm text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur quos amet quaerat! Est, facere!</p>
                      </div>
                </div>
                <div className='flex-1 p-5'>
                    <div className='flex items-center justify-between'>
                          <h3 className='text-gray-400'>[ May 2023 ]</h3>
                          <div className='bg-black text-white pl-8 pr-8 pt-2 pb-2 rounded-md'>
                              In progress
                          </div>
                    </div>
                    <img src={img3} />
                    <div>
                    <h1 className='text-4xl text-center font-bold mt-6'>Integration with API's</h1>
                          <p className='mt-4 text-sm text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur quos amet quaerat! Est, facere!</p>
                    </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-center w-full'>
                  <button className='w-[130px]  h-[2.5rem] text-white bg-black rounded-md uppercase '>our roadmap</button>
                  </div>
        </div>
    );
}

export default New;
