import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import LoggedinHeader from './LoggedinHeader';
import NotLoggedinHeader from './NotLoggedinHeader';
import Footer from './Footer';
import Content from './Content';

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
