import React from 'react'
import { FeaturedProducts, Hero, Services, Contact, BestProducts, TradeMarks,HomeAbout,HomeCollection,HomeBlog, HomeEditorial,HomeEditorialLeft } from '../components'
const HomePage = () => {
  return <main>
    <Hero />
    <BestProducts />
    <TradeMarks />
    <HomeAbout />
    <HomeCollection />
    <HomeBlog />
    <HomeEditorial />
    <HomeEditorialLeft />
    {/* <FeaturedProducts />
    <Services />
    <Contact /> */}
  </main>
}

export default HomePage
