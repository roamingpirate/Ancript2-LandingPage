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

const How = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    return(
        <div className='bg-blue-50'>
        <section className="pt-10 mt-[55px] md:mt-[75px]  pb-[55px] md:pb-[75px] bg-blue-50 w-fit mx-auto px-4 md:px-12 lg:px-0">
            {/* Sub heading */}
            <div className='w-fit px-2 py-1 bg-[#998DF4]/15 rounded-xl my-[20px] md:my-[30px]'> 
                <p className='text-[#5445C5] font-sans font-medium text-sm sm:text-md md:text-lg lg:text-xl'> How It Works </p>
            </div>

            {/* Heading & points & Image */}
            <div className="flex">
                {/* Heading & points */}
                <div>
                    <p className="font-sans font-bold text-[clamp(1.9rem,4vw,2.8rem)] sm:w-[480px] lg:w-[550px] mb-6">
                        From Slides to Smart Explanations in Minutes!
                    </p>
                    <div className="flex-grow flex md:hidden mx-auto w-[clamp(180px,40vw,20rem)] my-2 mb-8">
                    <img src="how.png" alt="Why Us" className="h-auto rounded-full"/>
                    </div>
                    <Points heading={'Upload Your Presentation'} text={'– Import your PowerPoint or PDF.'}/>
                    <Points heading={'Record Your Thoughts Casually'} text=' – No need for perfection. Just speak.'/>
                    <Points heading='AI Enhances Everything' text=' – Your words become a polished script, narrated by an expressive avatar.'/>
                    <Points heading='Place Avatars Anywhere in Your Slides' text='– Guide your audience at key moments.'/>
                    <Points heading='Share with a Simple Link' text='– Viewers can interact with the slides anytime, anywhere.'/>
                    {/* CTA */}
                    <div className='flex mt-[30px] md:mt-[60px] space-x-15'>
                        <div onClick={() => setShowPopup(true)} className='w-fit px-8 py-2 border-1 border-gray-600 shadow-sm shadow-gray-200 rounded-xl cursor-pointer'>
                        <p className='text-gray-900 font-sans font-medium lg:text-lg'> Learn More </p>
                        </div>
                        <img src="avatar3.png" onClick={() => setIsVisible(!isVisible)} className="h-[46px] w-[46px] rounded-full border-2 border-blue-900 cursor-pointer glow-border"/>
                    </div>
                </div>
                {/* Image */}
                <div className=" flex-grow hidden md:flex items-center justify-center mx-8">
                    <img src="how.png" alt="Why Us" className="w-[clamp(18rem,36vw,26rem)] h-auto rounded-full"/>
                </div>
            </div>
            {isVisible && <AvatarPreview avatarNumber={3} isMale={false} isVisible={isVisible} setIsVisible={setIsVisible}/>}
            {showPopup && <WaitlistPopup onClose={() => setShowPopup(false)} />}
        </section>
        </div>
    )
}

export default How;