// import { useState, useEffect } from "react";
// import { useSwipeable } from "react-swipeable";

// import image1 from "../assets/banner/image1.png";
// import image2 from "../assets/banner/image2.png";
// import image3 from "../assets/banner/image3.png";
// import image4 from "../assets/banner/image4.png";
// import image5 from "../assets/banner/image5.png";
// import image6 from "../assets/banner/image6.png";
// import image7 from "../assets/banner/image7.png";

// //import a1 from "../assets/banner/a1.jpeg";

// function BannerSection() {
//   const banners = [image1, image2, image3, image4, image5, image6, image7];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Next banner
//   const nextBanner = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
//   };

//   // Previous banner
//   const prevBanner = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? banners.length - 1 : prevIndex - 1
//     );
//   };

//   // Auto play every 8 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextBanner();
//     }, 8000);

//     return () => clearInterval(interval);
//   }, []); // Run once on mount

//   // Swipe handlers
//   const handlers = useSwipeable({
//     onSwipedLeft: () => nextBanner(),
//     onSwipedRight: () => prevBanner(),
//     preventDefaultTouchmoveEvent: true,
//     trackMouse: true,
//   });

//   return (

//    <div className="relative" {...handlers}>
//       {/* Banner image */}
//       <div
//         className="w-full h-28 sm:h-72 md:h-96 mt-3 bg-contain bg-center bg-no-repeat"
//         loading="lazy"
//         style={{ backgroundImage: `url(${banners[currentIndex]})` }}
        
//       >
    
    
//         {/* Navigation Buttons */}
//         <div className="absolute inset-0 flex justify-between items-center px-4">
//           {/* Previous Button */}
//           <button
//             className="bg-white text-black p-2 rounded-full shadow-lg block"
//             onClick={prevBanner}
//             aria-label="Previous Banner"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M11 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           {/* Next Button */}
//           <button
//             className="bg-white text-black p-2 rounded-full shadow-lg block"
//             onClick={nextBanner}
//             aria-label="Next Banner"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M13 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Pagination Dots */}
//         <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
//           {banners.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx)}
//               className={`w-3 h-3 rounded-full ${
//                 idx === currentIndex ? "bg-black" : "bg-gray-300"
//               }`}
//               aria-label={`Go to banner ${idx + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BannerSection;



import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

import image1 from "../assets/banner/image1.png";
import image2 from "../assets/banner/image2.png";
import image3 from "../assets/banner/image3.png";
import image4 from "../assets/banner/image4.png";
import image5 from "../assets/banner/image5.png";
import image6 from "../assets/banner/image6.png";
import image7 from "../assets/banner/image7.png";

function BannerSection() {
  const banners = [image1, image2, image3, image4, image5, image6, image7];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextBanner();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextBanner(),
    onSwipedRight: () => prevBanner(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="relative w-full" {...handlers}>
      {/* Banner image with overlay */}
      <div
        className="w-full h-26 mt-3 sm:h-72 md:h-[28rem] lg:h-[24rem] bg-cover bg-center transition-all duration-700 ease-in-out relative"
        style={{ backgroundImage: `url(${banners[currentIndex]})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex justify-between items-center px-2 sm:px-4">
          <button
            className="bg-white/80 hover:bg-white text-black p-1 sm:p-2 md:p-3 rounded-full shadow-lg transition"
            onClick={prevBanner}
            aria-label="Previous Banner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="bg-white/80 hover:bg-white text-black p-1 sm:p-2 md:p-3 rounded-full shadow-lg transition"
            onClick={nextBanner}
            aria-label="Next Banner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 sm:space-x-3">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-white" : "bg-gray-400/70"
              }`}
              aria-label={`Go to banner ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
