import { Link, useNavigate } from "react-router-dom"

export const Navbar=()=>{
    const navigate=useNavigate();

    return <div className="h-14 shadow-sm backdrop-blur-md w-full flex justify-end">
        <div className="list-none text-sm justify-center items-center flex gap-16 mr-32">
                <li onClick={()=> navigate("/")} className="font-semibold cursor-pointer"><Link to="/"/>HOME</li>
                <li onClick={()=> navigate("/about")} className="font-semibold cursor-pointer"><Link to="/about"/>ABOUT</li>
                <li onClick={()=> navigate("/logout")} className="font-semibold cursor-pointer"><Link to="/about"/>LOGOUT</li>
             </div>
    </div>
}