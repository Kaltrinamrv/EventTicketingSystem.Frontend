
import Footer from "../components/UI/Footer";
import React, { useState } from "react";


const Register = () => {
    return (
        <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"> {/* Adjusted maximum width */}
            <div className="flex flex-col sm:flex-row"> {/* Adjust layout for small screens */}
                {/* Login Section */}
                <div className="flex flex-col items-center sm:items-start sm:ml-8 mt-8 sm:mt-24 w-full sm:w-1/2"> {/* Center items on small screens */}
                    <h1 className="text-white text-3xl font-titles mb-4">Register</h1>
                    <div className="w-full sm:w-80 flex flex-col sm:flex-row mb-6"> {/* Adjusted width and added flex class */}
                        <div className="w-full sm:w-1/2 border-2 border-[#e70ce3aa] px-4 py-3 mb-2 sm:mr-2 sm:mb-0"> {/* Adjusted width */}
                            <input type="text" placeholder="Name" className="w-full bg-transparent text-white placeholder-white" />
                        </div>
                        <div className="w-full sm:w-1/2 border-2 border-[#e70ce3aa] px-4 py-3 mb-2 sm:ml-2 sm:mb-0"> {/* Adjusted width */}
                            <input type="text" placeholder="Surname" className="w-full bg-transparent text-white placeholder-white" />
                        </div>
                    </div>
                    <div className="w-full sm:w-80 border-2 border-[#e70ce3aa] px-4 py-3 mb-6"> {/* Adjusted width */}
                        <input type="text" placeholder="Email Address" className="w-full bg-transparent text-white placeholder-white" />
                    </div>
                    <div className="w-full sm:w-80 border-2 border-[#e70ce3aa] rounded-md px-4 py-3 mb-6">
                        <input type="password" placeholder="Password" className="w-full bg-transparent text-white placeholder-white" />
                    </div>
                    <div className="flex items-start justify-center mb-6"> {/* Adjusted margin and added justify-center */}
                        <button className="w-full sm:w-80 bg-[#e70ce3aa] text-white px-4 py-4 rounded-md mr-4 sm:mr-0 transition duration-300 hover:bg-gradient-to-br from-blue-600  to-fuchsia-600">Continue</button> {/* Adjusted margin */}
                    </div>
                </div>
                {/* Welcome Message Section */}
                <div className="hidden sm:flex items-center justify-center w-full sm:w-1/2 relative mt-8"> {/* Added mt-8 for top margin */}
                    <div className="absolute right-0 top-0 bottom-0  bg-gradient-to-br from-blue-600  to-fuchsia-600 w-full flex items-center justify-center"> {/* Adjusted width and added flex properties */}
                        <div className="z-10 text-white text-center p-8"> {/* Adjusted padding */}
                            <h2 className="text-3xl font-titles mb-4">Welcome back to Eventopia</h2>
                            <p className="text-lg">Let's have fun together!</p>
                        </div>
                    </div> {/* Purple rectangle */}
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Register;
