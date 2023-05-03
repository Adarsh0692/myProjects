import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Classes from './pages/program/Program';
import Login from './pages/login/Login';
import Registation from './pages/registration/Registration';
import Training from './pages/training/Training';
import Pricing from './pages/pricing/Pricing';
import AboutUs from './pages/about/AboutUs';
import LoginProtectsRoutes from './private/LoginProtectsRoutes';
import WeekendPass from './service/subscription/WeekendPass';
import MonthlyPass from './service/subscription/MonthlyPass';
import YearlyPass from './service/subscription/YearlyPass';
import WeekendPassProtect from './private/subscription/WeekendPassProtect';
import MonthlyPassProtect from './private/subscription/MonthlyPassProtect';
import YearlyPassProtect from './private/subscription/YearlyPassProtect';



function App() {
  return (
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aboutUs' element={<AboutUs/>} />
      <Route path='/programs' element={<Classes/>} />
      <Route path='/training' element={<Training/>} />
      <Route path='/pricing' element={<Pricing/>} />
     

      {/* Protecting Routing for Login =>> */}

      <Route path='/registration' element={<LoginProtectsRoutes/>}>
      <Route path='/registration' element={<Registation/>} />
      </Route>
      
      <Route path='/login' element={<LoginProtectsRoutes/>}>
      <Route path='/login' element={<Login/>} />
      </Route>

       <Route path='/weekend' element={<WeekendPassProtect/>}>
       <Route path='/weekend' element={<WeekendPass/>} />
       </Route>

       <Route path='/monthly' element={<MonthlyPassProtect/>}>
       <Route path='/monthly' element={<MonthlyPass/>} />
       </Route>

       <Route path='/yearly' element={<YearlyPassProtect/>}>
       <Route path='/yearly' element={<YearlyPass/>} />
       </Route>
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;