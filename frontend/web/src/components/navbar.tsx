import { useNavigate } from "react-router-dom"
import { Heart, Menu, ChevronDown } from 'lucide-react';

export const Navbar=()=>{
    const navigate=useNavigate();

    return   <nav className="px-6 py-4 md:px-12 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Heart className="w-8 h-8 text-purple-600" />
      <span className="text-lg font-medium">Medicare</span>
    </div>
    
    <div className="hidden md:flex items-center gap-8">
      <a  onClick={()=>navigate("/")} className="text-sm cursor-pointer text-gray-700 hover:text-purple-600">Home</a>
      <a onClick={()=>navigate("/About")}  className="text-sm cursor-pointer text-gray-700 hover:text-purple-600">About</a>
      <a href="#" className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer">LogOut</a>
    </div>

    <div className="hidden md:flex items-center gap-4">
      <button  onClick={()=>navigate("/Patient-detail")}className="text-sm  cursor-pointer px-4 py-2 text-gray-700 hover:text-purple-600">
      DashBoard
      </button>
      <button className="text-sm px-6 py-2.5  cursor-pointer bg-black text-white rounded-full hover:bg-gray-800 flex items-center gap-2">
        Contact Us
        <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
      </button>
    </div>

    <button className="md:hidden">
      <Menu className="w-6 h-6" />
    </button>
  </nav>
}