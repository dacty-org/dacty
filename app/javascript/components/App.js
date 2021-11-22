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
                <Route exact path= "/contents" element={<Content />} />
                <Route exact path= "/contents/new" element={<Content />} />
                <Route path= "/contents/:id/edit" element={<Content />} />
            </Routes>
        <Footer />
        </>
    )
}

export default App
