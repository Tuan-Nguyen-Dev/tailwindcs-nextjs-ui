/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import Feature from "@/components/Feature"
import Feature1 from "@/components/Feature _1"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import { useState, useEffect } from 'react'
const Home = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:px-20 mx-auto">
        <Feature />
        {/* <Feature1/> */}
      </div>
    </>
  )
}

export default Home