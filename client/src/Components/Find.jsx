import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Offer from "./Offer";
import LookingFor from "./LookingFor";

const items = [
  {
    id: 1,
    value: "Animals",
  },
  {
    id: 2,
    value: "Books",
  },
  {
    id: 3,
    value: "Engineering",
  },
  {
    id: 4,
    value: "Food",
  },
  {
    id: 5,
    value: "House",
  },
  {
    id: 6,
    value: "Language",
  },
  {
    id: 7,
    value: "Leisure Activities",
  },
  {
    id: 8,
    value: "Mechanics",
  },
  {
    id: 9,
    value: "Music",
  },
  {
    id: 10,
    value: "Plants",
  },
  {
    id: 11,
    value: "Science",
  },
  {
    id: 12,
    value: "Spirituality",
  },
  {
    id: 13,
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
      <LookingFor value={items} onChange={(e) => selectItems(e)} />
      <div className="menu">
        <CountryDropdown value={country} onChange={(e) => selectCountry(e)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(e) => selectRegion(e)}
        />
      </div>
      <div className="btnFindDiv">
        <button type="submit" value="search" className="btnFind">
          Find
        </button>
      </div>
    </form>
  );
}

export default Find;
