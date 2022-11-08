import { Route, Routes } from 'react-router-dom';
import './App.css';
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

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/viewprofile/:id' element={<ViewProfile />}></Route>
        <Route path='/offlineappointment/:id' element={<RequireAuth>
          <OfflineAppointment />
        </RequireAuth>}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
