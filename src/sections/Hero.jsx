import AvatarPreview from "../components/avatarPreview";
import { useState } from "react";
import HeroSectionVideo from "../subComponents/heroSectionVideo";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="pt-[100px] bg-white">
            <div className="px-8 md:flex flex-col justify-center items-center sm:space-x-1 md:space-y-2 lg:space-y-3">
                <p className="text-3xl sm:text-[clamp(2.5rem,4vw,3.2rem)] md:text-center font-sans font-bold text-gray-800">
                    Turn Boring Slides into Interactive Lessons - <span className="inline lg:block"> Let Your AI Avatar Teach for You</span> 
                </p>
            </div>
            <div className="mx-auto pt-3 sm:pt-2 px-8 md:px-0 md:w-[50%] xl:w-[45%] ">
                <p className="text-sm leading-relaxed md:text-center sm:text-md md:text-lg font-sans font-medium text-gray-600 ">
                    Boost course completion rates by 60% with animated avatars that guide students 
                    through your content. No video editing required!
                </p>
            </div>
            <div className="px-8 pt-4 md:px-0 flex md:justify-center items-center space-x-2.5 cursor-pointer" onClick={() => setIsVisible(!isVisible)}>
                <img src="avatar.png" className="h-[46px] w-[46px] rounded-full border-2 border-blue-900"/>
                <div className="bg-gray-700 text-white text-sm px-3 py-2 rounded-md shadow-lg relative">
                    Click Me!
                    <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-700"></div>
                </div>
            </div>
            {isVisible && <AvatarPreview avatarNumber={1} isMale={false} isVisible={isVisible} setIsVisible={setIsVisible}/>}
            <div className="w-[80%] flex justify-center items-center mx-auto mt-8 shadow-md md:shadow-md cursor-pointer shadow-purple-400 rounded-lg">
                <HeroSectionVideo/>
            </div>
        </div>
    )
}

export default Hero;