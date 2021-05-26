import React, { useState, useContext } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import SkillsMenuLarge from "./SkillsMenuLarge";
import items from "../assets/data/itemsSkills";
import SearchContext from '../context/SearchContext';
// import Visitor from '../Components/searchOutcome/Visitor';
import { Link } from 'react-router-dom';
import SmallFindMenu from './SmallFindMenu'

=======
import SkillsMenu from "./SkillsMenu";
import items from "../assets/data/itemsSkills.js";
import SearchContext  from '../context/SearchContext';
// import Visitor from '../Components/searchOutcome/Visitor';
import {Link} from 'react-router-dom';



function FindMenu(props) {

  const[show, setShow] = useState("none");

 
  
   
const context = useContext(SearchContext);

  const{country,region,offerSelection, lookSelection,selectCountry,selectRegion,  handleOfferSelection,handleLookSelection} = context


  const handleFind = () => {
    //This function send info to the backend
  };


  const{country,region,offerSelection, lookSelection,selectCountry,selectRegion,  handleOfferSelection,handlelookSelection} = useContext(SearchContext)


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

          handleSelection={handleLookSelection}

          handleSelection={handlelookSelection}
          required

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
        <Link to="/search">
          <button
            // onclick={handleFind}
  type="submit"
  value="search"
  className="btnFind">
   Find
           
          </button>
          </Link>
        </div>
      </form>
    </div>
      
    </div>
    </>
  );
}


export default FindMenu;
