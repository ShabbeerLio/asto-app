import React, { useState } from "react";
import planetData from "./TableData";
import "./Table.css";

const Table = ({ data }) => {
  const [planetDatas] = useState(data.response);

  // Function to map planets and their details
  const mapPlanetData = (data) => {
    return Object.values(planetDatas)
      .map((planet) => {
        if (planet.name === "birth_dasa" || planet.name === "current_dasa")
          return null;

        return {
          name: planet.full_name,
          zodiac: planet.zodiac,
          house: planet.house,
          nakshatra: planet.nakshatra,
          nakshatra_lord: planet.nakshatra_lord,
          zodiac_lord: planet.zodiac_lord,
          local_degree: planet.local_degree,
          rishi: planet.nakshatra_lord, // Assuming nakshatra_lord is used as rishi here
          latitude: planet.local_degree, // Assuming local_degree as latitude
          relation: planet.zodiac_lord, // Assuming zodiac_lord as relation
          nakshatra_pada: planet.nakshatra_pada, // Assuming nakshatra_pada as Pada
        };
      })
      .filter(Boolean); // Removing null values for non-planet objects
  };

  // Function to map Dasa details
  const mapDasaDetails = (data) => {
    return {
      birth_dasa: planetDatas.birth_dasa,
      current_dasa: planetDatas.current_dasa,
      lucky_gem: planetDatas.lucky_gem,
      lucky_num: planetDatas.lucky_num,
      lucky_colors: planetDatas.lucky_colors,
      lucky_letters: planetDatas.lucky_letters,
    };
  };

  // Map the data
  const planets = mapPlanetData(planetDatas[0]);
  const dasaDetails = mapDasaDetails(planetDatas[0]);

  // Helper function to check if a value is defined and not empty
  const isDefined = (value) =>
    value !== undefined && value !== null && value !== "";

  return (
    <div>
      <h2>Planet and Dasa Details</h2>
      <table border="1" style={{ width: "100%", textAlign: "center" }}>
        <thead style={{ background: "#f1f1f1" }}>
          <tr>
            <th>Planet</th>
            <th>Zodiac</th>
            <th>House</th>
            <th>Nakshatra</th>
            <th>Nakshatra Lord</th>
            <th>Zodiac Lord</th>
            <th>Latitude</th>
            <th>Rishi</th>
            <th>Pada</th>
            <th>Relation</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, index) => (
            <tr key={index}>
              {isDefined(planet.name) && <td>{planet.name}</td>}
              {isDefined(planet.zodiac) && <td>{planet.zodiac}</td>}
              {isDefined(planet.house) && <td>{planet.house}</td>}
              {isDefined(planet.nakshatra) && <td>{planet.nakshatra}</td>}
              {isDefined(planet.nakshatra_lord) && (
                <td>{planet.nakshatra_lord}</td>
              )}
              {isDefined(planet.zodiac_lord) && <td>{planet.zodiac_lord}</td>}
              {isDefined(planet.latitude) && <td>{planet.latitude}</td>}
              {isDefined(planet.rishi) && <td>{planet.rishi}</td>}
              {isDefined(planet.nakshatra_pada) && (
                <td>{planet.nakshatra_pada}</td>
              )}
              {isDefined(planet.relation) && <td>{planet.relation}</td>}
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
            <th
              colSpan="10"
              style={{ textAlign: "center", fontWeight: "bold" }}
            >
              Dasa Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">
              {isDefined(dasaDetails.birth_dasa) && (
                <strong>Birth Dasa:</strong>
              )}{" "}
            </td>
            <td colSpan="10">
              {dasaDetails.birth_dasa} <br />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              {isDefined(dasaDetails.current_dasa) && (
                <strong>Current Dasa:</strong>
              )}{" "}
            </td>
            <td colSpan="10">
              {dasaDetails.current_dasa} <br />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              {isDefined(dasaDetails.lucky_gem) && (
                <>
                  <strong>Lucky Gem:</strong>
                </>
              )}
            </td>
            <td colSpan="10">
              <>
                {dasaDetails.lucky_gem}
                <br />
              </>
            </td>
          </tr>
          <tr>
            <td colSpan="2"> 
              {isDefined(dasaDetails.lucky_num) && (
                <>
                  <strong>Lucky Number:</strong> <br />
                </>
              )}
            </td>
            <td colSpan="10">{dasaDetails.lucky_num}</td>
          </tr>
          <tr>
            <td colSpan="2">
              {isDefined(dasaDetails.lucky_colors) && (
                <>
                  <strong>Lucky Colors:</strong> <br />
                </>
              )}
            </td>
            <td colSpan="10">
              <>
                {dasaDetails.lucky_colors}
                <br />
              </>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              {isDefined(dasaDetails.lucky_letters) && (
                <>
                  <strong>Lucky Letters:</strong> <br />
                </>
              )}
            </td>
            <td colSpan="10">
              <>{dasaDetails.lucky_letters}</>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
