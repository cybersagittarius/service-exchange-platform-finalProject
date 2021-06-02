import React, { useState, useContext } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import SkillsMenuLarge from "./SkillsMenuLarge";
import items from "../assets/data/itemsSkills";
import SearchContext from "../context/SearchContext";
// import Visitor from '../Components/searchOutcome/Visitor';
import { Link, useHistory } from "react-router-dom";
import FindMenuSmall from "./FindMenuSmall";

function FindMenu() {
  const history = useHistory();

  const [show, setShow] = useState("none");

  const context = useContext(SearchContext);

  const {
    country,
    region,
    lookSelection,
    selectCountry,
    selectRegion,
    handleLookSelection,
    setShowSkillsSelection,
    showSkillsSelection,
  } = context;

  const goSearch = () => {
    showHide();
    setShowSkillsSelection("none");
    history.push("/search");
  };

  const showHide = () => {
    if (show === "none") {
      setShow("block");
    } else {
      setShow("none");
    }
  };

  return (
    <>
      <Link to="/">
        <span className="logo">
          <i class="fab fa-staylinked fa-2x"></i>
        </span>
      </Link>

      <form className="form largeFindMenu">
        <div className="skillsMenus">
          <SkillsMenuLarge
            title="I'm Looking For"
            items={items}
            multiSelect
            selection={lookSelection}
            handleSelection={handleLookSelection}
            showSkillsSelection={showSkillsSelection}
            setShowSkillsSelection={setShowSkillsSelection}
          />
        </div>

        <div className="countryAndRegion">
          <CountryDropdown
            value={country}
            onChange={(e) => selectCountry(e)}
            required
          />
          <RegionDropdown
            country={country}
            value={region}
            onChange={(e) => selectRegion(e)}
            required
          />
        </div>
        <div className="btnFindDiv">
          <button
            onClick={goSearch}
            type="button"
            value="search"
            className="btnFind"
            // style={{display:showSkillsSelection}}
          >
            Find
          </button>
        </div>
      </form>

      <FindMenuSmall
        showHide={showHide}
        show={show}
        setShow={setShow}
        items={items}
        lookSelection={lookSelection}
        handleLookSelection={handleLookSelection}
        CountryDropdown={CountryDropdown}
        country={country}
        selectCountry={selectCountry}
        RegionDropdown={RegionDropdown}
        region={region}
        selectRegion={selectRegion}
        goSearch={goSearch}
        setShowSkillsSelection={setShowSkillsSelection}
        showSkillsSelection={showSkillsSelection}
      />
    </>
  );
}

export default FindMenu;
