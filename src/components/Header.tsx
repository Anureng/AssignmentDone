import React from 'react'

const Header = () => {
    return (
        <div style={{
            backgroundImage: `url("/bg1.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }} className='h-screen '>
            <div className='flex items-center justify-around text-white text-lg'>
                <div>Profile</div>
                <div className='flex list-none space-x-6 p-4'>
                    <li className='border-b border-white'>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Education</li>
                </div>
            </div>
            <div className=' text-white space-y-6 boder-red-900 flex flex-col items-center justify-center h-[80vh]'>
                <h1 className='text-7xl font-bold '>AWARD WINNING AGENCY</h1>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet facilis in dolore </p>
                <button className=' border-4 border-white px-8 py-3 text-xl rounded-full '>Browse The Template</button>
            </div>
        </div>
    )
}

export default Header
