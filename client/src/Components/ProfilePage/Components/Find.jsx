import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Offer from "./Offer";
/* import DisplayedSelection from './DisplayedSelection'; */
/* import LookingFor from "./LookingFor"; */

const items = [
  {
    id: 1,
    value: "Animals",
  },
  {
    id: 2,
    value: "Archeology",
  },
  {
    id: 3,
    value: "Astronamy",
  },
  {
    id: 4,
    value: "Biology",
  },
  {
    id: 5,
    value: "Books",
  },
  {
    id: 6,
    value: "Chemistry",
  },
  {
    id: 7,
    value: "Cooking",
  },
  {
    id: 8,
    value: "Design",
  },
  {
    id: 9,
    value: "Electrochemistry",
  },
  {
    id: 10,
    value: "Engineering",
  },
  {
    id: 11,
    value: "Food",
  },
  {
    id: 12,
    value: "Geography",
  },
  {
    id: 13,
    value: "History",
  },
  {
    id: 14,
    value: "IT",
  },
  {
    id: 15,
    value: "House",
  },
  {
    id: 16,
    value: "Languages",
  },
  {
    id: 17,
    value: "Leisure Activities",
  },
  {
    id: 18,
    value: "Mathematics",
  },
  {
    id: 19,
    value: "Mechanics",
  },
  {
    id: 20,
    value: "Medical scrience",
  },
  {
    id: 21,
    value: "Philosophy",
  },
  {
    id: 22,
    value: "Music",
  },
  {
    id: 23,
    value: "Philosophy",
  },
  {
    id: 24,
    value: "Physics",
  },
  {
    id: 25,
    value: "Plants",
  },
  {
    id: 26,
    value: "Psychology",
  },
  {
    id: 27,
    value: "Science",
  },
  {
    id: 28,
    value: "Spirituality",
  },
  {
    id: 29,
    value: "Social studies",
  },
  {
    id: 30,
    value: "Sport",
  },
];

function Find() {
  const [country, setCountry] = useState(" ");
  const [region, setRegion] = useState(" ");
  const [Items, setItems] = useState(" ");

  const selectCountry = (e) => {
    setCountry(e);
  };

  const selectRegion = (e) => {
    setRegion(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCountry(" ");
    setRegion(" ");
  };
  const selectItems = (e) => setItems(e);

  return (
    <form onSubmit={handleSubmit} className="form">
      <Offer title="I can offer" items={items} multiSelect />
      {/* <DisplayedSelection selected={selected}/> */}
      <Offer title="I'm looking for" items={items} multiSelect />
      {/* <LookingFor value={items} onChange={(e) => selectItems(e)} />
      <div className="menu"> */}
        <CountryDropdown value={country} onChange={(e) => selectCountry(e)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(e) => selectRegion(e)}
        />
      
      <div className="btnFindDiv">
        <button type="submit" value="search" className="btnFind">
          Find
        </button>
      </div>
    </form>
  );
}

export default Find;
