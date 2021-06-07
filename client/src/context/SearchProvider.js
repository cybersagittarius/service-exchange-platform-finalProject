import React, { useState } from "react";
import SearchContext from "./SearchContext";

const SearchProvider = (props) => {
  const [country, setCountry] = useState(" ");
  const [region, setRegion] = useState(" ");
  const [offerSelection, setOfferSelection] = useState([]);
  const [lookSelection, setLookSelection] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [showSkillsSelection, setShowSkillsSelection] = useState("block");

  const selectCountry = (e) => {
    setCountry(e);
  };

  const selectRegion = (e) => {
    setRegion(e);
  };

  const handleOfferSelection = (selection) => {
    setOfferSelection(selection);
  };

  const handleLookSelection = (selection) => {
    setLookSelection(selection);
  };

  return (
    <>
      <SearchContext.Provider
        value={{
          country,
          region,
          offerSelection,
          lookSelection,
          selectCountry,
          selectRegion,
          handleOfferSelection,
          handleLookSelection,
          userInfo,
          setUserInfo,
          showSkillsSelection,
          setShowSkillsSelection
        }}
      >
        {props.children}
      </SearchContext.Provider>
    </>
  );
};

export default SearchProvider;
