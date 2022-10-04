import { Routes, Route } from 'react-router';
import './App.css';
import Create from './components/Create';
import LandingPage from './components/LandingPage';
import Event from './components/Event';

import 'react-calendar/dist/Calendar.css';
import { StateContext } from './components/StateContext';


function App() {
  return (
    <StateContext>  
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/event' element={<Event />}></Route>
    </Routes>
    </StateContext>

  );
}

export default App;
