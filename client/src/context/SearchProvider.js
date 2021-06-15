import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
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
  const [itemSkills, setItemSkills] = useState([]);
  const [show, setShow] = useState("none");
  const [currentPage, setCurrentPage] = useState("/");
  const [showHideButton, setShowHideButtons] = useState("block");
  const [showLogout, setShowLogout] = useState("none");


  const location = useLocation();
  const history = useHistory();

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

  const goLogin = () => {
    if (
      location.pathname !== "/logInPage" &&
      location.pathname !== "/register"
    ) {
      setCurrentPage(location.pathname);
    }
    history.push("/logInPage");
  };

  const goRegister = () => {
    if (
      location.pathname !== "/logInPage" &&
      location.pathname !== "/register"
    ) {
      setCurrentPage(location.pathname);
      setShowHideButtons("none");
      setShowLogout("block");
    }
    history.push("/register");
  };

  const goProfile = (e) => {
    e.preventDefault();
    history.push('/profile');
    };

  const goLogOut = (e) => {
    e.preventDefault();
    history.push('/');
    setShowHideButtons("block");
    setShowLogout("none");
    setUserInfo({})
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
          setSearchResults,
          itemSkills,
          setItemSkills,
          show,
          setShow,
          currentPage,
          setCurrentPage,
          goRegister,
          goLogin,
          goLogOut,
          showHideButton,
          setShowHideButtons,
          showLogout,
          setShowLogout,
          goProfile,
          }}
      >
        {props.children}
      </SearchContext.Provider>
    </>
  );
};

export default SearchProvider;
