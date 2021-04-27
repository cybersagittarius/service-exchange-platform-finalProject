import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import SkillsMenu from "./SkillsMenu";
import FoundProfiles from './FoundProfiles';
import items from '../assets/js/itemsSkills.js'
/* import DisplayedSelection from "./DisplayedSelection"; */

function Find() {
  const [country, setCountry] = useState(" ");
  const [region, setRegion] = useState(" ");
  const [offerSelection, setofferSelection] = useState([]);
  const [lookSelection, setlookSelection] = useState([]);

  const selectCountry = (e) => {
    setCountry(e);
  };

  const selectRegion = (e) => {
    setRegion(e);
  };

  const handleOfferSelection = (selection) => {
    setofferSelection(selection)
  }

  const handlelookSelection = (selection) => {
    setlookSelection(selection)
  }

  const handleFind = () => {
    //This function send info to the backend
  }

  return (
    <form className="form">
    {/* <DisplayedSelection listOfSelection={offerSelection} /> */}
      <SkillsMenu
        title="I can offer"
        items={items}
        multiSelect
        selection={offerSelection}
        handleSelection={handleOfferSelection}
      />
      {/* <DisplayedSelection listOfSelection={lookSelection} /> */}
      <SkillsMenu 
      title="I'm looking for" 
      items={items} 
      multiSelect
      selection={lookSelection}
      handleSelection={handlelookSelection}
      />
      <CountryDropdown value={country} onChange={(e) => selectCountry(e)} />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(e) => selectRegion(e)}
      />
      <div className="btnFindDiv">
        <button onclick= {handleFind} type="submit" value="search" className="btnFind" >
          Find
        </button>
      </div>
    </form>
  );
}

export default Find;
