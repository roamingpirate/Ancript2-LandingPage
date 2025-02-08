import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-2 md:p-3 bg-white border-b-2 border-gray-200">
            <div className="flex items-center space-x-2">
                <img src="logo.png" alt="Company Logo" className="h-6 w-6 md:h-8 md:w-8" />
                <span className="text-xl md:text-3xl font-bold text-black">Ancript</span>
            </div>
            <div className="hidden md:flex justify-center space-x-6 font-sanse font-normal text-black">
                <span className="text-md">Why Us</span>
                <span className="text-md">How it works</span>
                <span className="text-md">Features</span>
            </div>
            <div>
                {/* Get Started Button */}
                <div className='p-1 md:p-2 bg-[#6E5EE5]/35  rounded-2xl flex justify-center items-center'>
                    <div className='px-1.5 py-0.5 md:px-3 md:py-1 bg-[#6E5EE5]/55  rounded-2xl flex justify-center items-center'>
                        <p className='text-md md:text-lg font-bold text-white'>Get Started</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
