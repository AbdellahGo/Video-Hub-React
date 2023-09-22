import React from 'react'
import { Footer, NavBar } from '../Components'
import { Outlet } from 'react-router-dom'
const Root = () => {
    return (
        <div className='root bg-black text-white d-flex flex-column justify-content-between'>
            <div>
                <NavBar />
                <div className='pb-4'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Root