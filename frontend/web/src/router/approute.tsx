import { Route, Routes } from "react-router-dom"
import { SignUp } from "../screen/signup"
import { SignIn } from "../screen/signin"
import { Home } from "../screen/home"
import { DashBoard } from "../screen/dashboard"
import { PatientDetail } from "../screen/patientdetails"
import { EditPatientDetailScreen } from "../screen/EditPatientDetails"
import { BookAppointment } from "../screen/BookAppointment"
import { PatientHistory } from "../screen/patientHistory"
import { BedBooking } from "../screen/bedbooking"
import { OTPVerify } from "../screen/OtpVerfiy"

export const AppRoute=()=>{

    return <div>
        <Routes>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/signin" element={<SignIn/>}/>
       <Route path="/" element={<Home/>}/>
       <Route path="/Patient-detail" element={<PatientDetail/>}/>
       <Route path="/EditPatient-detail" element={<EditPatientDetailScreen/>}/>
       <Route path="/Book-appointment" element={<BookAppointment/>}/>
       <Route path="/Patient-history" element={<PatientHistory/>}/>
       <Route path="/test-result" element={<BookAppointment/>}/>
       <Route path="/bed-booking" element={<BedBooking/>}/>
       <Route path="/opt-verify" element={<OTPVerify/>}/>
        </Routes>
    </div>
}