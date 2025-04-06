import { useState } from "react";
import { Navbar } from "../components/navbar"
import { SideBar } from "../components/sidebar"
import { Calendar, Clock, Bed, User, Phone, FileText, Check } from 'lucide-react';



interface Room {
  id: number;
  name: string;
  type: string;
  available: boolean;
}


export const BedBooking=()=>{

  const [selectedRoom, setSelectedRoom] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');

  const rooms: Room[] = [
    { id: 1, name: 'Room 101', type: 'Single Bed', available: true },
    { id: 2, name: 'Room 102', type: 'Double Bed', available: true },
    { id: 3, name: 'Room 201', type: 'ICU', available: true },
    { id: 4, name: 'Room 202', type: 'Single Bed', available: false },
    { id: 5, name: 'Room 301', type: 'Double Bed', available: true },
  ];


    return <div className="h-screen flex w-full">
           <SideBar/>

           <div className="h-screen flex flex-col w-full">
           
              <Navbar/>

              <div className="">
              <div className="sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className=" sm:p-10">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">Hospital Bed Booking</h1>
              <p className="mt-2 text-gray-600">Book your hospital stay with ease</p>
            </div>

           
              <div className="">
                <div className="">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <User className="w-4 h-4 mr-2" />
                    Patient Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter patient name"
                    required
                  />
                </div>

                <div className="">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter contact number"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <Bed className="w-4 h-4 mr-2" />
                    Select Room
                  </label>
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a room</option>
                    {rooms.map((room) => (
                      <option key={room.id} value={room.id} disabled={!room.available}>
                        {room.name} - {room.type} {!room.available && '(Not Available)'}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid mb-4 grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <Clock className="w-4 h-4 mr-2" />
                      Check-in Time
                    </label>
                    <input
                      type="time"
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <FileText className="w-4 h-4 mr-2" />
                    Additional Notes
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    placeholder="Any special requirements or medical conditions..."
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  <Check className="w-5 h-5 mr-2" />
                  Confirm Booking
                </button>
              </div>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              By proceeding with the booking, you agree to our terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
               
              </div>
              
           </div>

    </div>

}




