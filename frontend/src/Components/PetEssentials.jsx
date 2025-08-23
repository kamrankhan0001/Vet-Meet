import React from 'react';
import { Helmet } from 'react-helmet';
import banner from '../assets/PetEssentials/banner.png';
import monsoon from '../assets/PetEssentials/monsoon.png';
import bed from '../assets/PetEssentials/bed.png';
import bowls from '../assets/PetEssentials/bowls.png';
import grooming from '../assets/PetEssentials/grooming.png';
import wellness from '../assets/PetEssentials/wellness.png';
import walk from '../assets/PetEssentials/walk.png';
import travel from '../assets/PetEssentials/travel.png';
import tree from '../assets/PetEssentials/tree.png';
import teaser from '../assets/PetEssentials/teaser.png';
import toy from '../assets/PetEssentials/toy.png';
import catnip from '../assets/PetEssentials/catnip.png';
import scratchers from '../assets/PetEssentials/scrature.png';
import chasers from '../assets/PetEssentials/chaser.png';
import plush from '../assets/PetEssentials/plush.png';
import kitten from '../assets/PetEssentials/kitten.png';
import cat1 from '../assets/PetEssentials/cat1.png';
import cat2 from '../assets/PetEssentials/cat2.png';
import kittenfood from '../assets/PetEssentials/kittenfood.png';
import dryfood from '../assets/PetEssentials/dryfood.png';
import wetfood from '../assets/PetEssentials/wetfood.png';
import treat from '../assets/PetEssentials/treat.png';
import combo from '../assets/PetEssentials/combo.png';
import grain from '../assets/PetEssentials/grain.png';
import premium from '../assets/PetEssentials/premium.png';
import dewormer from '../assets/PetEssentials/dewormer.png';
import smartToy from '../assets/PetEssentials/smart.png';
import ropeToy from '../assets/PetEssentials/rope.png';
import shampoo from '../assets/PetEssentials/shampoo.png';
import carrier from '../assets/PetEssentials/carriers.png';
import raincoat from '../assets/PetEssentials/raincoat.png';
import clothes from '../assets/PetEssentials/cloth.png';
import litterbox from '../assets/PetEssentials/litterbox.png';
import oralcare from '../assets/PetEssentials/oralcare.png';
import savic from '../assets/PetEssentials/savic.png';
import pawpourri from '../assets/PetEssentials/pawpouri.png';
import lickimat from '../assets/PetEssentials/mat.png';
import mpets from '../assets/PetEssentials/carrier.png';
import mili from '../assets/PetEssentials/mili.png';
import trixie from '../assets/PetEssentials/trixie.png';
import airMesh from '../assets/PetEssentials/airMesh.png';
import bedd from '../assets/PetEssentials/bedd.png';
import scented from '../assets/PetEssentials/scented.png';
import Unscented from '../assets/PetEssentials/unScented.png';
import flushable from '../assets/PetEssentials/flushable.png';
import scooper from '../assets/PetEssentials/scooper.png';
import litterBoxes from '../assets/PetEssentials/litterBoxes.png';
import cleanser from '../assets/PetEssentials/cleanser.png';
import stainRemover from '../assets/PetEssentials/stainRemover.png';
import litterTray from '../assets/PetEssentials/litterTray.png';
import fountain from '../assets/PetEssentials/fountain.png';
import dispenser from '../assets/PetEssentials/dispenser.png';
import elevated from '../assets/PetEssentials/elevated.png';
import steelBowls from '../assets/PetEssentials/steelBowls.png';
import doubleBowls from '../assets/PetEssentials/doubleBowls.png';
import printedBowls from '../assets/PetEssentials/printedBowls.png';
import plasticBowls from '../assets/PetEssentials/plasticBowls.png';
import lickiMats from '../assets/PetEssentials/lickiMats.png';
import antiTick from '../assets/PetEssentials/antiTick.png';
import digestiveCare from '../assets/PetEssentials/digestiveCare.png';
import kidneyCare from '../assets/PetEssentials/kidneyCare.png';
import jointCare from '../assets/PetEssentials/jointCare.png';
import sup2 from '../assets/Pharmacy/sup2.png';
import sup4 from '../assets/Pharmacy/sup4.png';
import sup5 from '../assets/Pharmacy/sup5.png';
import sup1 from '../assets/Pharmacy/sup1.png';



// Placeholder image for the banner.
const bannerImage = "https://placehold.co/1200x300/e0f2fe/105658?text=Kitten+Lounge+Banner";

const categories = [
  { title: "Monsoon", img: monsoon },
  { title: "Beds & mats", img: bed },
  { title: "Bowls", img: bowls },
  { title: "Grooming", img: grooming},
  { title: "Wellness", img: wellness },
  { title: "Walk essentials", img: walk },
  { title: "Travel", img: travel },
];

const subCategories = [
  { title: "Cat trees", img: tree },
  { title: "Teasers", img: teaser },
  { title: "Smart toys", img: toy },
  { title: "Catnip toys", img: catnip },
  { title: "Scratchers", img: scratchers },
  { title: "Chaser toys", img: chasers },
  { title: "Kitten toys", img: kitten },
  { title: "Plush toys", img: plush },

];

const litterAndSupplies = [
  { title: "Scented", img: scented },
  { title: "UnScented", img: Unscented },
  { title: "Flushable", img: flushable },
  { title: "Scooper", img: scooper },
  { title: "Litter Boxes", img: litterBoxes },
  { title: "Litter Tray", img: litterTray },
  { title: "Cleanser", img: cleanser },
  { title: "Stain Remover", img: stainRemover },
  
]

const bowlsAndFeeding = [
  { title: "Water Fountain", img: fountain },
  { title: "Dispensers", img: dispenser },
  { title: "Elevated Bowls", img: elevated },
  { title: "Steel Bowls", img: steelBowls },
  { title: "Double Bowls", img: doubleBowls },
  { title: "Printed Bowls", img: printedBowls },
  { title: "Plastic Bowls", img: plasticBowls },
  { title: "Licki Mats", img: lickiMats },
]
const feedingItems = [
  { name: "Kitten food", image: kittenfood },
  { name: "Dry food", image: dryfood },
  { name: "Wet food", image: wetfood },
  { name: "Treats", image: treat },
  { name: "Combo", image: combo },
  { name: "Grain free", image: grain },
  { name: "Premium", image: premium },
  { name: "Dewormer", image: dewormer },
];

const everydayItems = [
  { name: "Smart interactive toy", image: smartToy },
  { name: "Rope & tug toys", image: ropeToy },
  { name: "Dry shampoo", image: shampoo },
  { name: "Carriers", image: carrier },
  { name: "Raincoat", image: raincoat },
  { name: "Clothes", image: clothes },
  { name: "Litter box", image: litterbox },
  { name: "Oral care", image: oralcare },
];
const premiumBrands = [
  {
    brand: "SAVIC",
    logo: savic,
    offer: "Up to 30% off",
  },
  {
    brand: "Pawpourri",
    logo: pawpourri,
    offer: "Up to 27% off",
  },
  {
    brand: "LickiMat",
    logo: lickimat,
    offer: "Up to 70% off",
  },
  {
    brand: "M-Pets",
    logo: mpets,
    offer: "Up to 35% off",
  },
  {
    brand: "MILI",
    logo: mili,
    offer: "Up to 30% off",
  },
  {
    brand: "TRIXIE",
    logo: trixie,
    offer: "Up to 27% off",
  },
  {
    brand: "Air Mesh",
    logo: airMesh,
    offer: "Up to 70% off",
  },
  {
    brand: "Chloe's Home Neapol Bed ",
    logo: bedd,
    offer: "Up to 35% off",
  },
];

const supplements = [
            
            { name: 'kidney Care', image: kidneyCare },   
            { name: 'Multivitamin', image: sup2 },
            { name: 'joint Care', image: jointCare },
            { name: 'Anti Tick & flea', image: antiTick },
            { name: 'Digestive Care', image: digestiveCare },
            { name: 'Immunity', image: sup4 },
            { name: 'Platelet Booster', image: sup5 },
            { name: 'Skin & Coat', image: sup1 },
  ];

const PetEssentialsPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Banner */}
<div className="relative w-full">
  <img
    src={banner}
    alt="Pet Essentials Banner"
    className="
      block w-full h-[140px] sm:h-[320px] md:h-[450px] lg:h-[480px] 
      object-cover object-center  
      rounded-b-2xl lg:rounded-b-3xl"
    loading="lazy"
  />
</div>


      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Categories Section */}
        <div className="mt-3">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat, index) => (
              <div key={index} className="flex-shrink-0 w-28 sm:w-32 md:w-40 cursor-pointer">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-24 sm:h-28 md:h-32 object-cover"
                  />
                </div>
                <p className="mt-1 text-center text-gray-800 font-bold text-sm md:text-base bg-amber-300 rounded-lg p-1 ">
                  {cat.title} &gt;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-Categories Section */}
        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
            Pet Essentials
          </h2>
          <div className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-4 scrollbar-hide">
            {subCategories.map((sub, index) => (
              <div key={index} className="flex-shrink-0 w-24 sm:w-28 md:w-32 text-center">
                <div className="bg-blue-200 rounded-xl p-4 shadow hover:shadow-lg transition">
                  <img
                    src={sub.img}
                    alt={sub.title}
                    className="w-20 sm:w-24 h-20 sm:h-24 mx-auto object-contain"
                  />
                </div>
                <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-700 font-bold">
                  {sub.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 1: Kitten Lounge */}
<div className="relative w-full overflow-hidden mt-6">
  <div className="w-full bg-gradient-to-r from-[#b7e1f7] to-[#c7e9fd]">
    <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between p-6 sm:p-8 md:p-12 lg:p-16 gap-6">
      
      {/* Text */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#105658] drop-shadow-md z-10 font-serif text-center md:text-left leading-snug">
        Kitten Lounge
      </h1>

      {/* Right Images */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-6 md:mt-0">
        <img
          src={cat2}
          alt="Cat"
          className="w-28 sm:w-40 md:w-56 lg:w-64 h-auto object-contain"
          loading="lazy"
        />
        <img
          src={cat1}
          alt="Cat"
          className="w-28 sm:w-40 md:w-56 lg:w-64 h-auto object-contain"
          loading="lazy"
        />
      </div>
    </div>
  </div>

  {/* Wavy bottom border */}
  <svg
    className="absolute bottom-0 w-full h-12 sm:h-16 md:h-20 lg:h-24 text-[#a2d8ed]"
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
    />
  </svg>
</div>


      {/* SECTION 2: Pet Essentials */}
<div className="w-full bg-[#1ea0ad] ">
  {/* Title */}
  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
    Feeding essentials
  </h2>

  {/* Items */}
  <div className="flex gap-6 overflow-x-auto scrollbar-hide">
    {feedingItems.map((item, idx) => (
      <div
        key={idx}
        className="min-w-[160px] sm:min-w-[200px] bg-white rounded-2xl shadow-md flex flex-col items-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
      >
        {/* Image Section */}
        <div className="flex justify-center items-center h-40 w-full p-4 border-8 border-yellow-300 rounded-t-2xl bg-white">
          <img
            src={item.image}
            alt={item.name}
            className="max-h-28 object-contain"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="w-full bg-yellow-300 rounded-b-2xl py-3 px-2">
          <p className="text-sm sm:text-base font-bold text-gray-800 text-center truncate">
            {item.name}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


<div className="w-full bg-[#1ea0ad] mt-8">
  {/* Title */}
  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
    Everyday essentials
  </h2>

  {/* Items */}
  <div className="flex gap-6 overflow-x-auto scrollbar-hide">
    {everydayItems.map((item, idx) => (
      <div
        key={idx}
        className="min-w-[160px] sm:min-w-[200px] bg-white rounded-2xl shadow-md flex flex-col items-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
      >
        {/* Image Section */}
        <div className="flex justify-center items-center h-40 w-full p-4 border-8 border-yellow-300 rounded-t-2xl bg-white">
          <img
            src={item.image}
            alt={item.name}
            className="max-h-28 object-contain"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="w-full bg-yellow-300 rounded-b-2xl py-3 px-2">
          <p className="text-sm sm:text-base font-bold text-gray-800 text-center truncate">
            {item.name}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>





{/* Sub-Categories Section */}
        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
            Litter & Supplies
          </h2>
          <div className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-4 scrollbar-hide">
            {litterAndSupplies.map((sub, index) => (
              <div key={index} className="flex-shrink-0 w-44 sm:w-24 md:w-36 md:h-36 text-center">
                <div className="bg-gray-50 rounded-xl p-4 shadow hover:shadow-lg transition">
                  <img
                    src={sub.img}
                    alt={sub.title}
                    className="w-32 sm:w-24 h-28 sm:h-20 mx-auto object-contain"
                  />
                </div>
                <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-700 font-bold">
                  {sub.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      

      {/* Sub-Categories Section */}
        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
            Bowls & Feeding Accessories
          </h2>
          <div className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-4 scrollbar-hide">
            {bowlsAndFeeding.map((sub, index) => (
              <div key={index} className="flex-shrink-0 w-44 sm:w-24 md:w-36 md:h-36 text-center">
                <div className="bg-gray-50 rounded-xl p-4 shadow hover:shadow-lg transition">
                  <img
                    src={sub.img}
                    alt={sub.title}
                    className="w-32 sm:w-24 h-28 sm:h-20 mx-auto object-contain"
                  />
                </div>
                <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-700 font-bold">
                  {sub.title}
                </p>
              </div>
            ))}
          </div>
        </div>


      <section className="mt-5 bg-yellow-300 p-6 rounded-lg shadow-lg text-white">
      <Helmet>
        <title>Supplement Corner - Vet&Meet</title>
      </Helmet>
      <h2 className="text-4xl font-extrabold text-center text-black mb-10">
        <div className="flex justify-center items-center gap-3">
         
          <span>All-round Wellness</span>
          
        </div>
      </h2>
      <div className="flex overflow-x-auto hide-scrollbar gap-5 pb-3 scrollbar-hide">
        {supplements.map((category, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-28 md:w-36 bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-24 md:h-28 object-cover rounded-t-xl"
            />
            <p className="text-center text-sm md:text-base font-semibold text-gray-700 py-2">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>


<div className="w-full bg-white py-12 px-4 sm:px-8 lg:px-16">
  {/* Title */}
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-10">
    Premium Brand
  </h2>

  {/* Brand Items */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 sm:gap-6 items-center justify-center text-center">
    {premiumBrands.map((item, i) => (
      <div
        key={i}
        className="flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-300"
      >
        {/* Brand Logo */}
        <div className="w-28 sm:w-32 lg:w-64 h-20 sm:h-32 lg:h-64 flex items-center justify-center border border-gray-300 rounded-lg p-2 bg-white shadow-md">
          <img
            src={item.logo}
            alt={item.brand}
            className="max-h-full max-w-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Offer */}
        <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
          {item.offer}
        </p>
      </div>
    ))}
  </div>
</div>







    </div>
  );
};

export default PetEssentialsPage;
