import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dummy from "../../assets/images/img.png"



function Home() {
    const [showCreateUserBox, setShowCreateUserBox] = useState(false)

    const navigate = useNavigate();


    function addUser() {
        setShowCreateUserBox(true)
    }

    function userCreated() {
        setShowCreateUserBox(false)
    }

    function handleStart() {

        navigate("/about");

    }
    return (
        <>
            <div>
                <div className='bg-black text-white flex justify-around py-8'>
                    <h1 className='text-3xl' >Logo</h1>
                    <button onClick={addUser} className='border-2 px-5 py-1 cursor-pointer'>
                        Create User
                    </button>
                </div>

                <div
                    id="hideUserbox"
                    className={`bg-white w-[600px] h-[250px] px-10 absolute right-120 ${showCreateUserBox ? "" : "hidden"}`}
                >
                    <h3 className="text-2xl my-8">Create Username</h3>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="border-2 w-[400px] py-1 pl-6 capitalize"
                    />

                    <div className="flex justify-between my-10 w-[250px]">
                        <button onClick={userCreated}
                            className="bg-black text-white px-10 py-1 cursor-pointer">
                            Create
                        </button>
                        <button
                            className="bg-red-800 text-white px-10 py-1 cursor-pointer">
                            Quit
                        </button>
                    </div>
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