import React from 'react'
import Header from '../header/header'
import Footer from '../footer/Footer'

import { Outlet } from 'react-router-dom'

function First() {
    return (
        <>
            <Header />
            <Outlet />  
            <Footer />
        </>
    )
}

export default First