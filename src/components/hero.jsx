export default function Hero() {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center text-white"
            style={{ backgroundImage: "url('/hero.png')" }}
        >
            {/* Overlay dark gradient */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 max-w-6xl">
                {/* Date + Location */}
                <p className="text-lg mb-2">17–22 November / Buenos Aires, Argentina</p>

                {/* Hero Title */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide font-['PixelifySans'] drop-shadow-lg">
                    Ethereum is ready <br />
                    for the real world
                </h1>

                {/* Description */}
                <p className="mt-4 max-w-xl text-gray-300 text-lg">
                    Devconnect ARG is a showcase of Ethereum apps and an event to connect,
                    build, and accelerate Ethereum adoption.
                </p>

                {/* CTA Button */}
                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow">
                    GET MY TICKET →
                </button>
            </div>

            {/* Scroll to Learn More */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-white opacity-80">
                Scroll to learn more ⌄
            </div>
        </section>
    );
}
