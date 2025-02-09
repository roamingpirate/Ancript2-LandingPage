import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';
import AvatarPreview from '../components/avatarPreview';
import WaitlistPopup from './waitlist';


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

const Why = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    

    return(
        <section className="pt-10 mt-[130px]  md:mt-[150px] w-fit mx-auto px-4 md:px-12 lg:px-0 mb-[55px] md:mb-[75px]">
            {/* Sub heading */}
            <div className='w-fit px-2 py-1 bg-[#998DF4]/15 rounded-xl my-[20px] md:my-[30px]'> 
                <p className='text-[#5445C5] font-sans font-medium text-sm sm:text-md md:text-lg lg:text-xl'> Why Course Creators Love Us </p>
            </div>

            {/* Heading & points & Image */}
            <div className="flex">
                {/* Heading & points */}
                <div>
                    <p className="font-sans font-bold text-[clamp(1.9rem,4vw,2.8rem)] sm:w-[480px] lg:w-[550px] mb-6">
                        Ancript Beats Screen Recordings & Text-Heavy Slides
                    </p>
                    <div className="flex-grow flex md:hidden mx-auto w-[clamp(300px,65vw,60rem)] my-2 mb-8">
                    <img src="why.png" alt="Why Us" className="h-auto rounded-xl"/>
                    </div>
                    <Points heading={'Boost Completion Rates'} text={'– Students stay hooked with avatar-guided lessons'}/>
                    <Points heading={'Save 10+ Hours/Month'} text='– No scripting, editing, or hiring voice actors.'/>
                    <Points heading='Multilingual Reach' text='– Auto-translate explanations into 20+ languages.'/>
                    <Points heading='Works Anywhere' text='– Embed avatars in Teachable, Thinkific, or your LMS.'/>
                </div>
                {/* Image */}
                <div className=" flex-grow hidden md:flex items-center justify-center mx-8">
                    <img src="why.png" alt="Why Us" className="w-[clamp(30rem,36vw,34rem)] h-auto rounded-xl"/>
                </div>
            </div>
            {/* CTA */}
            <div className='flex mt-[30px] md:mt-[60px] space-x-15'>
                <div onClick={() => setShowPopup(true)} className='w-fit px-8 py-2 border-1 border-gray-600 shadow-sm shadow-gray-200 rounded-xl cursor-pointer'>
                  <p className='text-gray-900 font-sans font-medium lg:text-lg'>Get Started Now</p>
                </div>
                <img src="avatar2.png" onClick={() => setIsVisible(!isVisible)} className="h-[46px] w-[46px] rounded-full border-2 border-blue-900 cursor-pointer glow-border"/>
            </div>
            {isVisible && <AvatarPreview avatarNumber={2} isMale={true} isVisible={isVisible} setIsVisible={setIsVisible}/>}
            {showPopup && <WaitlistPopup onClose={() => setShowPopup(false)} />}
        </section>
    )
}

export default Why;