import React from 'react'
import { FeaturedProducts, Hero, Services, Contact, BestProducts, TradeMarks,HomeAbout } from '../components'
const HomePage = () => {
  return <main>
    <Hero />
    <BestProducts />
    <TradeMarks />
    <HomeAbout />
    <FeaturedProducts />
    <Services />
    <Contact />
  </main>
}

export default HomePage
