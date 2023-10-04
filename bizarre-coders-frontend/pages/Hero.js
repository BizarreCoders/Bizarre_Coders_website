import React, {useState} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import githublogo from "./assets/github.png";
import img1 from "./assets/BC_1.jpeg";
// import axios from "axios";
// import Chatbot from "./Chatbot";

function Hero() {
  const [showChatbot, setShowChatbot] = useState(0);

  const chatbotToggle = () => {
    setShowChatbot(showChatbot+1);
  }
  // const chatbotToggle = () => {
  //   setShowChatbot('Sharma');
  // }
  return (
    <div className=" items-center min-h-screen py-16 bg-canva_nav ">
      <div className="max-w-2xl px-8">
        <h1 className="text-4xl font-bold mb-4" style={{ color: "white" }}>
          Welcome to Our Website
        </h1>
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
      <button className="text-whitee" onClick={chatbotToggle}> 
      Hey {showChatbot};
      </button>
      {/* <button onClick={handleClick}>
      You pressed me {count} times
    </button> */}
      {/* {showChatbot && <Chatbot />} */}
    </div>
  );
}

export default Hero;
