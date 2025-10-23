import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import jobListing from '../components/jobListing'
import JobListing from '../components/jobListing'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <JobListing/>
    </div>
  )
}

export default Home
