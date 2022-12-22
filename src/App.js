import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getRocketData } from './redux/Rockets/Rockets';
import RocketsContainer from './pages/Rocket/Rockets';
import Missions from './pages/Missions';
import Dragons from './pages/Dragons';
import Profile from './pages/MyProfile';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketData());
  });

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<RocketsContainer />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Dragons" element={<Dragons />} />
        <Route path="/Dragons" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
