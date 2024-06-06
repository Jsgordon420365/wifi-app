// ver=20240605144207.1
import React, { useState } from 'react';
import axios from 'axios';

const SubmitWiFi = () => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [range, setRange] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('/wifi/submit', { ssid, password, location, range, isPublic }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="SSID" value={ssid} onChange={(e) => setSsid(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <input type="text" placeholder="Range" value={range} onChange={(e) => setRange(e.target.value)} required />
      <label>
        <input type="checkbox" checked={isPublic} onChange={(e) => setIsPublic(e.target.checked)} />
        Public WiFi
      </label>
      <button type="submit">Submit WiFi</button>
    </form>
  );
};

export default SubmitWiFi;
