import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Support() {
    return (
        <div>
            <Navbar />
            <div className="  py-25 max-w-7xl mx-auto px-4 md:px-2 ">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">CONTRIBUTE AND SUPPORT</h2>
                <p className="text-gray-700 max-w-4xl mb-10">
                    The Ethereum World’s Fair shows what Ethereum can do through real apps, infrastructure,
                    community, and local momentum. It only works when builders ship, communities show up and connect,
                    and supporters help bring it all together.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card
                        icon="/supportcard1.png"
                        title="Become a Supporter"
                        description="Supporters help make the week possible. Get a space and the option to showcase your app, plus flexibility to choose add-ons that match your goals."
                        actionText="APPLY HERE"
                        actionLink="#"
                        colorClass="bg-purple-100 border-purple-300"
                        bottomBarColor="bg-purple-400"
                    />

                    <Card
                        icon="/supportcard2.png"
                        title="Volunteer"
                        description="Help make Devconnect run smoothly. Support attendees, assist with logistics, and get a behind-the-scenes look at the Ethereum World’s Fair."
                        actionText="APPLICATIONS OPEN SOON"
                        isDisabled={true}
                        colorClass="bg-pink-100 border-pink-300"
                        bottomBarColor="bg-pink-400"
                    />

                    <Card
                        icon="/supportcard3.png"
                        title="Cover the event"
                        description="Press and content creators can apply for a limited number of media passes. Access includes media zones, updates, and opportunities for interviews."
                        actionText="APPLY HERE"
                        actionLink="#"
                        colorClass="bg-indigo-50 border-indigo-200"
                        bottomBarColor="bg-indigo-300"
                    />

                    <Card
                        icon="/supportcard4.png"
                        title="Host a community event"
                        description="Organize your Devconnect side event in Buenos Aires, and add your event to the community calendar."
                        actionText="ADD YOUR EVENT HERE"
                        actionLink="#"
                        colorClass="bg-orange-50 border-orange-300"
                        bottomBarColor="bg-orange-300"
                    />
                </div>
            </div>
        </div>
    );
}
