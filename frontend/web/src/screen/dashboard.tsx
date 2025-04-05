import { Navbar } from '../components/navbar';
import { PFeatureCard } from '../components/patientfeatureCard';
import { SideBar } from '../components/sidebar';

export const DashBoard=()=>{

  return (
    <div className="h-screen w-full flex bg-gray-50">
      
       <SideBar/>
         
         <div className='h-screen w-full'>

       <Navbar/>

       <div className='flex flex-wrap items-center'>
       <PFeatureCard/>
       <PFeatureCard/>
       <PFeatureCard/>
         </div>
       </div>
       
    </div>
  );
}