import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import AboutSection from '../components/AboutSection'
import FAQs from '../components/Faqs'
import GetInTouch from '../components/GetInTouch'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection/> 
      <WhyChooseUs />
      <Services/>
      <GetInTouch />
      <FAQs/>
      <Footer />
    </div>
  )
}

export default HomePage
