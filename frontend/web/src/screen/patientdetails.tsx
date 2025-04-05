import { Navbar } from "../components/navbar"
import { SideBar } from "../components/sidebar"
import { ViewPatientDetail } from "../components/viewpatientdetail"

export const PatientDetail=()=>{

    return <div className="h-screen overflow-hidden  flex w-full ">
           
              <SideBar/>

              <div className="h-screen w-full">
          <Navbar/>

           <h1 className="text-3xl font-bold p-6">Good Morning Mr.Vedant Khasbage</h1>

           <div className="w-full mt-8">
              <ViewPatientDetail/>

           </div>
              </div>

    </div>
}