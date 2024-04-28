import React from "react";
import Footer from "../components/UI/Footer";

const Register = () => {
    return (
        <main>
            <div className="flex">
                {/* Login Section */}
                <div className="flex flex-col items-start ml-80 mt-24"> {/* Added mt-8 for top margin */}
                    <h1 className="text-white text-3xl font-titles mb-4">Register</h1>
                    <div className="w-80 flex mb-6"> {/* Adjusted width and added flex class */}
                        <div className="w-1/2 border-2 border-[#e70ce3aa] px-4 py-3 mr-2"> {/* Adjusted width */}
                            <input type="text" placeholder="Name" className="w-full bg-transparent text-white placeholder-white" />
                        </div>
                        <div className="w-1/2 border-2 border-[#e70ce3aa] px-4 py-3"> {/* Adjusted width */}
                            <input type="text" placeholder="Surname" className="w-full bg-transparent text-white placeholder-white" />
                        </div>
                    </div>
                    <div className="w-80 border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
                        <input type="text" placeholder="Email Address" className="w-full bg-transparent text-white placeholder-white" />
                    </div>
                    <div className="w-80 border-2 border-[#e70ce3aa] rounded-md px-4 py-3 mb-6 relative"> {/* Added relative positioning */}
                        <input type="password" placeholder="Password" className="w-full bg-transparent text-white placeholder-white" />
                        <p className="absolute top-full left-0 text-white text-sm">Your password must be at least 8 characters</p> {/* Positioned message */}
                    </div>
                    <div className="flex items-start mb-6"> {/* Adjusted margin */}
                        <button className="w-80 bg-[#e70ce3aa] text-white px-4 py-4 rounded-md mr-4 transition duration-300 hover:bg-[#e70ce3aa]">Continue</button> {/* Adjusted margin */}
                        
                    </div>
                </div>
                {/* Welcome Message Section */}
                <div className="flex items-center justify-center w-1/2 relative"> {/* Added mt-8 for top margin */}
                    <div className="absolute right-0 top-0 bottom-0 bg-purple-600 w-80"></div> {/* Purple rectangle */}
                    <div className="z-10 text-white text-center p-8 w-80"> {/* Message text */}
                        <h2 className="text-3xl font-titles mb-4">Welcome back to Eventopia</h2>
                        <p className="text-lg">Let's have fun together!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Register;
