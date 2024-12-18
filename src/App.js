import React, { useState } from "react";
import AstrologyForm from "./Component/Form/Form";
import "./App.css"

function App() {
  const [astrologyData, setAstrologyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAstrologyData = async (userDetails) => {
    setLoading(true);
    setError("");
    setAstrologyData(null);

    const { name, dateOfBirth, timeOfBirth, location, gender } = userDetails;

    // Construct API parameters
    const apiUrl = `https://vedastroapi.azurewebsites.net/api/Calculate?name=${name}&date=${dateOfBirth}&time=${timeOfBirth}&location=${location}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch astrology data");
      }
      const data = await response.json();
      setAstrologyData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Astrology App</h1>
      <AstrologyForm />
    </div>
  );
}

export default App;