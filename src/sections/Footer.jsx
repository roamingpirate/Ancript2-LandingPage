import { useState } from "react";
import WaitlistPopup from "./waitlist";

const Footer = () => {

    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="flex py-[30px] pb-[230px] md:pb-[300px] justify-center items-center w-screen mt-[200px] bg-[linear-gradient(to_bottom,white_20%,#e0dbff_20%)]" >
            <div className="rounded-4xl bg-white flex-col md:flex-row w-[clamp(300px,70vw,1500px)] h-[250px] md:h-[200px] flex justify-center items-center px-[4vw]" style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
                <p className="font-bold text-center md:text-left font-sans text-[clamp(1.7rem,2.5vw,6rem)] text-gray-800 p-4 md:flex-grow"> 
                    Join The Ancript Waitlist Now.
                </p>
                <div onClick={() => setShowPopup(true)} className="bg-[#857ad8] p-4 rounded-4xl cursor-pointer">
                    <p className="text-white font-sans font-medium text-center text-[clamp(1rem,2vw,1.5rem)]">Join Now</p>  
                </div>
            </div>
            {showPopup && <WaitlistPopup onClose={() => setShowPopup(false)} />}
        </div>
    );
}


export default Footer;