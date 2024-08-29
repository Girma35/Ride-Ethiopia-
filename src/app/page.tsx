"use client";

import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Contact from "../components/contact/contact";
import About from "../components/about/about";
import AOS from "aos";
import "aos/dist/aos.css"; 
export default function Home() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <main>

      <Hero />
      <Contact />
      <About />

    </main>
  );
}
