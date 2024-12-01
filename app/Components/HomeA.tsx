import React from "react";

const HomeA = () => {
  return (
    <section className="grid h-screen grid-cols-2 pl-52 ">
      <div className="mt-60 flex-row justify-center">
        <h1 className="font-rufina text-5xl">
          Elevate Your Style.
          <br />
          Define Your Statement.
        </h1>
        <p className="mt-6 font-oxygen text-xl">
          Discover the Latest Fashion and Timeless Classics.
        </p>

        <div className="mt-5 flex flex-row space-x-6 font-oxygen ">
          <button className="rounded bg-black px-6 py-3 text-white">
            Explore Collections
          </button>
          <button className="rounded px-6 py-3 shadow-md">
            Shop New Arrivals
          </button>
        </div>
        <p className="mt-40 font-patriot text-9xl font-bold text-primary-100">
          Pantone
        </p>
      </div>
      <div className="relative ">
        <img
          src="../Images/FashionStyle.jpeg"
          alt="Fashion Style"
          className="h-screen w-full object-cover"
        />
      </div>
    </section>
  );
};

export default HomeA;
