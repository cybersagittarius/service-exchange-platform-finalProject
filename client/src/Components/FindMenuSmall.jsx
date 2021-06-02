import React from 'react';
import SkillsMenuSmall from "./SkillsMenuSmall";
import MenuLoginAndRegisterSmall from './MenuLoginAndRegisterSmall'
import onClickOutside from "react-onclickoutside";
import {useLocation} from 'react-router-dom'

function FindMenuSmall ({showHide, setShow, show, items, lookSelection, handleLookSelection, CountryDropdown,country, selectCountry, RegionDropdown, region, selectRegion, goSearch, setShowSkillsSelection, showSkillsSelection }) {


  FindMenuSmall.handleClickOutside = () => setShow("none");
  

    return (
        <>
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
              showSkillsSelection={showSkillsSelection}
              setShowSkillsSelection={setShowSkillsSelection}
              
              />
            <CountryDropdown value={country} onChange={(e) => selectCountry(e)} />
            
            <RegionDropdown
              country={country}
              value={region}
              onChange={(e) => selectRegion(e)}
            />
            </div>
          
          <div className="btnFindDiv">
            <button
              onClick={goSearch}
              type="button"
              value="search"
              className="btnFind"
              onClick={showHide}
              
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

const clickOutsideConfig = {
handleClickOutside: ()=> FindMenuSmall.handleClickOutside,
};

export default onClickOutside(FindMenuSmall, clickOutsideConfig);
