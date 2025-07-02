import Navbar from "../components/Navbar";
import GetStartedCard from "../components/GetStartedCard";

export default function GetStarted() {
    return (
        <div>
            <Navbar />
            {/* Pink gradient background */}
            <div className="px-4 md:px-10 py-14 min-h-screen bg-gradient-to-br mask-b-from-blue-300 via-blue-200 mask-b-to-blue-950">
                <div className="max-w-7xl mx-auto">
                    {/* Heading */}
                    <h1 className="text-4xl font-bold text-blue-800 mb-4">Get Started</h1>
                    <p className="text-gray-700 mb-10 max-w-2xl">
                        Choose your path and start exploring what's possible with Ethereum.
                    </p>

                    {/* Two big cards */}
                    <div className="flex flex-col gap-8">
                        <GetStartedCard
                            image="/developer.jpg"
                            title="I'm a Developer"
                            label="Included in ticket"
                            redirectTo="/login/developer"
                        />

                        <GetStartedCard
                            image="/user.webp"
                            title="I'm a User"
                            label="Included in ticket"
                            redirectTo="/login/user"
                        />

                    </div>

                </div>
            </div>
        </div>
    );
}
