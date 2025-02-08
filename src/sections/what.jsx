import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';
import AvatarPreview from '../components/avatarPreview';

const Points = ({heading, text}) => {
    return(
        <div className='flex items-center mb-4'>
            <DoneIcon fontSize='small' className="text-white bg-[#5445C5] rounded-full ml-[2px] mr-4 p-1"/>
            <p className='font-sans font-medium text-gray-700 text-[clamp(0.9rem,2vw,1rem)]'>
                <span className='font-bold'>
                    {heading}
                </span>
                    {text}
            </p> 
        </div>
    )
}

const What = () => {

    

    return(
        <section className="pt-10 mt-[75px] w-fit mx-auto px-4 md:px-12 lg:px-0 mb-[75px]">
            {/* Sub heading */}
            <div className='w-fit px-2 py-1 bg-[#998DF4]/15 rounded-xl my-[20px] md:my-[30px]'> 
                <p className='text-[#5445C5] font-sans font-medium text-sm sm:text-md md:text-lg lg:text-xl'> What Makes This Powerful? </p>
            </div>

            {/* Heading & points & Image */}
            <div className="flex">
                {/* Heading & points */}
                <div>
                    <p className="font-sans font-bold text-[clamp(1.9rem,4vw,2.8rem)] sm:w-[480px] lg:w-[550px] mb-6">
                        Features
                    </p>
                    <div className="flex-grow flex md:hidden mx-auto w-[clamp(300px,65vw,60rem)] my-2 mb-8">
                    <img src="what.jpg" alt="Why Us" className="h-auto rounded-xl"/>
                    </div>
                    <Points heading={'AI-Generated Voice & Avatars'} text={' – No need to record videos, just speak!'}/>
                    <Points heading={'Pin Explanations to Any Slide'} text=' – Highlight key points where needed.'/>
                    <Points heading='Smart Refinement' text=' – AI polishes your speech into a perfect script.'/>
                    <Points heading='Effortless Sharing' text=' – One link, unlimited clarity.'/>
                    <Points heading='LMS & Platform Ready' text=' – Export as video, embed code, or integrate with Teachable/Thinkific in one click.'/>
                    {/* CTA */}
                    <div className='flex mt-[30px] md:mt-[60px] space-x-15'>
                        <div className='w-fit px-8 py-2 border-1 border-gray-600 shadow-sm shadow-gray-200 rounded-xl cursor-pointer'>
                        <p className='text-gray-900 font-sans font-medium lg:text-lg'> Get Started </p>
                        </div>
                    </div>
                </div>
                {/* Image */}
                <div className=" flex-grow hidden md:flex items-center justify-center mx-8">
                    <img src="what.jpg" alt="Why Us" className="w-[clamp(30rem,36vw,27rem)] h-auto rounded-xl"/>
                </div>
            </div>
        </section>
    )
}

export default What;
