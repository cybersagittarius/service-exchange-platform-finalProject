import React, { useState, useContext } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import SkillsMenuLarge from "./SkillsMenuLarge";
import SkillsMenuSmall from "./SkillsMenuSmall";
import MenuLoginAndRegisterSmall from './MenuLoginAndRegisterSmall'
import items from "../assets/data/itemsSkills";
import SearchContext from '../context/SearchContext';
// import Visitor from '../Components/searchOutcome/Visitor';
import { Link } from 'react-router-dom';

import onClickOutside from "react-onclickoutside";

function FindMenu(props) {

  const[show, setShow] = useState("none");
  // const [open, setOpen] = useState(false);


  // FindMenu.handleClickOutside = () => setOpen(false)
   
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

     <div className="form smallFindMenu" >
       
     <button onClick={showHide} className="burger">
     <i class="fas fa-bars fa-2x"></i>
      </button>

    <div style={{display:show}}>
      <form className="DDFindMenu">
        
        <div className="skillsMenus" >
           <MenuLoginAndRegisterSmall/>
           <SkillsMenuSmall
            title="I'm Looking For"
            items={items}
            multiSelect
            selection={lookSelection}
            handleSelection={handleLookSelection}
          />
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
  
};

// const clickOutsideConfig = {
//   handleClickOutside: ()=> FindMenu.handleClickOutside,
// };
 
export default FindMenu
