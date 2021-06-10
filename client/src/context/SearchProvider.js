import React, { useState } from 'react';
import SearchContext from "./SearchContext";


const SearchProvider = (props) => {
  const [country, setCountry] = useState(" ");
  const [region, setRegion] = useState(" ");
  const [offerSelection, setOfferSelection] = useState([]);
  const [lookSelection, setLookSelection] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [showSkillsSelection, setShowSkillsSelection] = useState("block");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [alertEM, setAlertEM] = useState(false);
  const [alertPW, setAlertPW] = useState(false);
  const [confirmNewPW, setConfirmNewPW] = useState("");
  const [alertPWCheck, setAlertPWCheck] = useState(false);
  const [searchResults, setSearchResults] = useState([]);


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
          setShowSkillsSelection,
          email,
          setEmail,
          alertEM,
          setAlertEM,
          newPassword,
          setNewPassword,
          alertPW,
          setAlertPW,
          confirmNewPW,
          setConfirmNewPW,
          alertPWCheck,
          setAlertPWCheck,
          searchResults,
          setSearchResults
        }}
      >
        {props.children}
      </SearchContext.Provider>
    </>
  );
};

export default SearchProvider;
