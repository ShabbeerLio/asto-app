import React, { useEffect, useState } from "react";
import "./Form.css";
import Loader from "../Loader/Loader";
import Table from "../Table/Table";
import Charts from "../Charts/Charts";

const HoroscopeLLMForm = () => {
  const [location, setLocation] = useState("NewDelhi,Delhi,India");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("00:00");
  //   const [timezone, setTimezone] = useState("+05:30");
  const [textInput, setTextInput] = useState("shabbeer");
  const [horoscopeData, setHoroscopeData] = useState(null);
  const [altitudeData, setAltitudeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [chart1, setChart1] = useState(null);
  const [chart2, setChart2] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHoroscopeData(null);
    setError("");
    setLoading(true);

    try {
      // Format date to DD/MM/YYYY
      const formattedDate = date.split("-").reverse().join("/");

      const altitude = `https://vedastroapi.azurewebsites.net/api/Calculate/AddressToGeoLocation/Address/${encodeURIComponent(
        location
      )}/Ayanamsa/Raman`;
      const response1 = await fetch(altitude);
      if (!response1.ok) {
        throw new Error("Failed to fetch horoscope data. Please try again.");
      }

      const data1 = await response1.json();
      setAltitudeData(data1);

      // Construct the API URL
      const params = {
        api_key: "740c3002-e2c8-579c-af20-d71510bdbd4c",
        dob: formattedDate,
        tob: time,
        lat: data1.Payload.AddressToGeoLocation.Latitude,
        lon: data1.Payload.AddressToGeoLocation.Longitude,
        tz: 5.5,
        lang: "en",
        D1: "D1",
        D9: "D9",
      };

      // Construct the URL with the query parameters
      const baseUrl = "https://api.vedicastroapi.com/v3-json/horoscope/";
      //   const baseUrl = "";

      const apiUrl = `${baseUrl}planet-details?dob=${params.dob}&tob=${params.tob}&lat=${params.lat}&lon=${params.lon}&tz=${params.tz}&api_key=${params.api_key}&lang=${params.lang}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch horoscope data. Please try again.");
      }
      const data = await response.json();
      setHoroscopeData(data);

      // Construct the URL with the query parameters
      const chat1Url = `${baseUrl}chart-image?dob=${params.dob}&tob=${params.tob}&lat=${params.lat}&lon=${params.lon}&tz=${params.tz}&div=${params.D1}&color=%23ff3366&style=north&api_key=${params.api_key}&lang=${params.lang}`;
      const response2 = await fetch(chat1Url);
      if (!response2.ok) {
        throw new Error("Failed to fetch horoscope data. Please try again.");
      }
      const data2 = await response2.text();
      setChart1(data2);

      // Construct the URL with the query parameters
      const chat2Url = `${baseUrl}chart-image?dob=${params.dob}&tob=${params.tob}&lat=${params.lat}&lon=${params.lon}&tz=${params.tz}&div=${params.D9}&color=%23ff3366&style=north&api_key=${params.api_key}&lang=${params.lang}`;
      const response3 = await fetch(chat2Url);
      if (!response3.ok) {
        throw new Error("Failed to fetch horoscope data. Please try again.");
      }
      const data3 = await response3.text();
      setChart2(data3);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login">
        <div className="header">
          <h2>Horoscope Predictions</h2>
          <p>Enter details to fetch your predictions</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="box">
            <label>Text Input</label>
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Enter your query or name"
              required
            />
          </div>
          <div className="box">
            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location (e.g., NewDelhi,Delhi,India)"
              required
            />
          </div>
          <div className="box">
            <label>Date of Birth</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="box">
            <label>Time of Birth</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <button className="submit" type="submit">
            Get Horoscope
          </button>
        </form>

        {/* Loading Indicator */}
        {loading && <Loader />}

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      {horoscopeData && (
        <div className="horoscope-result">
          <h3>Horoscope Predictions:</h3>
          <Table data={horoscopeData} />
        </div>
      )}
      {chart1 && (
        <div className="horoscope-result">
          <h3>Lagna</h3>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              marginTop: "20px",
            }}
            dangerouslySetInnerHTML={{ __html: chart1 }} // Render SVG as HTML
          />
        </div>
      )}
      {chart2 && (
        <div className="horoscope-result">
          <h3>Navamsa</h3>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              marginTop: "20px",
            }}
            dangerouslySetInnerHTML={{ __html: chart2 }} // Render SVG as HTML
          />
        </div>
      )}
    </>
  );
};

export default HoroscopeLLMForm;
