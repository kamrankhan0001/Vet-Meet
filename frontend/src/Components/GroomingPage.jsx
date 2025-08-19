import React from "react";
import img1 from "../assets/Grooming/img1.png";
import img2 from "../assets/Grooming/img2.png";
import shampoo from "../assets/Grooming/shampoo.png";
import skinCare from "../assets/Grooming/skinCare.png";
import wipe from "../assets/Grooming/wipe.png";
import eyeCare from "../assets/Grooming/eyeCare.png";
import groomingTool from "../assets/Grooming/groomingTool.png";
import perfume from "../assets/Grooming/perfume.png";
import raincoat from "../assets/Grooming/raincoat.png";
import umbrella from "../assets/Grooming/umbrella.png";
import boot from "../assets/Grooming/boot.png";
import bravecto from "../assets/Grooming/bravecto.png";
import shampoo2 from "../assets/Grooming/shampoo2.png";
import bird from "../assets/Grooming/bird.png";
import supplement from "../assets/Grooming/supplement.png";
import elevatedBed from "../assets/Grooming/elevatedBed.png";
import catLitter from "../assets/Grooming/catLitter.png";
import purposeWipe from "../assets/Grooming/purposeWipe.png";
import antiLossDevice from "../assets/Grooming/antiLossDevice.png";
import indoorBowl from "../assets/Grooming/indoorBowl.png";
import bioGroom from "../assets/Grooming/bioGroom.png";
import earthbath from "../assets/Grooming/earthbath.png";
import christensen from "../assets/Grooming/christensen.png";
import andis from "../assets/Grooming/andis.png";
import hydra from "../assets/Grooming/hydra.png";
import wildwash from "../assets/Grooming/wildwash.png";

const products = [
  { brand: "Barkbutler", name: "Raincoat", img: raincoat },
  { brand: "Truelove", name: "Waterproof Boots", img: boot },
  { brand: "Bravecto", name: "Tick and Flea", img: bravecto },
  { brand: "Himalaya", name: "Erina Shampoo", img: shampoo2 },
  { brand: "Fofos", name: "Bird with Catnip", img: bird },
  { brand: "My Beau", name: "Food Supplement", img: supplement },
  { brand: "Fluffy's", name: "Elevated Beds", img: elevatedBed },
  { brand: "Besil All", name: "Purpose Wipes", img: purposeWipe },
  { brand: "Scoopy ", name: "Cat Litter", img: catLitter },
  { brand: "Mitag", name: "Anti-Loss Device", img: antiLossDevice },
  { brand: "Savic", name: "Indoor Bowl", img: indoorBowl },


];

const premiumProducts = [
  {  img: bioGroom, offer: "Up to 10% off" },
  {  img: earthbath, offer: "Up to 18% off" },
  {  img: christensen, offer: "Up to 10% off" },
  {  img: andis, offer: "Up to 25% off" },
  {  img: hydra, offer: "Up to 5% off" },
  {  img: wildwash, offer: "Best prices" },
];


const GroomingPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Banner Section */}
      <div className="relative w-full bg-sky-300 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-14">
        {/* Left Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
            The <span className="text-lime-300">Glow-up</span> Zone
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white opacity-90">
            Pamper your pets with the best grooming essentials and keep them looking fabulous every day!
          </p>
        </div>

        {/* Right Images */}
        <div className="flex items-center justify-center mt-8 md:mt-0 space-x-0">
          <img
            src={img2}
            alt="Dog"
            className="w-36 md:w-56  drop-shadow-2xl"
            loading="lazy"
          />
          <img
            src={img1}
            alt="Cat"
            className="w-36 md:w-56 drop-shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>

      {/* SECTION 3: Product Categories */}
<div className="relative z-10 w-full bg-gradient-to-b from-white to-gray-50 py-14 px-4 sm:px-6 md:px-12 -mt-24 md:-mt-12 lg:-mt-24">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
    Shop by <span className="text-orange-500">Categories</span>
  </h2>

  <div className="flex space-x-8 overflow-x-auto no-scrollbar pb-6 md:justify-center scrollbar-hide">
    {[
      { img: shampoo, title: "Shampoo & conditioner", discount: " Up to 36% Off" },
      { img: skinCare, title: "Skin & coat care",  discount: "20% Off" },
      { img: perfume, title: "Perfumes & cologne", discount: "15% Off" },
      { img: groomingTool, title: "Grooming Tools", discount: "Up to 25% Off" },
      { img: wipe, title: "Towels & Wipes" , discount: "10% Off"},
      { img: eyeCare, title: "Ear & eye care", discount: " Up to 18% Off" },
    ].map((cat, i) => (
      <div
        key={i}
        className="flex-shrink-0 flex flex-col items-center text-center group cursor-pointer"
      >
        <div className="relative w-40 h-40 sm:w-44 sm:h-44 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-md overflow-hidden transform transition duration-300 group-hover:scale-105 group-hover:shadow-xl">

            

          <img
            src={cat.img}            
            alt={cat.title}
            loading="lazy"
            className="w-3/4 h-3/4 object-contain transition-transform duration-300 group-hover:scale-110"
          />

          

        </div>

        <p className="mt-4 text-base font-semibold text-gray-700 group-hover:text-orange-500 transition">
          {cat.title} 
        </p>
        {/* Discount Badge */}
          <span className="relative bottom-0 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
            {cat.discount}
          </span>
        
      </div>
    ))}
  </div>
</div>


<section className="relative w-full bg-gradient-to-b from-sky-100 to-sky-50 py-12 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Rain background effect */}
      <div className="absolute inset-0 bg-[url('/rain-pattern.svg')] bg-repeat opacity-20 pointer-events-none"></div>

      {/* Umbrella + Title */}
      <div className="relative flex flex-col items-center mb-10 z-10">
        <img src={umbrella} alt="Umbrella" className="w-88 md:w-40 -mb-4" />
        <h2 className="text-6xl md:text-6xl sm:text-3xl font-extrabold text-gray-900 text-center drop-shadow-md">
          Monsoon <span className="text-sky-600">Essentials</span>
        </h2>
      </div>

      {/* Product list */}
      <div className="relative flex space-x-5 overflow-x-auto no-scrollbar pb-6 z-10 scrollbar-hide">
        {products.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-40 sm:w-44 bg-white rounded-2xl shadow-md border border-gray-200 p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <h3 className="text-sm font-bold text-gray-900">{item.brand}</h3>
            <p className="text-xs text-gray-600 mb-3">{item.name}</p>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>


    <div className="w-full bg-white py-12 px-4 sm:px-6 md:px-12">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
        Premium <span className="text-lime-600">picks</span>
      </h2>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
        {premiumProducts.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center group"
          >
            {/* Logo or Brand Name */}
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              {item.brand}
            </h3>

            {/* Product Image */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              
              <img
                src={item.img}
                alt={item.brand}
                className="relative z-10 w-60 h-60 object-contain  group-hover:scale-110 transition"
                loading="lazy"
              />
            </div>

            {/* Offer */}
            <p className="mt-6 text-sm font-medium text-lime-700">
              {item.offer}
            </p>
          </div>
        ))}
      </div>
    </div>

      
    </div>
  );
}


export default GroomingPage;