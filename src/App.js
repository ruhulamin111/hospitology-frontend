import { Route, Routes } from 'react-router-dom';
import './App.css';
import OfflineAppointment from './components/OfflineAppointment/OfflineAppointment';
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
        <Route path='/viewprofile' element={<ViewProfile />}></Route>
        <Route path='/offlineappointment' element={<OfflineAppointment />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
