import React from 'react'
import { useNavigate } from 'react-router-dom'
import dummy from "../../assets/images/img.png"
 


function Home() {

    const navigate = useNavigate();

function handleStart(){
    
    navigate("/about");

}
    return (
        <>
            <div>
                <div className='bg-black text-white flex justify-around py-8'>
                    <h1 className='text-3xl' >Logo</h1>
                    <button className='border-2 px-5 py-1'>
                        Create User
                    </button>
                </div>
                <div className='bg-gray-500 h-[862px] flex justify-around items-center '>
                    <div>
                        <h1 className='text-white font-bold text-5xl w-[500px] leading-16'>Take Your <span className='text-yellow-500'>Knowledge</span> to the next Level</h1>
                        <button onClick={handleStart} className='border-2 px-10 py-1 bg-black text-white mt-8 cursor-pointer'>Start</button>
                    </div>

                    <div><img src={dummy} alt="" /></div>
                </div>
            </div>

        </>
    )
}

export default Home