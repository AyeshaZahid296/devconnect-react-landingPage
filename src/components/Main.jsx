import { FaGithub, FaTelegramPlane, FaTwitter, FaEnvelope } from "react-icons/fa";
import CTAButton from "./CTAButton"
import { Component } from "react";
export default function Main() {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center text-white"
        // style={{ backgroundImage: "url('/hero.png')" }}
        >
            {/* Overlay dark gradient */}
            <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center px-8 md:px-20 py-12  z-0"></div>
            <div className="absolute inset-0 bg-black/40 z-0"></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl ">
                {/* Date + Location */}
                <p className="text-lg mb-2 mt-24">17–22 November / Buenos Aires, Argentina</p>

                {/* Hero Title */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide font-['font-Pixel '] drop-shadow-lg">
                    Ethereum is ready <br />
                    for the real world
                </h1>

                {/* Description */}
                <p className="mt-4 max-w-xl text-gray-300 text-lg">
                    Devconnect ARG is a showcase of Ethereum apps and an event to connect,
                    build, and accelerate Ethereum adoption.
                </p>

                {/* CTA Button */}
                <CTAButton />
            </div>
            {/* Logo + Social Icons Row (Bottom) */}
            <div className="absolute bottom-5 left-0 w-full px-8 md:px-20 flex justify-between items-center z-10">
                {/* Left: Logo */}
                <img src="/footer-logo.png" alt="Footer Logo" className="w-20" />

                {/* Right: Social Icons */}
                <div className="flex items-center space-x-4 backdrop-blur-md bg-black/90 rounded-full px-6 py-2 text-sm">
                    <span className="text-white">Follow us</span>
                    <a href="#"><FaTwitter className="text-white hover:text-blue-400" /></a>
                    <a href="#"><FaTelegramPlane className="text-white hover:text-blue-400" /></a>
                    <a href="#"><FaEnvelope className="text-white hover:text-blue-400" /></a>
                    <a href="#"><FaGithub className="text-white hover:text-blue-400" /></a>
                </div>
            </div>

            {/* Scroll to Learn More */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-white opacity-80">
                Scroll to learn more ⌄
            </div>
        </section>
    );
}
