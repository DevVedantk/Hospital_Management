import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SignIn=()=>{
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate=useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Sign Up Form */}
      <div className="w-1/2 p-12 flex items-center">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-2">Enter Your Credentials</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
            >
              Continue
            </button>

            <p className="mt-6 text-center text-gray-600">
              Don't have an account?
              <a onClick={()=>navigate("/signup")}  href="#" className="text-indigo-600 text-blue-400 hover:underline">
                Click Here
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Section - Hero */}
      <div className="w-1/2 relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
          alt="Designer working"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-12 text-white">
          <h2 className="text-5xl font-bold mb-4 leading-tight">
            Connecting Designers with Opportunities
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Bloop is the home of makers, making amazing things, and getting paid. Find your dream job with us.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?img=${i}`}
                  alt={`User ${i}`}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="font-semibold text-xl">5.0</span>
            </div>
            <p className="text-gray-300">from over 100,000 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}