import React from 'react';

const Contact = () => {
  return (
    <div className="bg-primary sm:min-h-[600px] sm:grid sm:place-items-center duration-300 pt-24 pb-10 sm:pb-0 ">
    <div className="container">
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
     {/* Left Text Section  */}
     <div className="space-y-4 sm:p-16 pb-4 ">
     <h1 className="text-2xl sm:text-3xl font-bold uppercase ">
      Best in country 
     </h1>
     <h1 className="text-3xl sm:text-4xl font-bold uppercase mt-4">
     Experience the Best Ride Services<br /> in Ethiopia
     </h1>
     <p className="leading-8 tracking-wide">
     Discover the premier choice for reliable and trusted transportation across the country. At RideEthopia, we pride ourselves on delivering exceptional ride services that exceed expectations. Whether you’re traveling for business or leisure, our commitment to safety, comfort, and punctuality ensures that every journey is seamless and stress-free.
     </p>
     <button className="bg-dark text-white px-4 py-2 rounded-lg "> Book Now
     </button>
     </div>

   {/* right  Text Section  */}
 <div className =" mt-16" data-aos="fade" data-aos-delay ="100">
 <div className="w-full max-md:-w-[350px] mx-auto ">
 <h1 className="uppercase bg-dark text-white px-5 py-3 "> Book Now 
 </h1>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 bg-white p-5  ">
 <input 
 className="inputField"
 type ="text"
 name=""
 id=""
 placeholder="Name"
  />
  <input 
 className="inputField"
 type ="text"
 name=""
 id=""
 placeholder="Email/Phone Number"
  />
  <input 
 className="inputField"
 type ="text"
 name=""
 id=""
 placeholder="start"
  /><input 
 className="inputField"
 type ="text"
 name=""
 id=""
 placeholder="end"
  />
  <button className="col-span-2 bg-black w-full mt-6  text-white py-2 px-4 rounded-lg "> Book Now
  </button>
  
 </div>
 </div>
 </div>
    </div>
    </div>
    </div>
  );
};

export default Contact;
