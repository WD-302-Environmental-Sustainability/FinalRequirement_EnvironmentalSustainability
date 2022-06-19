import React from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import LatestArticle from '../components/LatestArticles'
import Navbar from '../components/Navbar'
import LowerStatistics from '../components/StatisticsLower'


const Home = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <InfoSection />
        <LatestArticle />
        <LowerStatistics />
    </>
  )
}

export default Home