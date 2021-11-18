import React from 'react'
import './App.css'
import LoggedinHeader from './LoggedinHeader';
import NotLoggedinHeader from './NotLoggedinHeader';
import ContentCard from './ContentCard';
import Footer from './Footer';

function App() {
    return (
        <>
        {/* <NotLoggedinHeader/> */}
        <LoggedinHeader/>
        <ContentCard />
        <Footer />
        </>
    )
}

export default App
