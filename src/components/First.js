import React from 'react'
import Ar from "../assests/Ar.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
          <span className="font-thin text-lime-500 pl-2">Trade renewable energy seamlessly with blockchain-powered transparency</span>
        </h1>
        <Slider {...settings}>

          <div className="text-xl font-thin">
            <span className='text-lime-400 font-bold'>Welcome to EnergyXchange </span>– the revolutionary platform for decentralized renewable energy trading. Dive into a seamless experience where energy producers and consumers connect through cutting-edge blockchain technology.
          </div>
          <div className="text-xl font-thin">
            <span className='text-lime-400 font-bold'>Trade:</span> Tokenize your renewable energy generation and trade energy tokens directly with consumers or businesses. Empower your energy with transparency and trust.
          </div>
          <div className="text-xl font-thin">
            <span className='text-lime-400 font-bold'>Explore:</span> Browse a marketplace of renewable energy tokens from various producers around the globe. View token details, pricing, and availability, ensuring a secure and efficient trading process.
          </div>
          <div className="text-xl font-thin">
            <span className='text-lime-400 font-bold'>Connect:</span> Join a vibrant community of renewable energy producers and consumers. Participate in discussions, share insights, and contribute to a sustainable energy future.
          </div>
          <div className="text-xl font-thin">
            <span className='text-lime-400 font-bold'>EnergyXchange</span> is more than a platform; it’s a movement towards a greener, decentralized future. Simplify energy trading, promote sustainability, and be part of the renewable energy revolution.
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