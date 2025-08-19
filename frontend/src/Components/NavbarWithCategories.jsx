
import React, { useState } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import LoginWithOTP from "../pages/ProfilePage"; 
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import DeliveryModal from "./DeliveryModal";
import cat1 from '../assets/Categories/cat1.png';
import cat2 from '../assets/Categories/cat2.png';
import cat3 from '../assets/Categories/cat3.png';
import cat4 from '../assets/Categories/cat4.png';
import cat5 from '../assets/Categories/cat5.png';
import cat6 from '../assets/Categories/cat6.png';
import cat7 from '../assets/Categories/cat7.png';
import cat8 from '../assets/Categories/cat8.png';
import cat9 from '../assets/Categories/cat9.png';
import cat10 from '../assets/Categories/cat10.png';
import cat11 from '../assets/Categories/cat11.png';
import dog1 from '../assets/Categories/dog1.png';
import dog2 from '../assets/Categories/dog2.png';
import dog3 from '../assets/Categories/dog3.png';
import dog4 from '../assets/Categories/dog4.png';
import dog5 from '../assets/Categories/dog5.png';
import dog6 from '../assets/Categories/dog6.png';
import dog7 from '../assets/Categories/dog7.png'; 
import dog8 from '../assets/Categories/dog8.png';
import dog9 from '../assets/Categories/dog9.png';
import dog10 from '../assets/Categories/dog10.png';
import dog11 from '../assets/Categories/dog11.png';
import dog12 from '../assets/Categories/dog12.png';
import dog13 from '../assets/Categories/dog13.png';
import dog14 from '../assets/Categories/dog14.png';
import dogBrand1 from '../assets/Categories/dogBrand1.png';
import dogBrand2 from '../assets/Categories/dogBrand2.png';
import dogBrand3 from '../assets/Categories/dogBrand3.png'; 
import dogBrand4 from '../assets/Categories/dogBrand4.png'; 
import dogBrand5 from '../assets/Categories/dogBrand5.png'; 
import dogBrand6 from '../assets/Categories/dogBrand6.png'; 
import dogBrand7 from '../assets/Categories/dogBrand7.png';
import dogBrand8 from '../assets/Categories/dogBrand8.png';
import catBrand1 from '../assets/Categories/catBrand1.png';
import catBrand2 from '../assets/Categories/catBrand2.png';
import catBrand3 from '../assets/Categories/catBrand3.png'; 
import catBrand4 from '../assets/Categories/catBrand4.png';
import catBrand5 from '../assets/Categories/catBrand5.png';
import catBrand6 from '../assets/Categories/catBrand6.png';
import breed1 from '../assets/Categories/breed1.png';
import breed2 from '../assets/Categories/breed2.png';
import breed3 from '../assets/Categories/breed3.png'; 
import breed4 from '../assets/Categories/breed4.png'; 
import breed5 from '../assets/Categories/breed5.png';
import breed6 from '../assets/Categories/breed6.png';
import breed7 from '../assets/Categories/breed7.png';

const categories = [
  {
    name: "Cats",
    subCategories: {
      shopFor: [
        { name: "Food", img: cat1 },
        { name: "Treats", img: cat2 },
        { name: "Litter & Supplies", img: cat3 },
        { name: "Crates & Carriers", img: cat4 },
        { name: "Trees, Beds & Scratchers", img: cat6 },
        { name: "Toys", img: cat5 },
        { name: "Grooming", img: cat7 },
        { name: "Collars & Accessories", img: cat8 },
        { name: "Bowls & Diners", img: cat10 },
        { name: "Personalised Products", img: cat11 },
        { name: "Pet Lovers", img: cat9 },
      ],
      topBrands: [
        { logo: catBrand1, discount: "Starting at ₹129" },
        { logo: dogBrand1, discount: "FLAT 15% OFF" },
        { logo: dogBrand2, discount: "EXTRA 5% OFF" },
        { logo: catBrand2, discount: "EXTRA 10% OFF" },
        { logo: catBrand3, discount: "UP TO 7% OFF" },
        { logo: catBrand4, discount: "EXTRA 6% OFF" },
        { logo: catBrand5, discount: "UP TO 10% OFF" },
        { logo: catBrand6, discount: "UP TO 20% OFF" },

      ]
    },
  },
  {
    name: "Dogs",
    subCategories: {
      shopFor: [
        { name: "Sara's Wholesome", img: dog1 },
        { name: "Food", img: dog3 },
        { name: "Treats", img: dog5 },
        { name: "Walk Essentials", img: dog6 },
        { name: "Grooming", img: dog8 },
        { name: "Bedding & More", img: dog9 },
        { name: "Bowls & Diners", img: dog10 },
        { name: "Toys", img: dog7 },
        { name: "Health & Hygiene", img: dog4 },
        { name: "Clothing & Accessories", img: dog2 },
        { name: "Travel & Supplies", img: dog13 },
        { name: "Personalised Products", img: dog12 },
        { name: "Training Essentials", img: dog14 },
        { name: "Pet Lovers", img: dog11 },
      ],
      topBrands: [
        { logo: dogBrand1, discount: "FLAT 15% OFF" },
        { logo: dogBrand2, discount: "EXTRA 5% OFF" },
        { logo: dogBrand3, discount: "UP TO 12% OFF" },
        { logo: dogBrand4, discount: "UP TO 7% OFF" },
        { logo: dogBrand5, discount: "UP TO 10% OFF" },
        { logo: dogBrand6, discount: "Extra ₹500* Off" },
        { logo: dogBrand7, discount: "BACK IN STOCK" },
        { logo: dogBrand8, discount: "UP TO 20% OFF" },
      ]
    },
  },
  
  {
    name: "Consult a Vet",
    path: "/consult",
    subCategories: [
      { name: "Book Appointment", path: "/consult" },
      { name: "Online Chat", path: "/consult-a-vet?action=chat" }
    ]
  },
  { name: "Grooming", path:"/grooming",  subCategories: ["Discounted Items", "Bundles"] },
  {
    name: "Meet And Breed",
    // MODIFIED: Restructured subCategories for Shop By Breed to match the image-based layout
    subCategories: {
      shopFor: [
        { name: "Golden Retriever", img: breed3, path: "/breed/golden-retriever" },
        { name: "German Shepherd", img: breed4, path: "/breed/german-shepherd" },
        { name: "Labrador", img: breed2, path: "/breed/labrador" },
        { name: "Rottweiler", img: breed1, path: "/breed/rottweiler" },
        { name: "Beagle", img: breed5, path: "/breed/beagle" },
        { name: "Shih Tzu", img: breed6, path: "/breed/shih-tzu" },
        { name: "Boxer", img: breed7, path: "/breed/boxer" },
      ],
    },
  },
  {name: "Pet Essentials" , subCategories: ["", ""]},
  {
    name: "Pharmacy",
    // MODIFIED: Restructured subCategories for Pharmacy to match the image-based layout
    subCategories: {
      shopFor: [
        { name: "Medicines", img: "https://placehold.co/80x80/ADD8E6/000000?text=Meds" },
        { name: "Supplements", img: "https://placehold.co/80x80/ADD8E6/000000?text=Supps" },       
      ],
      topBrands: [
        { name: "Himalaya", logo: "https://placehold.co/60x60/808000/FFFFFF?text=H" },
        { name: "Vetmed", logo: "https://placehold.co/60x60/4682B4/FFFFFF?text=VM" },
        { name: "Zoetis", logo: "https://placehold.co/60x60/8B0000/FFFFFF?text=Z" },
       
      ]
    }
  },
  // { name: "Day Care", subCategories: ["Bird Feed", "Accessories"] },
  
  
  {
    name: "Day Care",
    path: "/clinic",
    subCategories: [
      {name: "Vet&Meet Clinic", path: "/clinic"},
      {name: "Checkup", path: "/clinic/checkup"},
    ]
  },
  
];

export default function NavbarWithCategories() {
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const [showModal, setShowModal] = useState(false); // This seems unused, consider removing
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleDeliveryModal = () => setShowDeliveryModal(!showDeliveryModal);
  const [currentDeliveryPincode, setCurrentDeliveryPincode] = useState('Delivery');

  const { getCartTotalItems } = useCart();

  const toggleModal = () => setShowModal(!showModal); // This seems unused, consider removing
  const toggleAppointmentModal = () =>
    setShowAppointmentModal(!showAppointmentModal);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    if (drawerOpen) {
      setDrawerOpen(false);
    }
  };

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const toggleCategory = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  const handleSubCategoryClick = (item) => {
    // This handler needs to be more robust for the new Dogs structure
    // For now, it will log, but you'd add specific navigation/logic here.
    if (typeof item === "object") {
      if (item.path) {
        navigate(item.path);
        setDrawerOpen(false);
      } else if (item.name === "Book Appointment" && item.action === "openBookAppointmentModal") {
        toggleAppointmentModal();
        setDrawerOpen(false);
      } else {
        console.log(`Clicked on object: ${item.name}`);
        setDrawerOpen(false);
      }
    } else {
      console.log(`Clicked on string: ${item}`);
      setDrawerOpen(false);
    }
  };

  const handleMainCategoryClick = (categoryName) => {
    // This logic might need refinement based on how you want to handle main category clicks
    // vs. hover for dropdowns. For now, it navigates to a general page.
    if (categoryName === "Cats" || categoryName === "Dogs") {
      navigate("/");
    } else if (categoryName === "Consult a Vet") {
      navigate("/consult");
    } else if (categoryName === "Henlo") {
      navigate("/henlo-products");
    } else if (categoryName === "Pharmacy") {
      navigate("/pharmacy");
    } else if (categoryName === "Day Care") {
      navigate("/clinic");
    }
    else if (categoryName === "Grooming") {
      navigate("/grooming");
    } 


    if (drawerOpen) {
      setDrawerOpen(false);
    }
  };

  const handleCartClick = () => {
    navigate('/cart');
    if (drawerOpen) {
      setDrawerOpen(false);
    }
  };

  const handlePincodeSubmit = (pincode) => {
    setCurrentDeliveryPincode(pincode);
    toggleDeliveryModal();
    console.log("Delivery pincode set to:", pincode);
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <div
        style={{ backgroundColor: "#FFA500" }}
        className="shadow-md p-4 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 md:space-x-4 sticky top-0 z-50 font-Nunito"
      >
        {/* Left: Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            onClick={toggleDrawer}
            className="md:hidden mr-4 focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-white">Vet&Meet</h1>
        </div>

        {/* Middle: Search */}
        <div className="relative flex items-center w-full md:w-1/2 px-2">
          <input
            type="search"
            placeholder="Search for products & brands"
            className="w-full border border-black bg-white rounded-md px-4 py-2 pl-10 focus:outline-none"
          />
          <svg
            className="absolute left-5 w-5 h-5 text-gray-500"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42" />
          </svg>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex justify-around w-full md:w-auto space-x-6 md:space-x-4">
          <button onClick={toggleLoginModal} className="flex flex-col items-center text-lg text-white hover:text-black cursor-pointer">
            <FaUser className="text-xl" />
            <span>Profile</span>
          </button>


          <button
            onClick={toggleDeliveryModal}
            className="flex flex-col items-center text-lg text-white hover:text-black cursor-pointer relative"
          >
            <FaMapMarkerAlt className="text-xl" />
            <span className="ml-2 text-lg">
              {currentDeliveryPincode ? currentDeliveryPincode : 'Delivery'}
            </span>

          </button>
          <button
            onClick={() => {
              navigate('/contact-us');
              if (drawerOpen) {
                setDrawerOpen(false);
              }
            }}
            className="flex flex-col items-center text-lg text-white hover:text-black cursor-pointer"
          >
            <FaPhoneAlt className="text-xl" />
            <span>Call</span>
          </button>
          <button onClick={handleCartClick} className="flex flex-col items-center text-lg text-white hover:text-black relative cursor-pointer">
            <FaShoppingCart className="text-xl" />
            <span>Cart</span>
            <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
              {getCartTotalItems()}
            </span>
          </button>
        </div>
      </div>

      {/* CATEGORY NAVBAR - DESKTOP */}
<nav className="bg-white shadow-md sticky top-0 z-50 hidden md:block">
  <div className="max-w-[1400px] mx-auto px-4 h-12 flex items-center justify-between">
    <div className="flex space-x-12 text-gray-800 font-medium relative mx-25">
      {categories.map((cat, index) => (
        <div key={index} className="relative group">
          <button
            onClick={() => handleMainCategoryClick(cat.name)}
            className="hover:text-blue-600 text-xl font-bold cursor-pointer"
          >
            {cat.name}
          </button>

          {/* Conditional rendering for desktop dropdown content */}
          
            {["Cats", "Dogs"].includes(cat.name) ? (
              <div className="absolute left-0 top-10 w-[1150px] h-[500px] bg-white border-t border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 overflow-y-auto rounded-lg p-2 scrollbar-hide">
                <div className="mb-3">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">Shop For</h3>
                  <div className="grid grid-cols-7 gap-0">
                    {cat.subCategories.shopFor.map((item, subIndex) => (
                      <div
                        key={subIndex}
                        className="flex flex-col items-center text-center cursor-pointer p-2 rounded-lg"
                        onClick={() => handleSubCategoryClick(item)}
                      >
                        <img src={item.img} alt={item.name} className="w-20 h-20 rounded-lg object-cover mb-2" />
                        <span className="text-sm font-medium text-gray-700">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-md font-semibold mb-2 text-gray-800">Top Brands</h3>
                  <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-1 pb-1 scrollbar-hide">
                    <div className="flex space-x-2 md:space-x-6 mx-2">
                      {cat.subCategories.topBrands.map((brand, subIndex) => (
                        <div
                          key={subIndex}
                          className="snap-center flex-shrink-0 rounded-xl overflow-hidden p-3 text-center relative cursor-pointer transition"
                          onClick={() => handleSubCategoryClick(brand)}
                        >
                          <img
                            src={brand.logo}
                            alt={brand.name}
                            className="w-24 h-24 mx-auto rounded-full object-cover border mb-2"
                            loading="lazy"
                          />
                          <span className="block text-sm font-medium text-gray-700">{brand.name}</span>
                          {brand.discount && (
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs px-2 py-0 rounded-full whitespace-nowrap">
                              {brand.discount}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : cat.name === "Meet And Breed" ? (
  <div className="fixed top-[80px] left-0 w-full bg-white border-t border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 overflow-hidden rounded-none px-8 py-4">
   
    <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
      {cat.subCategories.shopFor.map((item, subIndex) => (
        <div
          key={subIndex}
          className="flex flex-col items-center text-center cursor-pointer hover:scale-105 transition"
          onClick={() => handleSubCategoryClick(item)}
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-24 h-24 object-cover rounded-full border-3 border-lime-400 shadow-sm mb-2"
            loading="lazy"
          />
          <span className="text-sm font-semibold text-gray-800">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
): cat.name === "Pharmacy" && cat.subCategories?.length > 0 ? (
              <div className="absolute left-0 top-full w-[1150px] h-[500px] bg-white border-t border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 overflow-y-auto rounded-lg">
                <div className="grid grid-cols-5 gap-2 px-8 py-6">
                  {cat.subCategories.map((item, subIndex) => (
                    <div
                      key={subIndex}
                      className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
                      onClick={() => handleSubCategoryClick(item)}
                    >
                      {typeof item === "object" ? item.name : item}
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          }
        </div>
      ))}
    </div>
  </div>
</nav>

      {/* CATEGORY DRAWER - MOBILE */}
      <div
        className={`fixed inset-0 z-50 transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-amber-500 bg-opacity-40 md:hidden`}
        onClick={toggleDrawer}
      >
        <div
          className="bg-white w-72 h-full p-6 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <nav>
            {categories.map((cat, index) => (
              <div key={index} className="mb-4">
                {cat.path ? ( // If the main category has a direct path, it should navigate immediately
                  <button
                    onClick={() => {
                      navigate(cat.path);
                      setDrawerOpen(false); // Close drawer on navigation
                    }}
                    className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-blue-600"
                  >
                    {cat.name}
                  </button>
                ) : ( // Otherwise, it's an expandable category (for Cats, Dogs, Pharmacy, Henlo, Shop By Breed, Summer Sale)
                  <button
                    onClick={() => toggleCategory(index)}
                    className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-blue-600"
                  >
                    {cat.name}
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                )}

                {/* Subcategory list for expandable categories (if openIndex matches and no direct path) */}
                {openIndex === index && !cat.path && (
                  <ul className="mt-2 pl-4 space-y-1 text-gray-700">
                    {["Cats", "Dogs"].includes(cat.name) ? (
                      // Display a simplified list for Cats and Dogs on mobile
                      <>
                        <li className="font-bold mt-2">Shop For:</li>
                        {cat.subCategories.shopFor.map((item, i) => (
                          <li
                            key={`mobile-shop-${i}`}
                            className="cursor-pointer hover:text-blue-600"
                            onClick={() => handleSubCategoryClick(item)}
                          >
                            {item.name}
                          </li>
                        ))}
                        <li className="font-bold mt-2">Top Brands:</li>
                        {cat.subCategories.topBrands.map((brand, i) => (
                          <li
                            key={`mobile-brand-${i}`}
                            className="cursor-pointer hover:text-blue-600"
                            onClick={() => handleSubCategoryClick(brand)}
                          >
                            {brand.name} {brand.discount && `(${brand.discount})`}
                          </li>
                        ))}
                      </>
                    ) : (
                      // Existing rendering for other categories on mobile (Pharmacy, Henlo, Shop By Breed, Summer Sale)
                      cat.subCategories.map((sub, i) => (
                        <li
                          key={i}
                          className="cursor-pointer hover:text-blue-600"
                          onClick={() => handleSubCategoryClick(sub)}
                        >
                          {typeof sub === "object" ? sub.name : sub}
                        </li>
                      ))
                    )}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>


      {/* DELIVERY MODAL (now a separate component) */}
      {showDeliveryModal && (
        <DeliveryModal
          onClose={toggleDeliveryModal}
          onSubmitPincode={handlePincodeSubmit}
        />
      )}


      {/* LOGIN WITH OTP MODAL */}
      {showLoginModal && <LoginWithOTP onClose={toggleLoginModal} />}
    </>
  );
}
