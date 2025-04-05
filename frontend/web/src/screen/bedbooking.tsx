import { Navbar } from "../components/navbar"
import { SideBar } from "../components/sidebar"

export const BedBooking=()=>{


    return <div className="h-screen flex w-full">
           <SideBar/>

           <div className="h-screen flex flex-col w-full">
           
              <Navbar/>
              
           </div>

    </div>

}