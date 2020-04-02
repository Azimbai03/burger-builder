import React, { useState } from 'react';
import classes from './InputExamples.module.css';

const CITIES = ["Bishkek", "Karakol", "Osh", "Naryn", "Talas"];
const REGIONS = ["Chui", "Issyk-Kol", "Osh", "Naryn", "Talas"];
const GENDER = ["Private", "Male", "Female"];
const LANGUAGES = ["English", "Russian", "Kyrgyz", "Turkish"];

export default function() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("Bishkek");
  const [regions, setRegions] = useState([]);
  const [gender, setGender] = useState("Private");
  const [languages, setLanguages] = useState([]);

  function sayHelloCallback() {
    alert("Hello World!");
  }
  function firstNameCallback(event) {
    setFirstName(event.target.value);
  }
  function lastNameCallback(text) {
    setLastName(text);
  }
  function cityCallback(city) {
    setCity(city);
  }
  function regionCallback(regionName) {
    let newRegions = null;
    if (regions.includes(regionName)) {
      newRegions = regions.filter(region => region !== regionName);
    }
    else {
      newRegions = [ ...regions, regionName ];
    }

    setRegions(newRegions);
  }
  function genderCallback(event) {
    setGender(event.target.value);
  }
  function languagesCallback(event) {
    const newLanguages = [ ...event.target.options ]
      .filter(option => option.selected)
      .map(option => option.value);
    setLanguages(newLanguages);
  }

  return (
    <div className={classes.InputExamples}>
      <div>
        <div><strong>First name:</strong> {firstName}</div>
        <div><strong>Last name:</strong> {lastName}</div>
        <div><strong>Gender:</strong> {gender}</div>
        <div><strong>Birth city:</strong> {city}</div>
        <div><strong>Lived in regions:</strong> {regions.join(', ')}</div>
        <div><strong>Spoken languages:</strong> {languages.join(', ')}</div>
      </div>

      <div>
        <h3>Click event listeners</h3>
        <button onClick={sayHelloCallback}>Say hello!</button>
        <a href="#" onClick={() => alert("Hello world")}>Say hello!</a>
      </div>

      <div>
        <h3>Change event listeners</h3>
        <label>
          First name:
          <input
            type="text"
            onChange={firstNameCallback}
            value={firstName} />
        </label>
        <label>
          Last name:
          <input
            type="text"
            onChange={event => lastNameCallback(event.target.value)}
            value={lastName} />
        </label>
      </div>

      <div>
        <h3>Radio input change</h3>
        {CITIES.map(cityName => (
          <label>
            <input
              type="radio"
              name="radio-example"
              value={cityName}
              checked={city === cityName}
              onChange={() => cityCallback(cityName)}
              /> {cityName}
          </label>
        ))}
      </div>

      <div>
        <h3>Checkbox input change</h3>
        {REGIONS.map(regionName => (
          <label>
            <input
              type="checkbox"
              name="checkbox-example"
              value={regionName}
              checked={regions.includes(regionName)}
              onChange={() => regionCallback(regionName)}
              /> {regionName}
          </label>
        ))}
      </div>

      <div>
        <h3>Single select change</h3>
        <label>
          Gender: 
          <select value={gender} onChange={genderCallback}>
            {GENDER.map(genderLabel => (
              <option>{genderLabel}</option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <h3>Multiple select change</h3>
        <label>
          Languages: 
          <select multiple value={languages} onChange={languagesCallback}>
            {LANGUAGES.map(language => (
              <option>{language}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};