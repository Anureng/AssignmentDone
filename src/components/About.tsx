import React from 'react'

const About = () => {
    return (
        <div className=''>
            <div className='flex items-center justify-center '>
                <img src="bg2.jpg" alt="Loading..." className='bg-auto bg-no-repeat w-2/5  h-96' />
                <div className=' w-2/5 bg-gray-900 text-white h-96 flex flex-col justify-center p-4  space-y-3' >
                    <p className='text-gray-100'>SECTION 01</p>
                    <p className='text-4xl font-semibold'>MATCH APPLICATION</p>
                    <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa exercitationem modi fuga reiciendis. Harum quia aut inventore reprehenderit quidem accusantium eaque natus hic dignissimos quaerat, qui quasi nesciunt excepturi perspiciatis.</p>
                    <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa exercitationem modi fuga reiciendis. Harum quia aut inventore reprehenderit quidem accusantium eaque natus hic dignissimos quaerat, qui quasi nesciunt excepturi perspiciatis.</p>
                    <button className='border w-36 rounded-full  py-2'>Click Data Option</button>
                    <button className=' w-32 rounded-full py-2 bg-yellow-400 '>Browse API </button>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div className=' w-2/5 bg-gray-900 text-white h-96 flex flex-col  justify-center p-4  space-y-3' >
                    <p className='text-gray-100'>SECTION 01</p>
                    <p className='text-4xl font-semibold'>MEET THE TEAM</p>
                    <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa exercitationem modi fuga reiciendis. Harum quia aut inventore reprehenderit quidem accusantium eaque natus hic dignissimos quaerat, qui quasi nesciunt excepturi perspiciatis.</p>
                    <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa exercitationem modi fuga reiciendis. Harum quia aut inventore reprehenderit quidem accusantium eaque natus hic dignissimos quaerat, qui quasi nesciunt excepturi perspiciatis.</p>
                    <button className='border w-36 rounded-full  py-2'>Click Data Option</button>
                    {/* <button className='border w-32 rounded-full py-2'>Browse API </button> */}
                </div>
                <img src="bg2.jpg" alt="Loading..." className='bg-auto bg-no-repeat  h-96 w-2/5 ' />
            </div>
            <div className='flex items-center justify-center'>
                <img src="bg2.jpg" alt="Loading..." className='bg-auto w-2/5 bg-no-repeat  h-96 ' />
                <div className=' w-2/5 bg-gray-900 text-white h-96 flex flex-col justify-center p-4  space-y-3 ' >
                    <p className='text-gray-100'>SECTION 01</p>
                    <p className='text-2xl font-semibold'>WHAT WE DO</p>
                    <div className='flex w-11/12 items-center justify-center '>
                        <div>
                            <h1 className='text-lg font-bold'>Interface Design</h1>
                            <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique perferendis dolores pariatur modi exercitationem, explicabo adipisci </p>
                        </div>
                        <div>
                            <h1 className='text-lg font-bold'>Interface Design</h1>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique perferendis dolores pariatur modi exercitationem, explicabo adipisci </p>
                        </div>
                    </div>
                    <div className='flex w-11/12'>
                        <div>
                            <h1 className='text-lg font-bold'>Interface Design</h1>
                            <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique perferendis dolores pariatur modi exercitationem, explicabo adipisci </p>
                        </div>
                        <div>
                            <h1 className='text-lg font-bold'>Interface Design</h1>
                            <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique perferendis dolores pariatur modi exercitationem, explicabo adipisci </p>
                        </div>
                    </div>
                    <button className='border w-36 rounded-full  py-1 text-sm'>Click Data Option</button>
                    {/* <button className='border w-32 rounded-full py-2'>Browse API </button> */}
                </div>
            </div>
        </div>
    )
}

export default About
