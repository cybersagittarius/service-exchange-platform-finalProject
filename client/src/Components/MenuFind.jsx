import React, { useState, useContext } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import SkillsMenuLarge from "./SkillsMenuLarge";
import items from "../assets/data/itemsSkills";
import SearchContext from '../context/SearchContext';
// import Visitor from '../Components/searchOutcome/Visitor';
import { Link } from 'react-router-dom';
import SmallFindMenu from './SmallFindMenu'



function FindMenu(props) {

  const[show, setShow] = useState("none");
 
  
   
const context = useContext(SearchContext);

  const{country,region,offerSelection, lookSelection,selectCountry,selectRegion,  handleOfferSelection,handleLookSelection} = context


  // const handleFind = () => {
  //   //This function send info to the backend
  // };
 

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
    <Link to="/"><span className="logo">
    <i class="fab fa-staylinked fa-2x"></i>
         </span></Link>
    
         
    <form className="form largeFindMenu">


   
      <div className="skillsMenus">
         <SkillsMenuLarge
          title="I'm Looking For"
          items={items}
          multiSelect
          selection={lookSelection}
          handleSelection={handleLookSelection}
        />
      </div>
     
      <div className="countryAndRegion">
        <CountryDropdown value={country} onChange={(e) => selectCountry(e)} required />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(e) => selectRegion(e)}
          required
        />
      </div>
      <div className="btnFindDiv">
      <Link to ="/search">
        <button
          // onClick={handleFind}
          type="submit"
          value="search"
          className="btnFind"> 
          Find
        </button>
        </Link>
    
      </div>
    </form>
        
        <SmallFindMenu 
        showHide = {showHide}
        show = {show}
        setShow = {setShow}
        items = {items}
        lookSelection = {lookSelection}
        handleLookSelection = {handleLookSelection}
        CountryDropdown = {CountryDropdown}
        country = {country}
        selectCountry = {selectCountry}
        RegionDropdown = {RegionDropdown}
        region = {region}
        selectRegion = {selectRegion}
        handleFind = {handleFind}
        />
     
        </>
  );
  
};


export default FindMenu;
