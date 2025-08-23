import React, { useState, useRef } from 'react';

import img1 from '../../assets/beagle/img1.png';
import img2 from '../../assets/beagle/img2.png';
import img3 from '../../assets/beagle/img3.png';
import img4 from '../../assets/beagle/img4.png';
import img5 from '../../assets/beagle/img5.png';
import img6 from '../../assets/beagle/img6.png';
import grooming1 from '../../assets/beagle/grooming1.png';
import paw from '../../assets/beagle/paw.png';
import brush from '../../assets/Categories/brush.png';
import shampoo from '../../assets/Categories/shampoo.png';
import training1 from '../../assets/beagle/training1.png';
import training2 from '../../assets/beagle/training2.png';
import training3 from '../../assets/beagle/training3.png';
import health from '../../assets/beagle/health.png';
import chickenfood from '../../assets/beagle/dryfood.png';
import fishfood from '../../assets/beagle/wetfood.png';
import baked from '../../assets/Categories/bakedfood.png';
import soy from '../../assets/beagle/soyfood.png';
import puppy from '../../assets/beagle/puppyfood.png';
import adult from '../../assets/beagle/adultfood.png';
import senior from '../../assets/beagle/seniorfood.png';
import diet2 from '../../assets/Categories/diet2.png';
import rope from '../../assets/Labrador/rope.png';
import leashes from '../../assets/Categories/leashes.png';
import toy from '../../assets/Rottweiler/toy.png';
import interactive from '../../assets/Rottweiler/interactive.png';
import puzzle from '../../assets/Labrador/puzzle.png';
import chew from '../../assets/beagle/chew.png';
import ear from '../../assets/beagle/ear.png';


const BeaglePage = ({ onBackClick }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Refs for each section to enable scrolling
  const aboutRef = useRef(null);
  const dietRef = useRef(null);
  const trainingRef = useRef(null);
  const groomingRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = [
  {
    question: 'Do Beagles shed a lot?',
    answer: 'Beagles have a short double coat that sheds moderately year-round, with heavier shedding during seasonal changes. Regular brushing can help reduce loose hair and keep their coat healthy.'
  },
  {
    question: 'How much exercise do Beagles need?',
    answer: 'Beagles are active and energetic dogs that require at least an hour of daily exercise. This can include walks, playtime, and activities that stimulate their mind and body.'
  },
  {
    question: 'Are Beagles good with other dogs?',
    answer: 'Yes, Beagles are generally good with other dogs, thanks to their pack instincts. They enjoy companionship and often thrive in multi-dog households when properly socialized.'
  },
  {
    question: 'Do Beagles bark a lot?',
    answer: 'Beagles are vocal dogs and may bark or howl frequently, especially when they catch an interesting scent or are left alone for long periods. Training and adequate exercise can help manage excessive barking.'
  },
  {
    question: 'Is a Beagle a good guard dog?',
    answer: 'Beagles are alert and will bark to signal unfamiliar activity, but they are too friendly to be considered effective guard dogs. They are better suited as family companions than protectors.'
  }
];



  // Function to handle smooth scrolling to a section
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white min-h-screen font-sans">
    
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto py-12 px-4">

<nav className="sticky top-0 bg-white z-10 shadow-md">
  <div className="max-w-6xl mx-auto flex justify-around py-3">
    {[
      { ref: aboutRef, img: img1, label: "About" },
      { ref: dietRef, img: img2, label: "Diet" },
      { ref: trainingRef, img: img3, label: "Training" },
      { ref: groomingRef, img: img4, label: "Grooming" }
    ].map((item, idx) => (
      <button
        key={idx}
        onClick={() => scrollToSection(item.ref)}
        className="flex flex-col sm:flex-row items-center sm:space-x-3 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
      >
        <img
          src={item.img}
          alt={item.label}
          className="w-16 h-16 rounded-full object-cover transform hover:scale-105 transition-transform"
          loading='lazy'
        />
        <span className="font-semibold text-lg">{item.label}</span>
      </button>
    ))}
  </div>
</nav>

        <div className="mt-12">
        {/* About Section - Combined from initial overview and traits */}
        <div ref={aboutRef}>
          {/* Breed Overview Section */}
          <section className="mb-12 bg-gradient-to-r from-orange-200 to-orange-300 p-8 rounded-xl shadow-lg flex flex-col lg:flex-row items-center gap-8">
  {/* Text Section */}
  <div className="lg:w-1/2 flex-shrink-0 text-center lg:text-left">
    <h2 className="text-4xl font-extrabold mb-4 text-gray-900 leading-snug">
     Beagles:The Curious Canine Detectives
    </h2>
    <p className="text-lg text-gray-800 max-w-lg mx-auto lg:mx-0">
      Scent-Seeking Navigators of Old England, following their noses with 
      wagging tails and inquisitive ears.
    </p>
  </div>

  {/* Image Section */}
  <div className="lg:w-1/2 flex justify-center">
    <img
      src={img5}
      alt="Golden Retriever"
      className="w-72 sm:w-80 lg:w-96 rounded-xl transform hover:scale-105 transition-transform duration-300"
    />
  </div>
</section>

          </div>


          {/* Detailed Characteristics Section */}
          <section className="mb-12 bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-8 text-gray-800">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 border-b border-gray-400 pb-2">Coat: Short and dense</h3>
              <p className="text-lg mb-2"><span className="font-semibold">Shedding:</span> Medium</p>
              <p className="text-lg mb-2"><span className="font-semibold">Size:</span>Small</p>
              <p className="text-lg mb-2"><span className="font-semibold">Life Expectancy:</span> 8-10 years</p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 border-b border-gray-400 pb-2">Coat Colours</h3>
              <div className="flex space-x-4 mb-4">
                <span className="bg-[#D2B48C] text-black font-semibold px-4 py-1 rounded-full">Black With Tan Markings</span>
                
              </div>
              <div className="mb-4">
  <div className="grid grid-cols-3 gap-4 text-lg mb-2">
    <span className="font-semibold">Weight:</span>
    <span>10-11 kgs (male)</span>
    <span>9-10 kgs (female)</span>
  </div>
  <div className="grid grid-cols-3 gap-4 text-lg">
    <span className="font-semibold">Height:</span>
    <span>36-41 cm (male)</span>
    <span>33-38 cm (female)</span>
  </div>
</div>

            </div>
          </section>

          {/* Adaptability Section */}
<section className="mb-12 bg-cyan-200 p-8 rounded-lg shadow-md flex flex-col lg:flex-row items-center gap-8">
  {/* Left Text */}
  <div className="lg:w-1/3 text-center lg:text-left">
    <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-gray-400 pb-2">
      Adaptability
    </h2>
    <p className="text-lg text-gray-700">
      Temperatures should be moderate for Beagles.
    </p>
  </div>

  {/* Center Image */}
  <div className="lg:w-1/3 flex justify-center">
    <img
      src={img6} // replace with your image variable or URL
      alt="Golden Retriever Adaptability"
      className="w-48 sm:w-56 lg:w-64 object-cover"
    />
  </div>

  {/* Right Text */}
  <div className="lg:w-1/3 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-6">
    <div className="text-center">
      <p className="text-2xl font-semibold text-gray-800">Hot Weather Tolerance:</p>
      <p className="text-lg text-black font-bold">up to 30°C</p>
    </div>
    <div className="text-center">
      <p className="text-2xl font-semibold text-gray-800">Cold Weather Tolerance:</p>
      <p className="text-lg text-black font-bold">up to 10°C</p>
    </div>
  </div>
</section>


          {/* Traits and Rating Section */}
          <section className="mb-12">
  {/* Section Title */}
  <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
    Traits
  </h2>
  <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
    These attributes have been rated by dog trainers, expert vets, and pet behaviourists.
    Remember that all dogs are individuals with their own personalities.
  </p>

  {/* Traits Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
    {[
      { score: "5", label: "Friendliness" },
      { score: "5", label: "Good With Other Dogs" },
      { score: "5", label: "Good With Kids" },
      { score: "4", label: "Barking Tendencies" },
      { score: "4", label: "Energy Level" },
      { score: "4", label: "Playfulness" }
    ].map((trait, i) => (
      <div
        key={i}
        className="p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
      >
        {/* Circular Score Badge */}
        <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center rounded-full bg-gradient-to-tr from-orange-500 to-orange-300 text-white font-bold text-2xl">
          {trait.score}
          <span className="text-sm">/5</span>
        </div>
        <p className="text-sm font-medium text-gray-700">{trait.label}</p>
      </div>
    ))}
  </div>
 
</section>

<div ref={dietRef}>
<section className="mb-12 bg-gray-100 rounded-lg shadow-lg overflow-hidden">

    <div className="mt-0 p-6 bg-gradient-to-r from-orange-400 to-orange-300 text-white rounded-xl shadow-xl flex flex-col sm:flex-row justify-between items-center gap-4">
    <p className="text-xl font-semibold text-center sm:text-left">
      Good For First-Time Pet Parents
    </p>
    <div className="text-4xl font-extrabold">10/10</div>
  </div>
  

  {/* Content */}
  <div className="bg-gray-200 p-6">
    {/* Title */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 rounded-lg p-4">
  {/* Text Section */}
  <div className="flex-1 text-left">
    <h2 className="text-xl font-bold text-gray-900 mb-1 underline decoration-red-500 decoration-2">
      Beagle Diet
    </h2>
    <p className="text-gray-700">
      Consider following tips when choosing food for your Beagles.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-shrink-0">
    <img src={diet2} 
    alt="Chicken based food" 
    className="rounded-md w-40 h-auto object-cover" 
    loading='lazy'
    
    />
    <p className="text-sm font-medium text-center mt-2">Chicken based food</p>
  </div>
</div>


    {/* Tip 1 */}
    <div className="mb-8 flex flex-col md:flex-row items-center md:items-start gap-6 rounded-lg p-4">
  
  {/* Text Section */}
  <div className="flex-1 text-left">
    <h2 className="font-bold text-gray-900 mb-2">
      1. Choose a balanced diet
    </h2>
    <p className="text-gray-700 mb-4">
      A balanced diet is essential for a Beagle's overall health and well-being. 
      High-quality dry kibble or wet food specifically formulated for small breeds is recommended.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-shrink-0 flex gap-4 flex-wrap justify-center">
  {[
    { img: chickenfood, label: "Dry Food", link: "#" },
    { img: fishfood, label: "Wet Food", link: "#" },
  ].map((item, idx) => (
    <a
      key={idx}
      href={item.link}
      className="relative bg-white rounded-lg shadow-md p-2 w-32 text-center flex flex-col items-center group hover:shadow-lg transition overflow-hidden"
    >
      <img src={item.img} 
      alt={item.label} 
      className="rounded-md mb-2" 
      loading='lazy'
      
      />
      <p className="text-sm font-medium">{item.label}</p>

      {/* Arrow button fixed at bottom-right */}
      <span className="absolute bottom-2 right-2 inline-flex items-center justify-center w-7 h-7 bg-orange-500 text-white text-lg font-bold rounded-full shadow-md transform transition-all duration-300 group-hover:translate-x-1 group-hover:bg-orange-600">
        →
      </span>
    </a>
  ))}
</div>

  
</div>


    {/* Tip 2 */}
    <div className="mb-8">
      <h2 className="font-bold text-gray-900 mb-2">2. Avoid fillers & additives</h2>
      <p className="text-gray-700 mb-4">
        Beagles are prone to food allergies and sensitivities, 
        so it's important to choose high-quality dog food with ingredients such as meat and vegetables.
      </p>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
  {[
    { img: baked, label: "Baked dry food", link: "#" },
    { img: soy, label: "Soy-free food", link: "#" },
  ].map((item, idx) => (
    <a
      key={idx}
      href={item.link}
      className="relative bg-white rounded-lg shadow-md p-2 w-32 text-center flex flex-col items-center group hover:shadow-lg transition overflow-hidden"
    >
      <img src={item.img} 
      alt={item.label} 
      className="rounded-md mb-2" 
      loading='lazy'
      
      />
      <p className="text-sm font-medium">{item.label}</p>

      {/* Arrow button fixed at bottom-right */}
      <span className="absolute bottom-2 right-2 inline-flex items-center justify-center w-7 h-7 bg-orange-500 text-white text-lg font-bold rounded-full shadow-md transform transition-all duration-300 group-hover:translate-x-1 group-hover:bg-orange-600">
        →
      </span>
    </a>
  ))}
</div>

    </div>

    {/* Tip 3 */}
    <div className="mb-8 flex flex-col md:flex-row items-center md:items-start gap-6 rounded-lg p-4">
  
  {/* Text Section */}
  <div className="flex-1 text-left">
    <h2 className="font-bold text-gray-900 mb-2">3. Consider their age</h2>
    <p className="text-gray-700 mb-4">
      Beagles are a small breed and their dietary needs can vary.
      It’s important to choose food that is appropriate for their age and size.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-shrink-0 flex gap-4 flex-wrap justify-center">
  {[
    { img: puppy, label: "Puppy food", link: "#" },
    { img: adult, label: "Adult dog food", link: "#" },
    { img: senior, label: "Senior dog food", link: "#" },
  ].map((item, idx) => (
    <a
      key={idx}
      href={item.link}
      className="relative bg-white rounded-lg shadow-md p-2 w-32 text-center flex flex-col items-center group hover:shadow-lg transition overflow-hidden"
    >
      <img src={item.img} 
      alt={item.label} 
      className="rounded-md mb-2" 
      loading='lazy'
      
      />
      <p className="text-sm font-medium">{item.label}</p>

      {/* Arrow button fixed at bottom-right */}
      <span className="absolute bottom-2 right-2 inline-flex items-center justify-center w-7 h-7 bg-orange-500 text-white text-lg font-bold rounded-full shadow-md transform transition-all duration-300 group-hover:translate-x-1 group-hover:bg-orange-600">
        →
      </span>
    </a>
  ))}
</div>

  
</div>

  </div>
</section>


        </div>
        </div>

        {/* Diet/Health Section */}
        
          <section className="mb-12 bg-orange-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center border-b-2 border-gray-400 pb-2">Beagle Common health concerns</h2>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 flex flex-col justify-between">
                <h3 className="text-lg text-gray-700 mb-6 font-semibold">
                  Beagles are generally healthy and hardy dogs, but there are specific 
                  conditions they may be more prone to:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-orange-100 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Obesity</h3>
                    <p className="text-sm text-gray-600">
                      Beagles tend to become overweight due to their genetic predisposition.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-100 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Dental issues</h3>
                    <p className="text-sm text-gray-600">
                      Dental issues such as tartar build-up and periodontal disease are common in Beagles.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-100 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Hip Dysplasia</h3>
                    <p className="text-sm text-gray-600">
                      Hip dysplasia is a genetic condition that affects the hip joint and can cause pain and lameness.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-100 rounded-lg shadow-sm col-span-1 md:col-span-2">
                    <h3 className="text-xl font-semibold mb-2">Allergies</h3>
                    <p className="text-sm text-gray-600">
                      Beagles can be prone to food allergies and sensitivities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex-shrink-0">
                <img src={health} 
                alt="Golden Retriever looking healthy" 
                
                className="w-full rounded-lg" 
                loading='lazy'
                
                />
              </div>
            </div>
            <div className="mt-8 bg-orange-100 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Does your Retriever have a health issue?</h3>
                <p className="text-gray-600">
                  Provide them a veterinary prescription diet along with prescribed medicines.
                </p>
              </div>
              <button className="mt-4 md:mt-0 bg-orange-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-orange-600 transition duration-300">
                Prescription diet
              </button>
            </div>
          </section>
        

        {/* Training Section */}
        <div ref={trainingRef}>
          <section className="mb-12 bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center border-b-2 border-gray-400 pb-2">Beagles Training</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-last">
                <img src={training1} 
                alt="Golden Retriever being trained" 
                className="w-full rounded-lg" 
                loading='lazy'
                
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  In order to keep Beagles content and in good shape, regular physical and mental engagement is crucial. 
                  Here are some exercises and activities to keep their lively spirits thriving.
                </p>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">1. Physical training and exercises</h3>
                  <p className="text-gray-600">
                    Beagles are active and energetic dogs that require regular physical exercise. 
                    These can include activities such as going for a run, playing fetch, or going for a hike.
                  </p>
     <div className="flex flex-wrap gap-4 justify-center md:justify-start">
  {[
    { img: leashes, label: "Collar, Leashes", link: "#" },
    { img: rope, label: "Rope toys", link: "#" },
    { img: toy, label: "Fetch toys", link: "#" },
  ].map((item, idx) => (
    <a
      key={idx}
      href={item.link}
      className="relative bg-white rounded-lg shadow-md p-2 w-28 text-center flex flex-col items-center group hover:shadow-lg transition overflow-hidden"
    >
      <img src={item.img} alt={item.label} className="rounded-md mb-2" loading='lazy'/>
      <p className="text-sm font-medium">{item.label}</p>

      {/* Arrow button fixed at bottom-right */}
      <span className="absolute bottom-2 right-2 inline-flex items-center justify-center w-7 h-7 bg-orange-500 text-white text-lg font-bold rounded-full shadow-md transform transition-all duration-300 group-hover:translate-x-1 group-hover:bg-orange-600">
        →
      </span>
    </a>
  ))}
</div>

                  
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">2. Interactive Play</h3>
                  <p className="text-gray-600">
                    Beagles have a strong desire to explore and are known to be curious dogs, so it's important 
                    to provide them with mental stimulation through interactive toys, puzzles, and training exercises.
                  </p>
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
  {[
    { img: interactive, label: "Interactive toys", link: "#" },
    { img: puzzle, label: "Puzzle toys", link: "#" },
    { img: chew, label: "Chew toys", link: "#" },
  ].map((item, idx) => (
    <a
      key={idx}
      href={item.link}
      className="relative bg-white rounded-lg shadow-md p-2 w-28 text-center flex flex-col items-center group hover:shadow-lg transition overflow-hidden"
    >
      <img src={item.img} alt={item.label} className="rounded-md mb-2" loading='lazy'/>
      <p className="text-sm font-medium">{item.label}</p>

      {/* Arrow button fixed at bottom-right */}
      <span className="absolute bottom-2 right-2 inline-flex items-center justify-center w-7 h-7 bg-orange-500 text-white text-lg font-bold rounded-full shadow-md transform transition-all duration-300 group-hover:translate-x-1 group-hover:bg-orange-600">
        →
      </span>
    </a>
  ))}
</div>

                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Train And Teach New Tricks</h3>
                <p className="text-gray-600">
                  Beagles are highly trainable, and using training treats improves their 
                  obedience and behaviour for basic commands like ‘sit,’ ‘stay,’ ‘come,’ ‘heel,’ and ‘down.’
                </p>
                <div className="mt-4 flex space-x-4">
                  <img src={training2} alt="Training treats" className="h-20 w-auto" loading='lazy'/>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <button className="mt-4 md:mt-0 bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300">
                  Training treats
                </button>
              </div>
            </div>
          </section>
        </div>
        
        {/* Grooming Section - Part 1 */}
<div ref={groomingRef}>
  <section className="mb-12 bg-pink-100 p-8 rounded-lg shadow-md">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center border-b-2 border-gray-400 pb-2">
      Beagle Grooming
    </h2>
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="lg:w-1/2 flex-shrink-0">
        <p className="text-lg text-gray-700 mb-6">
          Grooming Beagles is a relatively straightforward process due to their short and dense coat.
          Let's explore some key aspects of grooming for Beagles.
        </p>
      </div>
      <div className="lg:w-1/2">
        <img
          src={grooming1}
          alt="Golden Retriever getting groomed"
          className="w-full rounded-lg"
          loading='lazy'
        />
      </div>
    </div>
  </section>
</div>

{/* Grooming Section - Part 2 */}
<section className="mb-12 bg-pink-100 p-8 rounded-lg shadow-md">

  {/* 1. Brush and bath */}
  <div className="mb-10 flex flex-col lg:flex-row items-center gap-10">
    {/* Content */}
    <div className="lg:w-1/2">
      <h3 className="text-2xl font-semibold text-pink-800 mb-4">1. Brush and bath</h3>
      <p className="text-gray-600 leading-relaxed">
        Brush Beagles' coats weekly to keep them shiny, healthy, 
        and minimise shedding. Bathe them occasionally using mild shampoo for cleanliness and freshness.

      </p>
    </div>
    {/* Images */}
    <div className="lg:w-1/2 flex flex-wrap gap-6 justify-center lg:justify-start">
      {[
        { img: brush, label: "Brushes and combs", link: "#" },
        { img: shampoo, label: "Shampoos and conditioners", link: "#" },
      ].map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          className="relative bg-white rounded-xl shadow-md p-4 w-48 text-center flex flex-col items-center group hover:shadow-lg transition"
        >
          <img
            src={item.img}
            alt={item.label}
            className="h-40 w-auto mb-3 object-contain transform transition-transform duration-300 group-hover:scale-105"
            loading='lazy'
          />
          <p className="text-base font-medium">{item.label}</p>
          <span className="absolute bottom-3 right-3 inline-flex items-center justify-center w-8 h-8 bg-orange-500 text-white text-lg font-bold rounded-full shadow-md transform transition-all duration-300 group-hover:translate-x-1 group-hover:bg-orange-600">
            →
          </span>
        </a>
      ))}
    </div>
  </div>

  {/* 2. Keep their ear clean */}
  <div className="mb-10 flex flex-col lg:flex-row items-center gap-10">
    {/* Images */}
    <div className="lg:w-1/2 flex flex-wrap gap-6 justify-center lg:justify-start order-1">
      {[
        { img: ear, label: "Ear cleaning products", link: "#" }
      ].map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          className="relative bg-white rounded-xl shadow-md p-4 w-48 text-center flex flex-col items-center group hover:shadow-lg transition"
        >
          <img
            src={item.img}
            alt={item.label}
            className="h-40 w-auto mb-3 object-contain transform transition-transform duration-300 group-hover:scale-105"
            loading='lazy'
          />
          <p className="text-base font-medium">{item.label}</p>
          <span className="absolute bottom-3 right-3 inline-flex items-center justify-center w-8 h-8 bg-orange-500 text-white text-lg font-bold rounded-full shadow-md transform transition-all duration-300 group-hover:translate-x-1 group-hover:bg-orange-600">

            →
          </span>
        </a>
      ))}
    </div>
    {/* Content */}
    <div className="lg:w-1/2 order-2">
      <h3 className="text-2xl font-semibold text-pink-800 mb-4">2. Keep their ear clean</h3>
      <p className="text-gray-600 leading-relaxed">
        It's important to check their ears 
        regularly and clean them as needed with a cotton ball and a mild ear-cleaning solution.
      </p>
    </div>
  </div>

  {/* 3. Keep their paws and nails clean */}
  <div className="flex flex-col lg:flex-row items-center gap-10">
    {/* Content */}
    <div className="lg:w-1/2">
      <h3 className="text-2xl font-semibold text-pink-800 mb-4">3. Keep their paws and nails clean</h3>
      <p className="text-gray-600 leading-relaxed">
        Their nails grow fast and become too long. Regular nail trims are 
        essential to prevent discomfort and injury caused by overgrown nails.
      </p>
    </div>
    {/* Images */}
    <div className="lg:w-1/2 flex flex-wrap gap-6 justify-center lg:justify-start">
      {[
        { img: paw, label: "Paw and nail cleaning products", link: "#" }
      ].map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          className="relative bg-white rounded-xl shadow-md p-4 w-48 text-center flex flex-col group hover:shadow-lg transition ml-0"
        >
          <img
            src={item.img}
            alt={item.label}
            className="h-40 w-auto mb-3 object-contain transform transition-transform duration-300 group-hover:scale-105"
            loading='lazy'
          />
          <p className="text-base font-medium">{item.label}</p>
          <span className="absolute bottom-3 right-3 inline-flex items-center justify-center w-8 h-8 bg-orange-500 text-white text-lg font-bold rounded-full shadow-md transform transition-all duration-300 group-hover:translate-x-1 group-hover:bg-orange-600">
            →
          </span>
        </a>
      ))}
    </div>
  </div>

</section>


        {/* Medication Section */}
        <section className="mb-12 bg-teal-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Need Pet Medication?</h2>
              <p className="text-lg text-gray-600">Order It Delivered At Home</p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <button className="mt-4 md:mt-0 bg-orange-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-orange-600 transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        </section>

        <section className="relative bg-blue-200 rounded-lg">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
    {/* Image Section */}
    <div className="md:w-1/2 w-full">
      <img
        src={training3} // replace with your image path
        alt="German Shepherd"
        className="w-full h-full object-cover"
        loading='lazy'
      />
    </div>

    {/* Text Section */}
    <div className="md:w-1/2 w-full p-8 flex items-center justify-center">
      <p className="text-black text-xl md:text-2xl font-semibold leading-relaxed text-center md:text-left">
        Beagles, possess an extraordinary sense of smell.
        Unleash their historical hunting prowess by incorporating scent
        training activities like tracking, search and rescue, into their training regimen.
      </p>
    </div>
  </div>
</section>


        {/* FAQ Section */}
        <section className="py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <button
                  className="flex justify-between items-center w-full p-5 text-left font-semibold text-lg text-gray-800 focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {openFaqIndex === index && (
                  <div className="p-5 pt-0 text-gray-600 border-t border-gray-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>


        
      </div>
    </div>
  );
};

export default BeaglePage;
