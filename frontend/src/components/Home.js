import React from "react"
import Hero from './Hero';
import Latest from './Latest';
import Author from './Author';
import Footer from './Footer/Footer';

function Home() {
    return (
        <>
        <Hero/>
        <Latest/>
        {/* <Highlights/> */}
        <Author/>
        <Footer/>
        </>
    )
}

export default Home;