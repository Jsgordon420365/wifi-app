// ver=20240605144207.1
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import SubmitWiFi from './components/SubmitWiFi';
import PublicWiFi from './components/PublicWiFi';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/submit-wifi" element={<SubmitWiFi />} />
          <Route path="/public-wifi" element={<PublicWiFi />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
