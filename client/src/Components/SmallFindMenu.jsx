import React from 'react';
import SkillsMenuSmall from "./SkillsMenuSmall";
import MenuLoginAndRegisterSmall from './MenuLoginAndRegisterSmall'
import onClickOutside from "react-onclickoutside";

function SmallFindMenu ({showHide, setShow, show, items, lookSelection, handleLookSelection, CountryDropdown,country, selectCountry, RegionDropdown, region, selectRegion, handleFind }) {


    SmallFindMenu.handleClickOutside = () => setShow("none");

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

const clickOutsideConfig = {
handleClickOutside: ()=> SmallFindMenu.handleClickOutside,
};

export default onClickOutside(SmallFindMenu, clickOutsideConfig);
