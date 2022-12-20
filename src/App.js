import { Link, Route, Routes } from 'react-router-dom';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Dragons from './pages/Dragons';
import logo from './assets/planet-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo-img" />
      <h1>Space Travelers Hub</h1>
      <nav>
        <Link to="/">Rockets</Link>
        <Link to="/Missions">Missions</Link>
        <Link to="/Dragons">Dragons</Link>
      </nav>
      <Routes>
        <Route index element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Dragons" element={<Dragons />} />
      </Routes>
    </div>
  );
}

export default App;
