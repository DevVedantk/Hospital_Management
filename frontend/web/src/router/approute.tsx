import { Route, Routes } from "react-router-dom"
import { SignUp } from "../screen/signup"
import { SignIn } from "../screen/signin"
import { Home } from "../screen/home"
import { DashBoard } from "../screen/dashboard"
import { PatientDetail } from "../screen/patientdetails"
import { EditPatientDetailScreen } from "../screen/EditPatientDetails"

export const AppRoute=()=>{

    return <div>
        <Routes>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/signin" element={<SignIn/>}/>
       <Route path="/" element={<Home/>}/>
       <Route path="/dashboard" element={<DashBoard/>}/>
       <Route path="/Patient-detail" element={<PatientDetail/>}/>
       <Route path="/EditPatient-detail" element={<EditPatientDetailScreen/>}/>
       <Route path="/Book-appointment" element={<EditPatientDetailScreen/>}/>

        </Routes>
    </div>
}