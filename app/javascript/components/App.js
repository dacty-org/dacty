import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import {LoggedinHeader, NotLoggedinHeader, Footer, Content } from "./index";

function App() {
    return (
        <>
        {/* <NotLoggedinHeader/> */}
        <LoggedinHeader/>
            <Routes>
                <Route exact path= "/" element={<Content />} />
            </Routes>
        <Footer />
        </>
    )
}

export default App
