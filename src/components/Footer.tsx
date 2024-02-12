import React from 'react'
import { FaGithub, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-yellow-400 p-4 space-y-14'>
            <div className='flex  justify-around  p-4 '>
                <div className='w-96 space-y-4'>
                    <div>
                        <h1 className='font-semibold text-xl'>About Us</h1>
                        <p className='font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing</p>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl'>About Us</h1>
                        <p className='font-light'>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, iste sequi expedita dolore impedit natus, aliquam id alias ratione amet quis ipsum sapiente facere</p>
                    </div>
                    <div>
                        <button className='border-2 px-3 py-1 rounded-full border-white text-white '>About Us</button>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div>
                        <h1 className='font-semibold text-xl'>Service</h1>
                        <p className='font-light'>lorem ipsum sit </p>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl'>Service</h1>
                        <div className='font-light space-y-1'>
                            <p>Lorem ipsum sit</p>
                            <p>Lorem ipsum sit</p>
                            <p>Lorem ipsum sit amet consectetur</p>
                            <p>Lorem ipsum sit</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-1'>
                    <div>
                        <h1 className='text-lg'>Contact With Us</h1>
                        <div className='flex space-x-4'>
                            <FaTwitter />
                            <FaInstagram />
                            <FaGithub />
                            <FaFacebookF />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-lg'>Contact With Us</h1>
                        <div className='flex space-x-4'>
                            <FaTwitter />
                            <FaInstagram />
                            <FaGithub />
                            <FaFacebookF />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center p-4'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nostrum illum sint </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

export default Footer
