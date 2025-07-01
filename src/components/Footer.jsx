import { FaGithub, FaTelegramPlane, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            {/* Background image section */}
            <div className="bg-[url('/footer-bg.png')] bg-cover bg-center px-6 py-16">
                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between gap-16">

                    {/* Left Side: Logo and Links */}
                    <div className="space-y-6 text-sm max-w-sm">
                        {/* Logo */}
                        <img src="/footer-logo.png" alt="Footer Logo" className="w-22" />

                        {/* Links */}
                        <ul className="space-y-1">
                            <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Tickets ↗</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Calendar</a></li>
                            <li>
                                <a
                                    href="#"
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-green-400 to-yellow-400 font-semibold"
                                >
                                    Destino Devconnect
                                </a>
                            </li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Past Events ▾</a></li>
                        </ul>

                        {/* Language Selector */}
                        <div>
                            <span className="text-gray-400">🌐 English</span>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-4 text-xl text-gray-400">
                            <a href="#"><FaTwitter className="hover:text-white" /></a>
                            <a href="#"><FaTelegramPlane className="hover:text-white" /></a>
                            <a href="#"><FaEnvelope className="hover:text-white" /></a>
                            <a href="#"><FaGithub className="hover:text-white" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Info Section: Left and Right Aligned */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full mt-auto pt-10 border-t border-gray-700 gap-6 text-sm text-gray-400  px-6 py-16 pl-6">

                {/* Left side: Text content */}
                <div>
                    <p>Crafted and curated with passion ❤️ ✨ at the Ethereum Foundation.</p>
                    <p className="mt-2">© 2025 — Ethereum Foundation. All Rights Reserved.</p>
                </div>

                {/* Right side: Footer links */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 justify-start lg:justify-end text-sm">
                    <a href="#" className="hover:text-white">DEVCON</a>
                    <a href="#" className="hover:text-white">CONTACT US</a>
                    <a href="#" className="hover:text-white">ETHEREUM FOUNDATION</a>
                    <a href="#" className="hover:text-white">CODE OF CONDUCT</a>
                    <a href="#" className="hover:text-white">PRIVACY POLICY</a>
                    <a href="#" className="hover:text-white">TERMS OF USE</a>
                    <a href="#" className="hover:text-white">COOKIE POLICY</a>
                </div>
            </div>

        </footer>
    );
}
