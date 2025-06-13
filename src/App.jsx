import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PhoneTracker from './pages/PhoneTracker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/phone-tracker" element={<PhoneTracker />} />
      </Routes>
    </Router>
  );
}

export default App;