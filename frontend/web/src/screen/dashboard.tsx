import { Navbar } from '../components/navbar';
import { PFeatureCard } from '../components/patientfeatureCard';
import { SideBar } from '../components/sidebar';

export const DashBoard=()=>{

  return (
    <div className="h-screen w-full flex bg-gray-50">
      
       <SideBar/>
         
         <div className='h-screen w-full'>

       <Navbar/>

       <h1 className="text-3xl font-bold p-6">Good Morning Mr.Vedant Khasbage</h1>

       <div className='flex flex-wrap items-center'>
       <PFeatureCard/>
       <PFeatureCard/>
       <PFeatureCard/>
         </div>
       </div>
       
    </div>
  );
}