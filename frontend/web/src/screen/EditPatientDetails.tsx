import { Navbar } from "../components/navbar"
import { SideBar } from "../components/sidebar"
import { EditPatientDetail } from "../components/Editpatientform"

export const EditPatientDetailScreen=()=>{

    return <div className="h-screen  flex w-full ">
           
              <SideBar/>

              <div className="h-screen w-full">
          <Navbar/>

           <h1 className="text-3xl font-bold p-6">Good Morning Mr.Vedant Khasbage</h1>

           <div className="w-full mt-4 overflow-y-auto">
         
         <EditPatientDetail/>

           </div>
              </div>

    </div>
}