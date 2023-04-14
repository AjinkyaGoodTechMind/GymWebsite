import React from 'react'
import "./Home.css"
import Navbar from '../Navbar/Navbar'
import LandingPage from '../Landingpage/LandingPage'
import FeaturesPage from '../Features/FeaturesPage'
import Gallery from '../Gallery/Gallery'
import Facility from '../Facilities/Facility'
import Footer from '../Footer/Footer'
import CoppyWrite from '../CoppyWrite/CoppyWrite'

function Home() {
    return (
        <div className='home=container'>

            <Navbar />
            <LandingPage />
            <FeaturesPage />
            <Gallery />
            <Facility />
            <Footer />
            <CoppyWrite />
        </div>
    )
}

export default Home