import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import OfflineAppointment from './components/OfflineAppointment/OfflineAppointment';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import ViewProfile from './components/ViewProfile/ViewProfile';
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard';
import ListAppointment from './components/ListAppointment/ListAppointment';
import Payment from './components/Payment/Payment';
import Department from './components/Department/Department';
import Branch from './components/Branch/Branch';
import PatientCare from './components/PatientCare/PatientCare';
import Hospital from './components/Hospital/Hospital';
import Dental from './components/Dental/Dental';
import Diagonistic from './components/Diagonistic/Diagonistic';
import WhatsApp from './components/WhatsApp/WhatsApp';
import AllPatient from './components/AllPatient/AllPatient';
import RequireAdmin from './components/RequireAdmin/RequireAdmin';



function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/department' element={<Department />}></Route>
        <Route path='/branch' element={<Branch />}></Route>
        <Route path='/patient' element={<PatientCare />}></Route>
        <Route path='/hospital' element={<Hospital />}></Route>
        <Route path='/dental' element={<Dental />}></Route>
        <Route path='/diagonistic' element={<Diagonistic />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/viewprofile/:id' element={<ViewProfile />}></Route>

        <Route path='/offlineappointment/:id' element={<RequireAuth>
          <OfflineAppointment /></RequireAuth>}>
        </Route>

        <Route path='/dashboard' element={<RequireAuth> <Dashboard /> </RequireAuth>}>
          <Route index element={<ListAppointment />}></Route>
          <Route path='listappointment' element={<ListAppointment />}></Route>
          <Route path='payment' element={<Payment />}></Route>
          <Route path='allpatient' element={<RequireAdmin> <AllPatient /></RequireAdmin>}></Route>
        </Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <WhatsApp />
      <ToastContainer />
    </div>
  );
}

export default App;
