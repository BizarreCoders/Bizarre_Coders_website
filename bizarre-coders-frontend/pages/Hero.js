import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import githublogo from "./assets/github.png";
import img1 from "./assets/BC_1.jpeg";

// import Chatbot from "./Chatbot";

function Hero() {
  //   const [showChatbot, setShowChatbot] = useState(false);

  //   const handleChatbotToggle = () => {
  //     setShowChatbot(!showChatbot);
  //   };

  return (
    <div className=" items-center min-h-screen py-16 bg-canva_nav justify-center items-center">
      <div className="max-w-2xl px-8">
        <h1 className="text-6xl font-semibold mb-4 ml-4" style={{ color: "white" }}>
          Bizarre Coders
        </h1>
        <p className="text-whitee text-justify font-normal">Bizarre Coders is the Community which is a student-run organization on LinkedIn, Twitter & YouTube. We provide resources, opportunities, and various tech programs that help students advance their careers. We also have student mentors who give their time to share their expertise with other student enthusiasts. In addition, we host events on various technologies.
Feel free to ask us.</p>
        <div className="flex space-x-4">
          <Image src={githublogo} className="w-16 h-16" alt="Company Logo 1" />
          <Image src={githublogo} className="w-16 h-16" alt="Company Logo 2" />
          {/* Add more company logos here */}
        </div>
      </div>

      <div className="w-2/6 h-2/8 float-right">
        <Carousel
          showStatus={false}
          showThumbs={true}
          className="carousel-container"
        >
          <div>
            <Image src={githublogo} alt="Image 1" width={200} height={200} />
            {/* className="w-16 h-16" */}
          </div>
          <div>
            <Image src={img1} alt="Image 2" width={200} height={200} />
          </div>
        </Carousel>
      </div>
      <button className="text-whitee">Open Chat</button>
      {/* {showChatbot && <Chatbot /> } */}
    </div>
  );
}

export default Hero;
