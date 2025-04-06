import  { useRef } from 'react';
import { Star } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const OTPVerify=()=>{
    const otpref=useRef<HTMLInputElement>(null);
    const location = useLocation();
    const email = location.state?.email || ""; 
    console.log("this is email from location",email);
 
  const navigate=useNavigate();

  const handleOTP=async()=>{
  const resp=await axios.post("http://localhost:3000/patient/verifyotp",{
        otp:otpref.current?.value,
        email:email
    },{withCredentials:true})
   console.log(resp);  
   if(resp.data.message==='Verified!!'){
    navigate("/");
   } else {
    alert("Something went wrong!!!")
   }

}

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Sign Up Form */}
      
      <div className="w-1/2 p-12 flex items-center">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-2">Verify Your OTP</h1>
          
        
            <div className="mb-6">
              <label className="block mb-2">
                OTP<span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Enter your Otp"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ref={otpref}
                required
              />
            </div>


            <button onClick={handleOTP}
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
            >
              Verify
            </button>

            <p className="mt-6 text-center text-gray-600">
              Don't have an account?
              <a onClick={()=>navigate("/signup")}  href="#" className="text-indigo-600 text-blue-400 hover:underline">
                Click Here
              </a>
            </p>
         
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