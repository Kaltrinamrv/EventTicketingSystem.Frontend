import React from "react";
import Footer from "../components/UI/Footer";

const Login = () => {
    return (
        <main>
            <div className="flex">
                {/* Login Section */}
                <div className="flex flex-col items-start ml-80 mt-24"> {/* Added mt-8 for top margin */}
                    <h1 className="text-white text-3xl font-titles mb-4">Log In</h1>
                    <div className="w-80 border-2 border-[#e70ce3aa] px-4 py-3 mb-6">
                        <input type="text" placeholder="Email Address" className="w-full bg-transparent text-white placeholder-white" />
                    </div>
                    <div className="w-80 border-2 border-[#e70ce3aa] rounded-md px-4 py-3 mb-6">
                        <input type="password" placeholder="Password" className="w-full bg-transparent text-white placeholder-white" />
                    </div>
                    <div className="flex items-start mb-2">
                        <p className="text-white text-sm mr-2">Forgot your password?</p>
                    </div>
                    <button className="w-80 bg-[#e70ce3aa] text-white px-4 py-2 rounded-md mb-4 transition duration-300 hover:bg-[#e70ce3aa]">Continue</button>
                    <p className="text-white font-titles ml-32 mb-2">or</p>
                    <p className="text-white font-titles cursor-pointer hover:underline hover:text-secondary ml-28 mb-8">Register</p>
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

export default Login;
