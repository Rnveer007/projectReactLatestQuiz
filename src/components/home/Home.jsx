import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dummy from "../../assets/images/img.png"
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// import setLatestUser from '../../App.jsx'

function Home() {
    // console.log(setLatestUser)  
    const [showCreateUserBox, setShowCreateUserBox] = useState(false)
    const [userInput, setUserInput] = useState("");
    // const [latestUser, setLatestUser] = useState(null);
    const [showUserName, setShowUserName] = useState(false);
    const [showSuccesfullAlert, setShowSuccesFullAlert] = useState(false);
    const [showRedAlert, setShowRedAlert] = useState(false);

    // console.log(latestUser)

    // const [users, SetUsers] = useState(
    //     localStorage.getItem('userData') !== null ? JSON.parse(localStorage.getItem("userData")) : []
    // )
    // useEffect(() => {
    //     localStorage.setItem("userData", JSON.stringify(users))
    // }, [users]);

    const navigate = useNavigate();


    function addUser() {
        setShowCreateUserBox(true)
    }

    function userCreated() {
        if (!userInput) return;

        setShowCreateUserBox(false)
        setShowUserName(true)
        setShowSuccesFullAlert(true)

        setTimeout(() => {
            setShowSuccesFullAlert(false)
        }, 500);

        const userObj = { id: Date.now(), name: userInput };
        // SetUsers([...users, userObj]);
        // setLatestUser(userObj)
        setUserInput('')
    }

    function handleStart() {
        if (latestUser === null) {
            setShowRedAlert(true);

            setTimeout(() => {
                setShowRedAlert(false)
            }, 500);
        }
        else {
            navigate("/about");
        }


    }
    return (
        <>
            <div>
                <div className='bg-white text-black flex justify-around py-8'>
                    <h1 className='text-3xl font-bold' >Logo</h1>

                    <button onClick={addUser} className={`border-2 px-5 py-1 font-bold cursor-pointer ${showUserName ? "hidden" : ""}`}>
                        Create User
                    </button>
                    <h1 className={`${showUserName ? "" : "hidden"}`}></h1>
                </div>

                <div
                    id="hideUserbox"
                    className={`bg-white w-[600px] h-[250px] px-10 absolute right-120 ${showCreateUserBox ? "" : "hidden"}`}
                >
                    <h3 className="text-2xl my-8">Create Username</h3>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        value={userInput} onChange={(e) => setUserInput(e.target.value)
                        }
                        className="border-2 w-[400px] py-1 pl-6 capitalize"
                    />

                    <div className="flex justify-between my-10 w-[250px]">
                        <button onClick={userCreated}
                            className="bg-black text-white px-10 py-1 cursor-pointer">
                            Create
                        </button>
                        <button onClick={() => setShowCreateUserBox(false)}
                            className="bg-red-800 text-white px-10 py-1 cursor-pointer">
                            Quit
                        </button>
                    </div>
                </div>

                <div
                    className={`font-bold w-[300px] bg-green-600 text-center py-3 absolute right-170 top-50 ${showSuccesfullAlert ? "" : "hidden"}`}
                >
                    <h1>User Created Successfully</h1>
                </div>

                <div className={`text-white font-bold w-[300px] bg-red-600 text-center py-3 absolute right-180 top-50 ${showRedAlert ? "" : "hidden"}`} >
                    <h1> User not found </h1>
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