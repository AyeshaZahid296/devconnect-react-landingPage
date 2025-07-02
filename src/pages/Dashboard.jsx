import React from "react";
import Sidebar from "../components/Sidebar";
import ProjectCard from "../components/ProjectCard";
import BidCard from "../components/BidCard";

export default function Dashboard() {
    return (
        <div className="min-h-screen flex bg-gradient-to-br from-pink-100 via-pink-50 to-white">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6 md:p-10">
                <h1 className="text-3xl font-bold text-blue-800 mb-6">Dashboard</h1>

                {/* Section: Active Projects */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Active Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProjectCard
                            image="/pro1.avif"
                            title="FYP Management System"
                            task="Phase 1"
                            startDate="2025-07-01"
                            endDate="2025-07-15"
                            description="Build the core modules: login, group creation, and supervisor allocation."
                        />
                        <ProjectCard
                            image="/pro2.png"
                            title="DevConnect App"
                            task="UI Implementation"
                            startDate="2025-07-03"
                            endDate="2025-07-20"
                            description="Work on the frontend components and design integration."
                        />
                        <ProjectCard
                            image="/pro3.png"
                            title="NFT Marketplace"
                            task="Smart Contract Logic"
                            startDate="2025-07-05"
                            endDate="2025-07-25"
                            description="Develop and test Ethereum smart contracts for NFT trading."
                        />
                    </div>
                </section>

                {/* Section: Recent Bids */}
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Bids</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <BidCard
                            bidder="Alice Johnson"
                            amount={500}
                            date="2025-07-01"
                            message="I'd like to take the frontend part of your project. React and Tailwind expert!"
                        />
                        <BidCard
                            bidder="Bob Khan"
                            amount={700}
                            date="2025-07-02"
                            message="Can deliver the smart contract system in a week. Solidity + Hardhat experience."
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}





