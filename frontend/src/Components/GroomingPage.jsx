import React from "react";
import img1 from "../assets/grooming/img1.png";
import img2 from "../assets/grooming/img2.png";
import shampoo from "../assets/grooming/shampoo.png";
import skinCare from "../assets/grooming/skinCare.png";
import wipe from "../assets/grooming/wipe.png";
import eyeCare from "../assets/grooming/eyeCare.png";
import groomingTool from "../assets/grooming/groomingTool.png";
import perfume from "../assets/grooming/perfume.png";
import raincoat from "../assets/grooming/raincoat.png";
import umbrella from "../assets/grooming/umbrella.png";
import boot from "../assets/grooming/boot.png";
import bravecto from "../assets/grooming/bravecto.png";
import shampoo2 from "../assets/grooming/shampoo2.png";
import bird from "../assets/grooming/bird.png";
import supplement from "../assets/grooming/supplement.png";
import elevatedBed from "../assets/grooming/elevatedBed.png";
import catLitter from "../assets/grooming/catLitter.png";
import purposeWipe from "../assets/grooming/purposeWipe.png";
import antiLossDevice from "../assets/grooming/antiLossDevice.png";
import indoorBowl from "../assets/grooming/indoorBowl.png";
import bioGroom from "../assets/grooming/bioGroom.png";
import earthbath from "../assets/grooming/earthbath.png";
import christensen from "../assets/grooming/christensen.png";
import andis from "../assets/grooming/andis.png";
import hydra from "../assets/grooming/hydra.png";
import wildwash from "../assets/grooming/wildwash.png";
import bannerDogCat from "../assets/grooming/bannerDogCat.png";
import furlicks from "../assets/grooming/furlicks.png";
import cleaner from "../assets/grooming/cleaner.png";
import mybeau from "../assets/grooming/myBeau.png";
import erina from "../assets/grooming/erina.png";
import dryShampoo from "../assets/grooming/dryShampoo.png";
import pawNailCare from "../assets/grooming/pawNailCare.png";
import tickFlea from "../assets/grooming/antiTickFlea.png";
import comb from "../assets/grooming/comb.png";
import fragrance from "../assets/grooming/fragrance.png";
import wipes from "../assets/grooming/wipes.png";
import forbis from "../assets/grooming/forbis.png";
import remedies from "../assets/grooming/remedies.png";
import himalaya from "../assets/grooming/himalaya.png";
import basil from "../assets/grooming/basil.png";
import wahl from "../assets/grooming/wahl.png";
import barkOutLoud from "../assets/grooming/barkOutLoud.png";
import vedio from "../assets/grooming/vedio.mp4";





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

const wellnessProducts = [
  { discount: "Up to 20% off", name: "Hair Supplements", img: mybeau },
  { discount: "Up to 60% off", name: "Cleaning Solution", img: cleaner },
  { discount: "Up to 35% off", name: "Ticks & Fleas Control", img: erina },
  { discount: "Up to 27% off", name: "Oral Care", img: furlicks },
];

const premiumProducts = [
  {  img: bioGroom, offer: "Up to 10% off" },
  {  img: earthbath, offer: "Up to 18% off" },
  {  img: christensen, offer: "Up to 10% off" },
  {  img: andis, offer: "Up to 25% off" },
  {  img: hydra, offer: "Up to 5% off" },
  {  img: wildwash, offer: "Best prices" },
];

const monsoonProducts = [
  { discount: "Up to 35% Off", name: "Dry Shampoo", img: dryShampoo },
  { discount: "Up to 60% Off", name: "Paw Nail care", img: pawNailCare },
  { discount: "Up to 15% Off", name: "Anti tick-flea", img: tickFlea },
  { discount: "Up to 20% Off", name: "Combs", img: comb },
  { discount: "Up to 20% Off", name: "Fragrances", img: fragrance },
  { discount: "Up to 60% Off", name: "Towels & Wipes", img: wipes },

];

const topBrands = [
  { discount: "Up to 15% Off", name: "Forbis", img: forbis },
  { discount: "Up to 20% Off", name: "Natural Remedies", img: remedies },
   { discount: "Up to 15% Off", name: "Himalaya", img: himalaya },
  { discount: "Up to 15% Off", name: "Basil", img: basil },
  { discount: "Up to 20% Off", name: "Wahl", img: wahl },
   { discount: "Up to 15% Off", name: "Bark Out Loud", img: barkOutLoud },

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


      <div className="w-full bg-white py-8">
      
      {/* Scrollable Row */}
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-0">
        {/* Left Banner Card */}
        <div className="flex-shrink-0 w-48 h-56 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-300 flex flex-col items-center justify-center text-white font-bold text-xl shadow-lg relative">
          <span className="text-yellow-300 text-3xl">MONSOON</span>
          <span className="text-xl">CARE</span>
          <button className="absolute bottom-3 right-3 bg-white text-black rounded-full p-2 shadow">
            ➤
          </button>
        </div>

        {/* Product Cards */}
        {monsoonProducts.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-52 h-58 bg-gradient-to-br from-sky-200 to-white rounded-2xl shadow-md hover:shadow-lg p-4 flex flex-col items-center justify-between transition-transform hover:-translate-y-1"
          >
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900">{item.discount}</p>
              <p className="text-md font-medium text-gray-700">{item.name}</p>
            </div>
            <img
              src={item.img}
              alt={item.name}
              className="w-36 h-40 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
<div className="w-full bg-white py-8 ">
      
      {/* Scrollable Row */}
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-0">
        {/* Left Banner Card */}
        <div className="flex-shrink-0 w-48 h-56 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-300 flex flex-col items-center justify-center text-white font-bold text-xl shadow-lg relative">
          <span className="text-yellow-300 text-3xl">TOP 6</span>
          <span className="text-xl">BRANDS</span>
          <button className="absolute bottom-3 right-3 bg-white text-black rounded-full p-2 shadow">
            ➤
          </button>
        </div>

        {/* Product Cards */}
        {topBrands.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-52 h-58 bg-gradient-to-br from-sky-200 to-white rounded-2xl shadow-md hover:shadow-lg p-4 flex flex-col items-center justify-between transition-transform hover:-translate-y-1"
          >
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900">{item.discount}</p>
              <p className="text-md font-medium text-gray-700">{item.name}</p>
            </div>
            <img
              src={item.img}
              alt={item.name}
              className="w-36 h-40 object-contain"
            />
          </div>
        ))}
      </div>
    </div>



      {/* SECTION 3: Product Categories */}
<div className="relative z-10 w-full bg-gradient-to-b from-white to-gray-50 py-14 px-4 sm:px-6 md:px-12">
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


<section className="relative w-full bg-gradient-to-b from-sky-300 to-sky-50 py-12 px-4 sm:px-6 md:px-12 overflow-hidden">
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


<div className="w-full bg-white">
      {/* Banner */}
      <div className="relative w-full bg-sky-400 rounded-b-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10">
        {/* Text */}
        <div className="text-white max-w-xl">
          <h2 className="text-3xl md:text-6xl font-bold leading-snug drop-shadow">
            Healthy, Happy, <br /> Monsoon Ready
          </h2>
          <p className="mt-3 text-white font-medium flex items-center">
            co-powered by{" "}
            <span className="ml-2 bg-white text-orange-600 font-bold px-2 py-1 rounded">
              VIVALDIS
            </span>
          </p>
        </div>

        {/* Dog + Cat Image */}
        <div className="mt-6 md:mt-0">
          <img
            src={bannerDogCat}
            alt="Dog and Cat"
            className="w-60 md:w-84 drop-shadow-lg"
            loading="lazy"
          />
        </div>
      </div>

      {/* Wellness Corner */}
      <div className="py-10 px-4 sm:px-6 md:px-12">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
          Woof Or Wellness Corner
        </h3>

        {/* Wrapper for Horizontal Scroll on Mobile */}
<div className="overflow-x-auto scrollbar-hide">
  <div className="flex md:grid md:grid-cols-4 gap-4 p-2">
    {wellnessProducts.map((item, i) => (
      <div
        key={i}
        className="min-w-[270px] md:min-w-0 bg-gradient-to-r from-sky-200 to-sky-100 
                   rounded-md shadow-md hover:shadow-lg p-4 flex items-center justify-between 
                   transition-transform hover:-translate-y-1"
      >
        {/* Left Side - Text */}
        <div className="flex-1">
          <p className="text-lg md:text-xl font-bold text-green-800 leading-snug">
            {item.discount}
          </p>
          <p className="text-sm md:text-base font-medium text-gray-700 mt-1">
            {item.name}
          </p>
        </div>

        {/* Right Side - Product Image */}
        <div className="flex-shrink-0 ml-3">
          <img
            src={item.img}
            alt={item.name}
            className="w-16 h-20 md:w-20 md:h-24 object-contain"
            loading="lazy"
          />
        </div>
      </div>
    ))}
  </div>
</div>



<section className="w-full py-5 px-4 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Watch Our Video
      </h2>

      {/* Local/Uploaded Video */}
      <video
        className="w-full rounded-2xl shadow-lg"
        controls
        poster="https://via.placeholder.com/800x400.png?text=Video+Thumbnail"
      >
        <source src={vedio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>


      </div>
    </div>
      
    </div>
  );
}


export default GroomingPage;