import { Users, BarChart3, Calendar, BedDouble, Activity, FileText, FlaskRound as Flask } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

export const SideBar=()=>{
  
  const navigate=useNavigate();

  return (
    <div className="min-h-screen flex bg-gray-50 sticky">
      <div className="w-64 h-full min-h-screen bg-white border-r shadow-sm">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8">
            <Activity className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Hospital Management</span>
          </div>
          <nav className="space-y-2">
            <button onClick={()=>navigate("/dashboard")}
             
              className={"w-full cursor-pointer flex items-center gap-3 px-4 py-2 text-sm rounded-lg"}
            >
              <BarChart3 className="h-5 w-5" />
              Dashboard
            </button>
            <button 
              onClick={()=>navigate("/Patient-detail")}
              className={"w-full cursor-pointer flex items-center gap-3 px-4 py-2 text-sm rounded-lg"
               }
            >
              <Users className="h-5 w-5" />
             Your Details
            </button>
            <button
              
              className={"w-full cursor-pointer flex items-center gap-3 px-4 py-2 text-sm rounded-lg"}
            >
              <FileText className="h-5 w-5" />
             History
            </button>
            <button
              className={"w-full cursor-pointer flex items-center gap-3 px-4 py-2 text-sm rounded-lg"}
            >
              <Flask className="h-5 w-5" />
              Test Results
            </button>
            <button
            
              className={"w-full cursor-pointer flex items-center gap-3 px-4 py-2 text-sm rounded-lg "}
            >
              <Calendar className="h-5 w-5" />
             Book Appointment
            </button>
            <button
             
              className={"w-full cursor-pointer flex items-center gap-3 px-4 py-2 text-sm rounded-lg"}
            >
              <BedDouble className="h-5 w-5" />
              Bed Management
            </button>
          </nav>
        </div>
      </div>
       
    </div>
  );
}