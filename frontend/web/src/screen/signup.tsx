import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRef } from 'react';

export const SignUp=()=>{
  const emailRef=useRef<HTMLInputElement>(null);
  const passwordRef=useRef<HTMLInputElement>(null);
  const confirmPassRef=useRef<HTMLInputElement>(null);

  const handlesignup=async()=>{
    console.log("inside fn")
      if(emailRef.current?.value==="" || passwordRef.current?.value==="" || confirmPassRef.current?.value===""){
        alert("Enter Complete Details");
        return;
      }    
    const resp=await axios.post("http://localhost:3000/patient/signup",{
        email:emailRef.current?.value,
        password:passwordRef.current?.value
      },{withCredentials:true})

      if(resp.data.message==="Email_exists"){
        alert("Email Already Present")
        return;
      }

      navigate("/opt-verify",{state:{email:emailRef.current?.value}}
      )
      console.log(resp);

  }

  const navigate=useNavigate();

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Sign Up Form */}
      <div className="w-1/2 p-12 flex items-center">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-2">Create Your account</h1>
          
            <div className="mb-6">
              <label className="block mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                 ref={emailRef}
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
                ref={passwordRef}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Again Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ref={confirmPassRef}
                required
              />
            </div>


            <div className="mb-6 flex flex-col">
               <div className='flex'> <h1>Select Your Role</h1><span className="text-red-500">*</span></div>
             <select className='border-1 border-gray-400' name="patient" id="">
    <option value="staff">Staff</option>
    <option value="patient">Patient</option>
    <option value="admin">Admin</option>
             </select>
             

            </div>

            <button     onClick={handlesignup}          type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
            >
              Sign up
            </button>

            <p className="mt-6 text-center text-gray-600">
              Already have an account? 
              <a onClick={()=>navigate("/signin")} className="text-indigo-600 cursor-pointer hover:underline">
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