"use client";
import React from 'react';
import Image from 'next/image'; // Import the Image component
import hero from "../../assets/images/hero1.png"; // Import the image
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col bg-gray-800 sm:flex-row">
      <div className="bg-gray-800">
        {/* Use the Image component here */}
        <Image 
          src={hero} 
          alt="section Image" 
          width={600} // Set the width
          height={400} // Set the height
          className="h-full w-full sm:w-[600px]"
        />
      </div>
      <div className="flex flex-col p-10 items-center justify-center text-white w-full sm:w-[600px]">
        <h1 className="text-center text-xl p-5">
          Drive on your terms and earn what you deserve.
        </h1>
        <p className="text-center text-2xl">
          Whether it delivering goods or offering rides, you set the schedule that works for you. Use your own vehicle or opt for a rental through RideEthiopia. It all about flexibility and control—your way.
        </p>
        <Link href="/contact">
          <button className="bg-primary mt-5 py-2 rounded px-4">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
