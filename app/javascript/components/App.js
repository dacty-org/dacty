import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import LoggedinHeader from './LoggedinHeader';
import NotLoggedinHeader from './NotLoggedinHeader';
import Footer from './Footer';
import ContentList from './ContentList';

function App() {
    return (
        <>
        {/* <NotLoggedinHeader/> */}
        <LoggedinHeader/>
            <Routes>
                <Route exact path= "/contents" element={<ContentList />} />
                <Route exact path= "/contents/new" element={<ContentList />} />
                <Route path= "/contents/:id/edit" element={<ContentList />} />
            </Routes>
        <Footer />
        </>
    )
}

export default App
