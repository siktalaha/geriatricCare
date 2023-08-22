
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import LoginPatient from './pages/LoginPatient';
import RegisterPatient from './pages/RegisterPatient';
import LoginDr from './pages/LoginDr';
import RegisterDr from './pages/RegisterDr';
import LoginHosp from './pages/LoginHosp';
import RegisterHosp from './pages/RegisterHosp';
import PatientDetails from './pages/PatientDetails';

function App() {
  return (
   <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login_pat" element={<LoginPatient />}/>
      <Route path="/register_pat" element={<RegisterPatient />}/>
      <Route path="/login_dr" element={<LoginDr />}/>
      <Route path="/register_dr" element={<RegisterDr  />}/>
      <Route path="/login_hosp" element={<LoginHosp />}/>
      <Route path="/register_hosp" element={<RegisterHosp />}/>
      <Route path="/pat_details" element={<PatientDetails />}/>

     </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
