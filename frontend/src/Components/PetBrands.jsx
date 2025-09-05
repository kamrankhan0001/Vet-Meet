
import React from "react";
import image1 from "../assets/Brands/brand1.png";
import image2 from "../assets/Brands/brand2.png";
import image3 from "../assets/Brands/brand3.png";
import image4 from "../assets/Brands/brand4.png";
import image5 from "../assets/Brands/brand5.png";
import image6 from "../assets/Brands/brand6.png";
import image7 from "../assets/Brands/brand7.png";
import image8 from "../assets/Brands/brand8.png";
import image9 from "../assets/Brands/brand9.png";
import image10 from "../assets/Brands/brand10.png";

const PetBrands = () => {
  const brandsInFocusData = [
    { image: image1, alt: "Brand 1" },
    { image: image2, alt: "Brand 2" },
    { image: image3, alt: "Brand 3" },
    { image: image4, alt: "Brand 4" },
    { image: image5, alt: "Brand 5" },
    { image: image6, alt: "Brand 6" },
    { image: image7, alt: "Brand 7" },
    { image: image8, alt: "Brand 8" },
    { image: image9, alt: "Brand 9" },
    { image: image10, alt: "Brand 10" },
  ];

  return (
    <section className="py-6 mb-0 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10 text-center">
        Brands in Focus
      </h2>

      <div className="flex overflow-x-auto hide-scrollbar gap-4 px-4 sm:px-6 pb-6 scroll-smooth scrollbar-hide">
        {brandsInFocusData.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-38 h-44 sm:w-56 sm:h-64 bg-white rounded-3xl shadow-xl border-4 
                       border-gray-400 transition-all duration-300 cursor-pointer flex items-center justify-center overflow-hidden"
            style={{
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
            }}
          >
            <img
              src={brand.image}
              alt={brand.alt}
              className="w-full h-full p-2 sm:p-2 transition-transform duration-300 hover:scale-105 rounded-2xl"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetBrands;
