// SignIn.jsx
import React, { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-darkGray">
      {/* Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave Layer 1 */}
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-auto opacity-60">
          <path
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="1.5"
            d="M0,96L60,112C120,128,240,160,360,176C480,192,600,192,720,160C840,128,960,64,1080,80C1200,96,1320,192,1380,240L1440,320"
          />
          <defs>
            <linearGradient id="gradient1" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#77d977" />
              <stop offset="100%" stopColor="#1e1e2f" />
            </linearGradient>
          </defs>
        </svg>

        {/* Wave Layer 2 */}
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-auto opacity-50">
          <path
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="1.2"
            d="M0,160L60,176C120,192,240,224,360,224C480,224,600,192,720,160C840,128,960,96,1080,128C1200,160,1320,256,1380,288L1440,320"
          />
          <defs>
            <linearGradient id="gradient2" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#6ec16e" />
              <stop offset="100%" stopColor="#2e2e3f" />
            </linearGradient>
          </defs>
        </svg>

        {/* Wave Layer 3 */}
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-auto opacity-40">
          <path
            fill="none"
            stroke="url(#gradient3)"
            strokeWidth="1"
            d="M0,192L60,208C120,224,240,256,360,256C480,256,600,224,720,192C840,160,960,128,1080,160C1200,192,1320,288,1380,320L1440,320"
          />
          <defs>
            <linearGradient id="gradient3" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#5baa5b" />
              <stop offset="100%" stopColor="#3f3f4f" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Sign-In Card */}
      <div className="relative w-full max-w-md p-8 bg-gray-800 rounded-md shadow-md z-10">
        {/* Logo */}
        <h1 className="text-center mb-8 text-white font-bold text-2xl">
          BOOST <span className="text-primaryGreen">ontime</span>
        </h1>

        {/* Sign In Form */}
        <h2 className="mb-6 text-xl font-semibold text-center text-white">Sign In</h2>
        <p className="mb-6 text-sm text-center text-gray-400">Enter your credential to get started.</p>

        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="e.g. olivia@email.com"
              className="w-full px-4 py-2 mt-2 text-sm text-white placeholder-gray-400 bg-gray-700 border rounded-md focus:outline-none focus:ring-primaryGreen focus:ring-1"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="block text-sm text-gray-400">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Type password"
              className="w-full px-4 py-2 mt-2 text-sm text-white placeholder-gray-400 bg-gray-700 border rounded-md focus:outline-none focus:ring-primaryGreen focus:ring-1"
            />
            <button type="button" className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white" onClick={togglePasswordVisibility}>
              <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
            </button>
          </div>

          {/* Sign In Button */}
          <button type="submit" className="w-full px-4 py-2 font-semibold text-white bg-primaryGreen rounded-md hover:bg-primaryGreenHover">
            Sign In
          </button>
        </form>

        {/* Forgot Password */}
        <div className="mt-4 text-sm text-center text-gray-400">
          <a href="#" className="text-primaryGreen hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <a href="#" className="text-primaryGreen hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
