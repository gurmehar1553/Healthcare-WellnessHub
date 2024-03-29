import React from 'react'
import '../App.css'
import Header from './Header'
import heroImage from '../assets/HeroImage.jpg'

export default function HeroSection() {
  return (
    <>
        <div className='hero'>
            <Header />
            <div className='p-5 m-5'>
                <h1 className='text-center heading-hero'>HealthCare & Wellness Hub</h1>
                <h2 className='text-center ms-5 ps-5 subhead-hero'>.....from suffering to bliss</h2>
            </div>
        </div>
    </>
  )
}
