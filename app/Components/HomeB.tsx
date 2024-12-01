import React from "react";

const HomeB = () => {
  return (
    <section className="grid h-screen grid-cols-2 items-center pl-52 pr-72">
      <div className="relative">
        <img
          src="../Images/Fa.jpeg"
          alt="Fashion Style 2"
          className="h-96 w-80 rounded-md object-cover shadow-lg"
        />
      </div>

      <div className="flex flex-col justify-center space-y-6 ">
        <h2 className="font-rufina text-4xl ">Where Passion Meets Fashion</h2>
        <p className="font-oxygen text-lg leading-relaxed">
          We believe in creating more than just clothes. Our designs celebrate
          individuality, allowing you to express who you are in every stitch,
          fabric, and cut. With carefully curated pieces that balance trend and
          tradition, we bring you fashion that feels as good as it looks.
        </p>
        <button className="self-start rounded bg-black px-6 py-3 font-oxygen text-white shadow-md hover:bg-gray-800">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HomeB;
