import React from 'react'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function First({latestUser,setLatestUser}) {
    return (
        <>
            <Header latestUser ={latestUser} setLatestUser={setLatestUser}  />
            <Outlet />  
            <Footer />
        </>
    )
}

export default First