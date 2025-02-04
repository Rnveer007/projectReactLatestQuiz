import React from 'react'
import { NavLink } from 'react-router-dom'

function About({latestUser}) {

    return (
        <>
            <div>
                <div className='bg-black text-white flex justify-evenly py-8'>
                    <h1 className='text-3xl' >Logo</h1>
                    <ul className='flex'>
                        <li className='px-3 '>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className='px-3 '>
                            <NavLink to="">Quiz</NavLink>
                        </li>
                        <li className='px-3 '>
                            <NavLink to="">Score</NavLink>
                        </li>
                    </ul>
                    <h2>{latestUser?.name}</h2>
                </div>

                <div className='bg-gray-500 h-[863px] flex justify-center pt-36'>
                    <div >
                        <button className='block w-[500px] bg-blue-300 border-2 py-3 my-10 text-2xl cursor-pointer  '>
                            MUSIC 
                        </button>
                        <button className='block w-[500px] bg-blue-300 border-2 py-3 my-10 text-2xl  cursor-pointer '>
                            Modern ART 
                        </button>
                        <button  className='block w-[500px] bg-blue-300 border-2 py-3 my-10 text-2xl  cursor-pointer '>
                            CODING 
                        </button>
 
                    </div>
                </div>
            </div>
        </>
    )
}

export default About