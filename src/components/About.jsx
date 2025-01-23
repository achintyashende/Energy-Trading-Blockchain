import React from 'react'
import Ar from "../assests/Ar.png"
const About = () => {
    return (
        <div className=" text-white min-h-screen">
            {/* About Us */}
            <div className=" pt-8 pb-3">
                <h1 className="text-5xl font-bold text-center text-white mb-8">About Us</h1>
            </div>

            {/* Overview */}
            <div className=" flex flex-col md:flex-row items-center justify-between pb-10 px-6 md:px-20 space-y-6 md:space-y-0">
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold text-center px-10 text-lime-400 mb-4">Overview</h1>
                    <p className="text-lg text-gray-200 text-justify px-10 leading-relaxed">
                        Our platform revolutionizes energy trading by enabling decentralized, peer-to-peer transactions using blockchain technology. By removing intermediaries, we create a transparent and secure marketplace for energy trading.

                        We empower prosumers to sell their excess renewable energy directly to consumers, making the energy market more efficient and sustainable. Consumers benefit from access to cleaner, affordable energy options while contributing to a greener future.

                        With automated smart contracts ensuring seamless and secure transactions, our platform promotes sustainability, transparency, and efficiency in the energy market.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img src={Ar} alt="Overview Image" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Mission & Vision */}
            <div className=" flex flex-col md:flex-row py-10 px-6 md:px-20 space-y-6 md:space-y-0 gap-5  bg-lime-500 bg-opacity-10">
                {/* Mission */}
                <div className="md:w-1/2 border-0 p-4">
                    <h1 className="text-4xl font-bold text-center text-lime-400 mb-4">Mission</h1>
                    <p className="text-lg text-center leading-relaxed">
                        To create a secure, transparent, and decentralized energy trading ecosystem that encourages the use of renewable energy sources and empowers individuals globally.
                    </p>
                </div>
            

                {/* Vision */}
                <div className="md:w-1/2  border-0 p-4">
                    <h1 className="text-4xl font-bold text-center text-lime-400 mb-4">Vision</h1>
                    <p className="text-lg text-center leading-relaxed">
                        To drive the global transition to sustainable energy by leveraging innovative blockchain technology and creating a greener, more equitable future.
                    </p>
                </div>
            </div>
            

            {/* How It Works */}
            <div className=" py-16">
            {/* <div className="bg-gradient-to-b from-black via-lime-600 to-black py-10"> */}
                <h1 className="text-5xl font-bold text-center  mb-8">How It Works</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                    {/* Steps */}
                    {[
                        { title: "1. Create a MetaMask Account", content: "Install MetaMask as a browser extension or mobile app. Set up your wallet and securely store your recovery phrase." },
                        { title: "2. Use BTF Coin for Transactions", content: "Our platform uses BTF Coin for all transactions, ensuring seamless and secure energy trading." },
                        { title: "3. Connect MetaMask to Our Platform", content: "Log in and connect your MetaMask wallet to access the platform and start trading energy." },
                        { title: "4. Buy and Sell Energy", content: "As a prosumer, list your excess energy. As a consumer, browse and purchase energy based on your needs." },
                        { title: "5. Secure Blockchain Transactions", content: "All transactions are automated and secured with Ethereum smart contracts, ensuring transparency and trust." }
                    ].map((step, index) => (
                        <div key={index} className="bg-opacity-30 bg-gray-600 border border-lime-400 shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-semibold text-lime-400 mb-4">{step.title}</h2>
                            <p className="text-gray-300">{step.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-lime-500 bg-opacity-20 py-10">
                <h1 className="text-5xl font-bold text-center mb-8">Contact Us</h1>
                <div className="max-w-3xl mx-auto bg-black border border-lime-400 shadow-lg rounded-lg p-6">
                    <p className="text-lg text-gray-300 mb-6">
                        Have any queries or need assistance? Feel free to reach out to us or fill out the form below!
                    </p>
                    {/* Contact Form */}
                    <form className="space-y-4">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-lime-400 text-lg font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full bg-gray-800 text-white border border-lime-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
                            />
                        </div>
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-lime-400 text-lg font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full bg-gray-800 text-white border border-lime-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
                            />
                        </div>
                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-lime-400 text-lg font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Enter your message"
                                rows="5"
                                className="w-full bg-gray-800 text-white border border-lime-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
                            ></textarea>
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-lime-500 hover:bg-lime-400 text-black font-bold py-3 rounded-lg transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                    {/* Email Link */}
                    <div className="flex items-center space-x-4 mt-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-lime-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75l-9 7.5-9-7.5m18 0L12 14.25m9-7.5v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75"
                            />
                        </svg>
                        <a
                            href="mailto:achintyashende@gmail.com"
                            className="text-lg text-lime-400 hover:underline"
                        >
                            achintyashende@gmail.com
                        </a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default About
