import React, { useState, useContext } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import SkillsMenu from "./SkillsMenu";
import items from "../assets/js/itemsSkills.js";
import { SearchContext } from './context/SearchContext';


function FindMenu() {

  const[show, setShow] = useState("none");

  const{country,region,offerSelection, lookSelection,selectCountry,selectRegion,  handleOfferSelection,handlelookSelection} = useContext(SearchContext)

  const handleFind = () => {
    //This function send info to the backend
  };

  const showHide =() => {
    
    if(show === "none") {
      setShow("block")
    }
    else {
      setShow("none")
    }
  }

  return (
    <>
    <form className="form largeFindMenu">
   
      <div className="skillsMenus">
        {/* <SkillsMenu
        title="I Can Offer"
        items={items}
        multiSelect
        selection={offerSelection}
        handleSelection={handleOfferSelection}
      /> */}

      
        <SkillsMenu
          title="I'm Looking For"
          items={items}
          multiSelect
          selection={lookSelection}
          handleSelection={handlelookSelection}
        />
      </div>
      <div className="countryAndRegion">
        <CountryDropdown value={country} onChange={(e) => selectCountry(e)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(e) => selectRegion(e)}
        />
      </div>
      <div className="btnFindDiv">
        <button
          onclick={handleFind}
          type="submit"
          value="search"
          className="btnFind"
        >
          Find
        </button>
      </div>
    </form>

     <div className="form smallFindMenu" >

     <button onClick={showHide}>
        <i class="fas fa-bars"></i>
      </button>

    <div className="DDFindMenu" style={{display:show}}>
      <form>
        <div className="skillsMenus" >
          {/* <SkillsMenu
          title="I Can Offer"
          items={items}
          multiSelect
          selection={offerSelection}
          handleSelection={handleOfferSelection}
        /> */}
          <SkillsMenu
            title="I'm Looking For"
            items={items}
            multiSelect
            selection={lookSelection}
            handleSelection={handlelookSelection}
          />
        </div>
        <div className="countryAndRegion">
          <CountryDropdown value={country} onChange={(e) => selectCountry(e)} />
          <RegionDropdown
            country={country}
            value={region}
            onChange={(e) => selectRegion(e)}
          />
        </div>
        <div className="btnFindDiv">
          <button
            onclick={handleFind}
            type="submit"
            value="search"
            className="btnFind"
          >
            Find
          </button>
        </div>
      </form>
    </div>
      
    </div>
    </>
  );
}

export default FindMenu;
