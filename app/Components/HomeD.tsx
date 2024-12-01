import React from "react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import Autoplay CSS

const HomeD = () => {
  const products = [
    {
      id: 1,
      title: "Model Ware",
      price: "$220",
      image: "/Images/image1.jpeg",
    },
    {
      id: 2,
      title: "Summer Outfit",
      price: "$180",
      image: "/Images/image2.jpeg",
    },
    {
      id: 3,
      title: "Italian Outfit",
      price: "$180",
      image: "/Images/image3.jpeg",
    },
    {
      id: 4,
      title: "Pro Outfit",
      price: "$180",
      image: "/Images/image4.jpeg",
    },
    {
      id: 5,
      title: "vita Outfit",
      price: "$180",
      image: "/Images/image5.jpeg",
    },
    {
      id: 6,
      title: "Summer Outfit",
      price: "$180",
      image: "/Images/image6.jpeg",
    },
  ];
  return (
    <section className="bg-white px-8 py-12">
      <div className="mb-8 text-center">
        <h2 className="font-rufina text-3xl font-bold">
          Curated Collections Just for You
        </h2>
      </div>

      {/* Swiper Carousel */}
      <div className="flex justify-center">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true} // Ensures infinite looping
          autoplay={{
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          className="max-w-5xl"
          modules={[EffectCoverflow, Pagination, Autoplay]} // Include Autoplay module here
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="flex flex-col items-center justify-center"
              style={{
                width: "300px",
                height: "650px",
              }}
            >
              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-86 w-full object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="mt-2 text-gray-500">{product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeD;
