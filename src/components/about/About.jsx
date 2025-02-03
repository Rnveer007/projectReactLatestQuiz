import React from 'react'

function About() {
    return (
        <>
            <div>
                <div className='bg-black text-white flex justify-evenly py-8'>
                    <h1 className='text-3xl' >Logo</h1>
                    <ul className='flex'>
                        <li className='px-3'>
                            Home
                        </li>
                        <li className='px-3'>
                            Quiz Section
                        </li>
                        <li className='px-3'>
                            Score
                        </li>
                    </ul>
                    <h2>User Name</h2>
                </div>

                <div className='bg-gray-500 h-[863px] flex justify-center pt-36'>
                    <div >
                        <button className='block w-[500px] bg-blue-300 border-2 py-3 my-10 text-2xl '>
                            MUSIC 
                        </button>
                        <button className='block w-[500px] bg-blue-300 border-2 py-3 my-10 text-2xl '>
                            Modern ART 
                        </button>
                        <button className='block w-[500px] bg-blue-300 border-2 py-3 my-10 text-2xl '>
                            CODING 
                        </button>

                    </div>
                </div>
  


            </div>
        </>
    )
}

export default About