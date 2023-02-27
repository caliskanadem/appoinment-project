import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { appointmentData, doctorData } from "../helper/data";

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [appointments, setAppointments] = useState(appointmentData);
  console.log(setDoctors);

  //! Api den veri cekilseydi boyle yapilacakti
  // const getAppointments =()={
  //   try {
  //     const {data} await axios.get("url")
  //     setAppointments(data)
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }
  // useEffect(()=>{
  //   getAppointments()
  // })

  console.log(appointments);
  console.log(doctors);
  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">GULDEM HOSPITAL</h1>
      <Doctors
        doctors={doctors}
        appointments={appointments}
        setAppointments={setAppointments}
      />
      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </main>
  );
};

export default Home;
