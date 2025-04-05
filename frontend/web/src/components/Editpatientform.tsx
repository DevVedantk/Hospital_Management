import { Calendar, User, Phone, Mail, MapPin, Heart, Activity, Edit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';



export const EditPatientDetail=()=>{

  const navigate=useNavigate();
  return (
    <form  className="p-8">
      <div className='w-full flex justify-end'>
      <button onClick={()=>navigate("/Patient-detail")}
          className="flex cursor-pointer mb-2 items-center gap-2 px-4 py-2 bg-white rounded-xl font-medium text-blue-600 shadow-sm hover:shadow-md transition-all duration-200 border border-blue-100 hover:border-blue-200 focus:ring-2 focus:ring-blue-500/20"
        >
          <Edit className="h-4 w-4" />
          Cancel Edit
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="space-y-6">
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors group-focus-within:text-blue-500" />
              <input
                type="text"
                name="firstName"
                className="pl-10 block w-full rounded-xl border border-gray-200 bg-white/50 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 p-3"
                required
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors group-focus-within:text-blue-500" />
              <input
                type="text"
                name="lastName"
                
                className="pl-10 block w-full rounded-xl border border-gray-200 bg-white/50 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 p-3"
                required
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <select
              name="gender"
             
              className="block w-full rounded-xl border border-gray-200 bg-white/50 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 p-3"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors group-focus-within:text-blue-500" />
              <input
                type="date"
                name="dateOfBirth"
                
                className="pl-10 block w-full rounded-xl border border-gray-200 bg-white/50 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 p-3"
                required
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
            <input
              type="number"
              name="age"
             
              className="block w-full rounded-xl border border-gray-200 bg-white/50 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 p-3"
              required
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors group-focus-within:text-blue-500" />
              <input
                type="tel"
                name="phone"
              
                className="pl-10 block w-full rounded-xl border border-gray-200 bg-white/50 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 p-3"
                required
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors group-focus-within:text-blue-500" />
              <input
                type="email"
                name="email"
               
                className="pl-10 block w-full rounded-xl border border-gray-200 bg-white/50 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 p-3"
                required
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
            <div className="relative">
              <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors group-focus-within:text-blue-500" />
              <select
                name="bloodGroup"
                
                className="pl-10 block w-full rounded-xl border border-gray-200 bg-white/50 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 p-3"
                required
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400 h-5 w-5 transition-colors group-focus-within:text-blue-500" />
              <textarea
                name="address"
               
                rows={3}
                className="pl-10 block w-full rounded-xl border border-gray-200 bg-white/50 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 p-3"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <span className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-gray-400" />
            Medical History
          </span>
        </label>
        <textarea
          name="medicalHistory"
          
          rows={4}
          className="block w-full rounded-xl border border-gray-200 bg-white/50 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 p-3"
          placeholder="Enter any relevant medical history..."
        />
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 active:scale-95"
        >
          Save Patient Information
        </button>
      </div>
    </form>
  );
}