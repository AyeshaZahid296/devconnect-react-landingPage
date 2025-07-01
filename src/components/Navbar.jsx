export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-20 px-8 md:px-20 py-6 text-white">
            <div className="flex justify-between items-center">
                {/* Left Side: Logo */}
                <img src="/navbar-logo.png" alt="Navbar Logo" className="w-32" />

                {/* Right Side: Nav Links */}
                <ul className="flex space-x-6 text-sm font-medium items-center backdrop-blur-md bg-black/30 rounded-full px-6 py-2">
                    <li><a href="#" className="hover:text-gray-200">About</a></li>
                    <li><a href="#" className="hover:text-gray-200">Tickets ↗</a></li>
                    <li><a href="#" className="hover:text-gray-200">Calendar</a></li>
                    <li>
                        <a
                            href="#"
                            className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500 font-semibold"
                        >
                            Destino Devconnect
                        </a>
                    </li>
                    <li>
                        <button className="text-xs bg-white text-black px-3 py-1 rounded">ENG</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
