import React from "react";

const HomeE = () => {
  return (
    <section className=" py-12">
      <div className="relative">
        <img
          src="../Images/heels.jpeg"
          alt="Fashion"
          className="h-80 w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-patriot text-9xl font-bold  text-primary-100">
            Pantone
          </p>
        </div>
      </div>

      <div className="mt-8 px-6 lg:px-16">
        <h2 className="font-rufina text-3xl font-semibold text-gray-800">
          Fashion with a Purpose
        </h2>
        <p className="mt-4 font-oxygen leading-relaxed text-gray-600">
          We’re committed to a better world, one garment at a time. Our
          sustainable practices ensure every piece is crafted with care for the
          environment and the communities we support.
        </p>
        <a
          href="#"
          className="mt-4 inline-block font-semibold text-blue-600 hover:underline"
        >
          Read More
        </a>
      </div>

      <div className="mt-16 text-center">
        <h2 className="font-rufina text-3xl font-semibold text-gray-800">
          Stories from Our Style Tribe
        </h2>
      </div>

      <div className="mt-8 flex flex-col items-center px-6 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <img
            src="../Images/women.jpeg"
            alt="User Sophia M"
            className="size-20 rounded-full border-4 border-gray-200 object-cover"
          />
          <h3 className="mt-4 font-oxygen text-lg font-medium text-gray-800">
            Sophia M
          </h3>
          <p className="mt-4 max-w-2xl font-oxygen leading-relaxed text-gray-600">
            I recently purchased a few pieces from the Essentials collection,
            and I’m completely in love. The quality is incredible—soft,
            comfortable, and fits perfectly! I’ve been able to mix and match
            them with so many looks, and I get compliments every time I wear
            them
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <img
            src="../Images/women.jpeg"
            alt="User Avatar"
            className="size-12 rounded-full object-cover"
          />
          <img
            src="../Images/women.jpeg"
            alt="User Avatar"
            className="size-12 rounded-full object-cover"
          />
          <img
            src="../Images/women.jpeg"
            alt="User Avatar"
            className="size-12 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeE;
