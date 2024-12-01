import React from "react";

const HomeF = () => {
  return (
    <section className="h-[600px]">
      <div className="relative  text-white">
        <img
          src="../Images/last.jpeg"
          alt="Person reclining on a rock"
          className="h-[400] w-full object-cover opacity-90"
        />
        <div className=" absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="mb-4 font-rufina text-4xl font-bold">Stay in Style</h1>
          <p className="mb-6 font-oxygen">
            Be the first to know about new arrivals, exclusive offers, and style
            inspiration straight to your inbox.
          </p>
          <div className="mb-6 flex font-oxygen">
            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded-l-md border-none p-2 focus:outline-none "
            />
            <button className="rounded-r-md bg-black p-2  text-white">
              Sign Up Now
            </button>
          </div>
        </div>
        <footer className="mt-8 bg-white py-4 text-black">
          <h1 className="ml-[600px] items-center justify-center font-patriot text-7xl text-primary-100">
            Pantone
          </h1>
          <div className="container mx-auto mt-8 flex items-center justify-between font-oxygen">
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">
                Shop
              </a>
              <a href="#" className="hover:underline">
                About Us
              </a>
              <a href="#" className="hover:underline">
                Sustainability
              </a>
              <a href="#" className="hover:underline">
                Customer Service
              </a>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </div>
            <div className="text-center">
              <p className="text-sm">
                2025 All rights reserved Designed by Mars Technology
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:underline">
                Facebook
              </a>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default HomeF;
