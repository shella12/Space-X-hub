import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Dragons from './pages/Dragons';
import Profile from './pages/MyProfile';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Dragons" element={<Dragons />} />
        <Route path="/Dragons" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
