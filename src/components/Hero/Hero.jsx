import React from 'react';
import Image from 'next/image'; // Make sure you have this import for Next.js
import hero4 from '../../assets/images/city.jpg';
import redCar from '../../assets/images/red_car.png';

const bgStyle = {
  backgroundImage: `url(${hero4})`, // Correctly use the imported image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '520px',
  width: '100vw',
  animation: 'zoomOut 10s ease-out infinite', // Include the zoom-out animation if needed
};

const Hero = () => {
  return (
    <div style={bgStyle} >
      <div className="dark:bg-black/60 bg-white/20 backdrop-blur-sm dark:text-darkText duration-300 h-[520px]  flex">
        <div className="container grid grid-cols-1 place-items-center">
          {/* Text Content Section */}
          <div className="text-center space-y-5 py-14">
            <p
              data-aos="fade-up"
              data-aos-delay="50"
              className="font-bold text-3xl uppercase"
            >
              📞 Call Now 8294
            </p>
          </div>
          {/* Image Section */}
          <div>
            <Image
              data-aos="zoom-in-right"
              data-aos-delay="50"
              src={redCar}
              alt="car-cab"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
