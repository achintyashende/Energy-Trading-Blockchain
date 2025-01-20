import React from 'react'
import Ar from "../assests/Ar.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { Link } from 'react-router-dom'

function First({ loadProvider, loading }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="text-white flex flex-col md:flex-row justify-around items-center pt-15 min-h-screen bg-gray-900">
      <div className="mb-16 max-w-xl">
        <h1 className="font-semibold text-5xl mb-8">
          Decentralized Energy Trading for a Sustainable Future 
          <span className="font-thin text-green-300 pl-2">Trade renewable energy seamlessly with blockchain-powered transparency</span>
        </h1>
        <Slider {...settings}>
          {/* <div className="text-xl font-thin">
            <span className='text-sky-400 font-bold'>Welcome to AssetTokens </span>– the premier platform for tokenizing and monetizing residential properties. Dive into a seamless experience where property management meets cutting-edge technology, enabling owners and renters alike to create, list, and rent unique homes.
          </div>
          <div className="text-xl font-thin">
            <span className='text-sky-400 font-bold'>Create:</span> With our intuitive tools, tokenize and fractionalize your properties into attractive rental units. Your property is presented with detailed descriptions, and high-quality photos, ensuring maximum visibility and appeal.
          </div>
          <div className="text-xl font-thin">
            <span className='text-sky-400 font-bold'>Watch:</span> Explore a diverse portfolio of properties available for rent, curated by owners from around the globe. Select the number of flats or houses you want to rent, view pricing details, and proceed with a secure payment process.
          </div>
          <div className="text-xl font-thin">
            <span className='text-sky-400 font-bold'>Connect:</span> Join a community of dedicated property owners and prospective renters. Engage in discussions, read reviews, and connect directly with property owners to ask questions and arrange viewings.
          </div>
          <div className="text-xl font-thin">
            <span className='text-sky-400 font-bold'>AssetTokens</span>  is more than a platform; it’s a revolution in the asset management space. Simplify the process, discover exceptional units, and be part of the future of tokenization and monetization of real world assets.
          </div> */}
          <div className="text-xl font-thin">
            <span className='text-green-400 font-bold'>Welcome to EnergyXchange </span>– the revolutionary platform for decentralized renewable energy trading. Dive into a seamless experience where energy producers and consumers connect through cutting-edge blockchain technology.
          </div>
          <div className="text-xl font-thin">
            <span className='text-green-400 font-bold'>Trade:</span> Tokenize your renewable energy generation and trade energy tokens directly with consumers or businesses. Empower your energy with transparency and trust.
          </div>
          <div className="text-xl font-thin">
            <span className='text-green-400 font-bold'>Explore:</span> Browse a marketplace of renewable energy tokens from various producers around the globe. View token details, pricing, and availability, ensuring a secure and efficient trading process.
          </div>
          <div className="text-xl font-thin">
            <span className='text-green-400 font-bold'>Connect:</span> Join a vibrant community of renewable energy producers and consumers. Participate in discussions, share insights, and contribute to a sustainable energy future.
          </div>
          <div className="text-xl font-thin">
            <span className='text-green-400 font-bold'>EnergyXchange</span> is more than a platform; it’s a movement towards a greener, decentralized future. Simplify energy trading, promote sustainability, and be part of the renewable energy revolution.
          </div>

        </Slider>
      </div>
      <div>
        <img src={Ar} alt="AR Illustration" className="h-[490px]" />
      </div>
    </div>
  );
}

export default First