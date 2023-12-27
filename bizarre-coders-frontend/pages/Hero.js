// import React, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Image from "next/image";
// import githublogo from "./assets/github.png";
// import img1 from "./assets/BC_1.jpeg";
// import { MotionAnimate } from "react-motion-animate";

// function Hero() {
//   return (
//     <MotionAnimate animation="scrollFadeIn">
//       <div className=" items-center min-h-screen py-16 bg-canva_nav justify-center items-center">
//         <div className="max-w-2xl px-8">
//           <h1
//             className="text-6xl font-semibold mb-4 ml-4"
//             style={{ color: "white" }}
//           >
//             Bizarre Coders
//           </h1>
//           <p className="text-whitee text-justify font-normal">
//             Bizarre Coders is the Community which is a student-run organization
//             on LinkedIn, Twitter & YouTube. We provide resources, opportunities,
//             and various tech programs that help students advance their careers.
//             We also have student mentors who give their time to share their
//             expertise with other student enthusiasts. In addition, we host
//             events on various technologies. Feel free to ask us.
//           </p>
//           <div className="flex space-x-4">
//             <Image
//               src={githublogo}
//               className="w-16 h-16"
//               alt="Company Logo 1"
//             />
//             <Image
//               src={githublogo}
//               className="w-16 h-16"
//               alt="Company Logo 2"
//             />
//           </div>
//         </div>

//         <div className="w-2/6 h-2/8 float-right">
//           <Carousel
//             showStatus={false}
//             showThumbs={true}
//             className="carousel-container"
//           >
//             <div>
//               <Image src={githublogo} alt="Image 1" width={200} height={200} />
//             </div>
//             <div>
//               <Image src={img1} alt="Image 2" width={200} height={200} />
//             </div>
//           </Carousel>
//         </div>
//         <button className="text-whitee">Open Chat</button>
//       </div>
//     </MotionAnimate>
//   );
// }

// export default Hero;


import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { MotionAnimate } from "react-motion-animate";
import { Typewriter } from 'react-simple-typewriter'
// import githublogo from "./assets/github.png";
// import img1 from "./assets/BC_1.jpeg";

function Hero() {
  return (
    <MotionAnimate animation="scrollFadeIn">
      <div className="flex items-center min-h-screen py-16 bg-canva_nav justify-center">
      <img src="" alt="" />
        <div className="max-w-2xl px-8">
          <h1 className="text-6xl font-semibold mb-4 text-whitee">
            Bizarre Coders
          </h1>
          <h1 className="text-3xl font-semibold mb-4 text-whitee" style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
           {' '}
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Breathing Code', 'Sleep', 'Eat', 'Code', 'Repeat', 'Breathing Code']}
            loop={3}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1>
          <p className="text-white text-justify font-normal mb-8 text-whitee font-serif leading-8 tracking-wide p-4">
            Bizarre Coders is the Community which is a student-run organization
            on LinkedIn, Twitter & YouTube. We provide resources, opportunities,
            and various tech programs that help students advance their careers.
            We also have student mentors who give their time to share their
            expertise with other student enthusiasts. In addition, we host
            events on various technologies. Feel free to ask us.
          </p>
          <div className="flex space-x-4">
          {/* <button type="button" class="text-black bg-whitee hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:">Default</button> */}
          <button class="transition ease-in-out delay-150 text-black bg-whitee hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-lg text-md px-5 py-2.5 me-2 mb-2">
  Join now!
</button>
            {/* <button>Join now</button> */}
            {/* <Image src={githublogo} className="w-16 h-16" alt="Company Logo 1" />
            <Image src={githublogo} className="w-16 h-16" alt="Company Logo 2" /> */}
          </div>
        </div>

        <div className="ml-8 w-2/6 h-2/8 float-right sm: w-2/6 h-2/4">
          <Carousel showStatus={false} showThumbs={true} className="carousel-container">
            <div>
              {/* <Image src={githublogo} alt="Image 1" width={200} height={200} /> */}
              <img src="https://pbs.twimg.com/profile_images/1718641487913836544/kEM9hdhE_400x400.jpg" alt="" />
              
            </div>
            <div>
            {/* <img src="https://pbs.twimg.com/profile_images/1718641487913836544/kEM9hdhE_400x400.jpg" alt="" /> */}
              {/* <Image src={img1} alt="Image 2" width={200} height={200} /> */}
              <img src="https://bizarre-coders-official.netlify.app/static/media/seminar.a9f70373cf6c3f35fcdd.png" className="object-fill" alt="" />
            </div>
            <div>
            {/* <img src="https://pbs.twimg.com/profile_images/1718641487913836544/kEM9hdhE_400x400.jpg" alt="" /> */}
              {/* <Image src={img1} alt="Image 2" width={200} height={200} /> */}
              <img src="https://media.licdn.com/dms/image/C4D22AQGTAWO-Gs6Bxg/feedshare-shrink_800/0/1676643427639?e=1706745600&v=beta&t=uisqGrlcOC3KG5_Z9Wux-lR2KDzhUL_4GaTihZ5x4ak" className="object-fill" alt="" />
            </div>
            <div>
            {/* <img src="https://pbs.twimg.com/profile_images/1718641487913836544/kEM9hdhE_400x400.jpg" alt="" /> */}
              {/* <Image src={img1} alt="Image 2" width={200} height={200} /> */}
              <img src="https://media.licdn.com/dms/image/D5622AQGFZXAMjxTqBw/feedshare-shrink_2048_1536/0/1700116436013?e=1706745600&v=beta&t=sJGnM1nYr6tqPLmmvU-3m3qtFs2WgF284UXWtpWXhAY" className="object-fill" alt="" />
            </div>
            {/* https://media.licdn.com/dms/image/C4D22AQGTAWO-Gs6Bxg/feedshare-shrink_800/0/1676643427639?e=1706745600&v=beta&t=uisqGrlcOC3KG5_Z9Wux-lR2KDzhUL_4GaTihZ5x4ak */}
          </Carousel>
        </div>
      </div>
    </MotionAnimate>
  );
}

export default Hero;
