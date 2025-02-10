import React from 'react';

const Header = () => {

    const [showPopup, setShowPopup] = useState(false);
    
    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-3 md:p-3 bg-white border-b-2 border-gray-200 shadow-sm z-50">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <img src="logo.png" alt="Company Logo" className="h-6 w-6 md:h-8 md:w-8" />
                <span className="text-xl md:text-3xl font-bold text-black">Ancript</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex justify-center space-x-6 font-sans font-normal text-black">
                <a href="#why" className="text-md hover:text-blue-500 cursor-pointer">Why Us</a>
                <a href="#how" className="text-md hover:text-blue-500 cursor-pointer">How it Works</a>
                <a href="#what" className="text-md hover:text-blue-500 cursor-pointer">Features</a>
            </nav>

            {/* Get Started Button */}
            <div onClick={() => setShowPopup(true)} className='p-1 md:p-2 bg-[#6E5EE5]/35 rounded-2xl flex justify-center items-center'>
                <div className='px-1.5 py-0.5 md:px-3 md:py-1 bg-[#6E5EE5]/55 rounded-2xl flex justify-center items-center'>
                    <p className='text-md md:text-lg font-bold text-white'>Get Started</p>
                </div>
            </div>
            {showPopup && <WaitlistPopup onClose={() => setShowPopup(false)} />}
        </header>
    );
};

export default Header;
