// ver=20240605144207.1
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PublicWiFi = () => {
  const [publicWiFiNetworks, setPublicWiFiNetworks] = useState([]);

  useEffect(() => {
    const fetchPublicWiFiNetworks = async () => {
      const response = await axios.get('/wifi/public');
      setPublicWiFiNetworks(response.data);
    };

    fetchPublicWiFiNetworks();
  }, []);

  return (
    <div>
      <h1>Public WiFi Networks</h1>
      <ul>
        {publicWiFiNetworks.map((network) => (
          <li key={network._id}>
            <strong>SSID:</strong> {network.ssid} <br />
            <strong>Location:</strong> {network.location} <br />
            <strong>Range:</strong> {network.range} meters
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublicWiFi;
