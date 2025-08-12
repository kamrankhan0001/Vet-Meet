import React, { useState, useRef } from 'react';

import img1 from '../../assets/Labrador/img1.png';
import img2 from '../../assets/Labrador/img2.png';
import img3 from '../../assets/Labrador/img3.png';
import img4 from '../../assets/Labrador/img4.png';
import img5 from '../../assets/Labrador/img5.png';
import img6 from '../../assets/Labrador/img6.png';
import grooming1 from '../../assets/Labrador/grooming1.png';
import paw from '../../assets/Labrador/paw.png';
import brush from '../../assets/Categories/brush.png';
import shampoo from '../../assets/Categories/shampoo.png';
import training1 from '../../assets/Labrador/training1.png';
import training2 from '../../assets/Labrador/training2.png';
import training3 from '../../assets/Labrador/training3.png';
import health from '../../assets/Labrador/health.png';
import chickenfood from '../../assets/Labrador/chickenfood.png';
import fishfood from '../../assets/Labrador/fishfood.png';
import baked from '../../assets/Categories/bakedfood.png';
import soy from '../../assets/Labrador/soyfood.png';
import puppy from '../../assets/Labrador/puppyfood.png';
import adult from '../../assets/Labrador/adultfood.png';
import senior from '../../assets/Labrador/seniorfood.png';
import diet2 from '../../assets/Categories/diet2.png';
import rope from '../../assets/Labrador/rope.png';
import leashes from '../../assets/Categories/leashes.png';
import toy from '../../assets/Labrador/toy.png';
import interactive from '../../assets/Labrador/interactive.png';
import puzzle from '../../assets/Labrador/puzzle.png';
import chew from '../../assets/Labrador/chew.png';
import ear from '../../assets/Labrador/ear.png';


const LabradorPage = ({ onBackClick }) => {
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
    question: 'Are Labradors aggressive?',
    answer: 'Labradors are generally not aggressive and are known for their friendly, gentle, and affectionate temperament. They are highly sociable and make excellent family pets. Any signs of aggression are often due to poor training, lack of socialization, or underlying health issues.'
  },
  {
    question: 'What kind of weather is ideal for Labradors?',
    answer: 'Labradors adapt well to a range of climates. Their dense double coat protects them in colder weather, but they may struggle in extreme heat. During hot conditions, ensure they have shade, fresh water, and avoid heavy exercise during the hottest parts of the day.'
  },
  {
    question: 'Do Labradors get along with other pets?',
    answer: 'Yes, Labradors are typically very friendly and get along well with other dogs and pets, especially when socialized from a young age. Their easy-going nature and playfulness make them a great fit for multi-pet households.'
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
        className="flex items-center space-x-3 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
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
          <section className="mb-12 bg-gradient-to-r from-cyan-200 to-cyan-300 p-8 rounded-xl shadow-lg flex flex-col lg:flex-row items-center gap-8">
  {/* Text Section */}
  <div className="lg:w-1/2 flex-shrink-0 text-center lg:text-left">
    <h2 className="text-4xl font-extrabold mb-4 text-gray-900 leading-snug">
      Labrador Retrievers: The Aquatic Adventurers of the Dog World!
    </h2>
    <p className="text-lg text-gray-800 max-w-lg mx-auto lg:mx-0">
      From Newfoundland's shores to family homes: Fishermen's trusted allies to cherished companions
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
              <h3 className="text-2xl font-semibold mb-4 border-b border-gray-400 pb-2">Coat: Thick and Soft</h3>
              <p className="text-lg mb-2"><span className="font-semibold">Shedding:</span> Medium</p>
              <p className="text-lg mb-2"><span className="font-semibold">Size:</span>Medium</p>
              <p className="text-lg mb-2"><span className="font-semibold">Life Expectancy:</span> 10-12 years</p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 border-b border-gray-400 pb-2">Coat Colours</h3>
              <div className="flex space-x-4 mb-4">
                <span className="bg-[#FDDC5C] text-black font-semibold px-4 py-1 rounded-full">Light Golden</span>
                <span className="bg-gray-700 text-white font-semibold px-4 py-1 rounded-full">Black</span>
                <span className="bg-[#7B3F00] text-white font-semibold px-4 py-1 rounded-full">Chocklate</span>
              </div>
              <div className="mb-4">
  <div className="grid grid-cols-3 gap-4 text-lg mb-2">
    <span className="font-semibold">Weight:</span>
    <span>24-36 kgs (male)</span>
    <span>20-30 kgs (female)</span>
  </div>
  <div className="grid grid-cols-3 gap-4 text-lg">
    <span className="font-semibold">Height:</span>
    <span>55-62 cm (male)</span>
    <span>49-55 cm (female)</span>
  </div>
</div>

            </div>
          </section>

          {/* Adaptability Section */}
<section className="mb-12 bg-blue-100 p-8 rounded-lg shadow-md flex flex-col lg:flex-row items-center gap-8">
  {/* Left Text */}
  <div className="lg:w-1/3 text-center lg:text-left">
    <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-gray-400 pb-2">
      Adaptability
    </h2>
    <p className="text-lg text-gray-700">
      Temperatures should be moderate for Labrador.
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
      <p className="text-lg text-black font-bold">up to 35°C</p>
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
      { score: "3", label: "Barking Tendencies" },
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
    <div className="text-4xl font-extrabold">9/10</div>
  </div>
  

  {/* Content */}
  <div className="bg-gray-200 p-6">
    {/* Title */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 rounded-lg p-4">
  {/* Text Section */}
  <div className="flex-1 text-left">
    <h2 className="text-xl font-bold text-gray-900 mb-1 underline decoration-red-500 decoration-2">
      Labrador Diet
    </h2>
    <p className="text-gray-700">
      Consider following tips when choosing food for your Labrador.
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
    <h3 className="font-bold text-gray-900 mb-2">
      1. Choose a protein-rich diet
    </h3>
    <p className="text-gray-700 mb-4">
      Labradors require plenty of protein to 
      <span className="italic"> fuel their muscles</span>
      Look for dog food that contains a high percentage of protein, 
      
      such as chicken, fish, or lamb.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-shrink-0 flex gap-4 flex-wrap justify-center">
  {[
    { img: chickenfood, label: "Chicken based food", link: "#" },
    { img: fishfood, label: "Fish based food", link: "#" },
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
      <h3 className="font-bold text-gray-900 mb-2">2. Avoid fillers & additives</h3>
      <p className="text-gray-700 mb-4">
        Feed your Labrador, food with high-quality ingredients, such as real meat and vegetables. 
        Avoid dog food containing fillers, like corn, wheat, and by-products.
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
    <h3 className="font-bold text-gray-900 mb-2">3. Consider their age</h3>
    <p className="text-gray-700 mb-4">
      The nutritional needs of puppies are different from those of adult dogs. 
      A puppy's diet should be higher in protein and calories to support its rapid growth and development. 
      Diet for an adult dog should be formulated to meet its maintenance needs.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center border-b-2 border-gray-400 pb-2">Labrador Common health concerns</h2>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 flex flex-col justify-between">
                <h3 className="text-lg text-gray-700 mb-6 font-semibold">
                  Generally, Labrador Retrievers are healthy dogs, but like all breeds, 
                  they are also prone to certain health issues. Scroll to know what they are.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-orange-100 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Obesity</h3>
                    <p className="text-sm text-gray-600">
                      Labradors are prone to obesity, which can lead to a list of health problems
                    </p>
                  </div>
                  <div className="p-4 bg-orange-100 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Ear Infections</h3>
                    <p className="text-sm text-gray-600">
                      Labradors are prone to ear infections due to 
                      their floppy ears, which can trap moisture and debris.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-100 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Hip Dysplasia</h3>
                    <p className="text-sm text-gray-600">
                      Labradors are particularly susceptible to hip dysplasia 
                      due to their large size and inactive lifestyle
                    </p>
                  </div>
                  <div className="p-4 bg-orange-100 rounded-lg shadow-sm col-span-1 md:col-span-2">
                    <h3 className="text-xl font-semibold mb-2">Allergies</h3>
                    <p className="text-sm text-gray-600">
                      Labradors can develop skin or food allergies, 
                      which can cause itching, scratching, and skin irritation
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center border-b-2 border-gray-400 pb-2">Labrador Training</h2>
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
                  Trainable, intelligent, and eager to please, Labradors excel in learning various 
                  commands and tasks, making them a joy to train. Let's uncover some of the activities 
                  to unlock their full potential.
                </p>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">1. Physical training and exercises</h3>
                  <p className="text-gray-600">
                    Good exercises for Labradors include walks, runs, hikes, and play sessions. 
                    They also enjoy playing fetch and participating in agility activities.
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
                    Mental stimulation is essential for Labradors to prevent boredom. 
                    Activities like obedience and agility training, puzzle toys, 
                    scent games, and interactive toys can help keep their minds active and engaged.
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
                  Retrievers learn tricks easily and enjoy training which can be enhanced by using training treats for positive reinforcement and motivation.
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
      Labrador Grooming
    </h2>
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="lg:w-1/2 flex-shrink-0">
        <p className="text-lg text-gray-700 mb-6">
          Labradors have short, dense coats that require 
          minimal grooming. Here are some tips for grooming your labrador.
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
        Labradors have a thick, dense coat that sheds heavily, so it is important 
        to brush them regularly to remove 
        loose fur and prevent matting and bathe them occasionally with a mild shampoo.

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
        Labradors have floppy ears that can be prone to infections. 
        Use a veterinarian-approved ear cleaning solution to gently 
        clean the inside of their ears and avoid inserting anything into the ear canal.
      </p>
    </div>
  </div>

  {/* 3. Keep their paws and nails clean */}
  <div className="flex flex-col lg:flex-row items-center gap-10">
    {/* Content */}
    <div className="lg:w-1/2">
      <h3 className="text-2xl font-semibold text-pink-800 mb-4">3. Keep their paws and nails clean</h3>
      <p className="text-gray-600 leading-relaxed">
        Regular nail trims are essential for Labradors to prevent painful splitting or cracking. 
        Trim them when you hear clicking on the floor, using a sharp, dog-specific nail trimmer.
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
        With webbed toes and a water-repellent coat, labradors are natural-born swimmers. 
        Their otter-like tail motion propels them with speed and agility, making them ideal 
        for water activities and rescues.
      </p>
    </div>
  </div>
</section>


        {/* FAQ Section */}
        <section className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 min-w-3xl mx-auto">
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

        {/* Back Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={onBackClick}
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300"
          >
            Back to All Breeds
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabradorPage;
