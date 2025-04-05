import { User, Calendar, Phone, Mail, MapPin, Heart, Activity, Edit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export const ViewPatientDetail=()=>{

    const navigate=useNavigate();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Patient Information</h2>
        <button onClick={()=>navigate("/EditPatient-detail")}
          className="flex cursor-pointer mb-2 items-center gap-2 px-4 py-2 bg-white rounded-xl font-medium text-blue-600 shadow-sm hover:shadow-md transition-all duration-200 border border-blue-100 hover:border-blue-200 focus:ring-2 focus:ring-blue-500/20"
        >
          <Edit className="h-4 w-4" />
          Edit Details
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/50 rounded-xl p-4 shadow-sm border border-white/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <User className="text-blue-500 h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium text-gray-900">vedant khasbage</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-50 rounded-lg">
                <User className="text-purple-500 h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Gender</p>
                <p className="font-medium text-gray-900 capitalize">mael</p>
              </div>
            </div>
          </div>

          <div className="bg-white/50 rounded-xl p-4 shadow-sm border border-white/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-50 rounded-lg">
                <Calendar className="text-green-500 h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-medium text-gray-900">18/04./2005</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-50 rounded-lg">
                <Calendar className="text-yellow-500 h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Age</p>
                <p className="font-medium text-gray-900">19 years</p>
              </div>
            </div>
          </div>

          <div className="bg-white/50 rounded-xl p-4 shadow-sm border border-white/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <Phone className="text-indigo-500 h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-medium text-gray-900">9999999</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-pink-50 rounded-lg">
                <Mail className="text-pink-500 h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/50 rounded-xl p-4 shadow-sm border border-white/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 rounded-lg">
                <Heart className="text-red-500 h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Blood Group</p>
                <p className="font-medium text-gray-900">o+</p>
              </div>
            </div>
          </div>

          <div className="bg-white/50 rounded-xl p-4 shadow-sm border border-white/50">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-teal-50 rounded-lg">
                <MapPin className="text-teal-500 h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium text-gray-900 mt-1">nagfnnnnnnnnnnnnnnnnnnnff</p>
              </div>
            </div>
          </div>

          <div className="bg-white/50 rounded-xl p-4 shadow-sm border border-white/50">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 bg-orange-50 rounded-lg">
                <Activity className="text-orange-500 h-5 w-5" />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}