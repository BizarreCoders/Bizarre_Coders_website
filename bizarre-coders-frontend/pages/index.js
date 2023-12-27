// import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Team from "./Team";
import JoinUs from "./JoinUs";
import Footer from "./footer";
import Fuck from "./Fuck";
// import React, { Component } from 'react'
import { MotionAnimate } from 'react-motion-animate'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div>

        <Hero />
        <Fuck />

        <MotionAnimate
                        animation='fadeInUp'
                        reset={true}
                        distance={200}
                        delay={1}
                        speed={1}>
                        {/* <>Or animate up a lot</> */}
                        <Team />
                      </MotionAnimate>
                    
add in some cus
        <JoinUs />
        
      </div>
      <MotionAnimate animation='scrollFadeIn'>
      <Footer />
                      </MotionAnimate>
      {/* <Footer /> */}
      <MotionAnimate reset={true}>
        <>Just a simple fade</>
      </MotionAnimate>
      
      {/* <button onClick={() => router.push('/team')}>Team</button> */}
    </div>
  );
}
