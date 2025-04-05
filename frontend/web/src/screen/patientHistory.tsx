import { Activity, Stethoscope, Pill, Syringe, FileText, CalendarClock, ChevronRight, Trash2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { SideBar } from '../components/sidebar';
import { Navbar } from '../components/navbar';


export const PatientHistory=()=>{
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<string | null>(null);
  const [patientHistory, setPatientHistory] = useState<any[]>([
    {
      id: '1',
      date: '2024-03-15',
      type: 'checkup',
      title: 'Annual Physical Examination',
      description: 'Regular checkup showed all vital signs normal. Blood pressure: 120/80',
      doctor: 'Dr. Sarah Johnson'
    },
    {
      id: '2',
      date: '2024-02-20',
      type: 'medication',
      title: 'Prescription Update',
      description: 'Changed blood pressure medication to Amlodipine 5mg',
      doctor: 'Dr. Michael Chen'
    },
    {
      id: '3',
      date: '2024-01-10',
      type: 'vaccination',
      title: 'Flu Vaccine',
      description: 'Annual influenza vaccination administered',
      doctor: 'Dr. Emily Wilson'
    },
    {
      id: '4',
      date: '2023-12-15',
      type: 'report',
      title: 'Blood Work Results',
      description: 'Comprehensive metabolic panel within normal ranges',
      doctor: 'Dr. Sarah Johnson'
    }
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'checkup':
        return <Stethoscope className="w-6 h-6 text-blue-500" />;
      case 'medication':
        return <Pill className="w-6 h-6 text-purple-500" />;
      case 'vaccination':
        return <Syringe className="w-6 h-6 text-green-500" />;
      case 'report':
        return <FileText className="w-6 h-6 text-orange-500" />;
      default:
        return <Activity className="w-6 h-6 text-gray-500" />;
    }
  };


  return (
    <div className="min-h-screen flex bg-gray-50">
    
    <SideBar/>
   <div className='flex w-full flex-col'>
   <Navbar/>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    
        <div className="bg-white rounded-xl shadow-md p-6">
          {patientHistory.length === 0 ? (
            <div className="text-center py-12">
              <Activity className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900">No History Available</h3>
              <p className="text-gray-500 mt-2">No medical records have been added yet.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {patientHistory.map((entry, index) => (
                <div key={entry.id} className="relative">
                  {index !== patientHistory.length - 1 && (
                    <div className="absolute left-8 top-12 w-0.5 h-full -ml-px bg-gray-200" />
                  )}
                  
                  <div className="relative flex items-start space-x-4 group">
                    <div className="relative">
                      <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center ring-8 ring-white">
                        {getIcon(entry.type)}
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-4 transition-all duration-200 hover:shadow-md hover:border-blue-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {new Date(entry.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                           
                            className="p-1 hover:bg-red-100 rounded-full transition-colors"
                          >
                            <Trash2 className="w-5 h-5 text-red-500" />
                          </button>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        </div>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-gray-900">{entry.title}</h3>
                      <p className="mt-1 text-gray-600">{entry.description}</p>
                      {entry.doctor && (
                        <p className="mt-2 text-sm text-gray-500">
                          Attending Physician: {entry.doctor}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      </div>
    </div>
  );
}
