import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-2xl">
        <h1 className="uppercase bg-primary text-white px-5 py-3 text-center text-3xl rounded-lg">Book Now</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <input
            className="inputField p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Name"
          />
          <input
            className="inputField p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Email/Phone Number"
          />
          <input
            className="inputField p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Start Date"
          />
          <input
            className="inputField p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="End Date"
          />
          <textarea
            className="inputField col-span-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Additional Details"
            rows={4}
          ></textarea>
          <button className="col-span-2 bg-primary text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
