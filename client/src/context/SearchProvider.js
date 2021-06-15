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
  const [password, setPassWord] = useState("") 
  const [email, setEmail] = useState("");
  const [alertEM, setAlertEM] = useState(false);
  const [alertPW, setAlertPW] = useState(false);
  const [confirmNewPW, setConfirmNewPW] = useState("");
  const [alertPWCheck, setAlertPWCheck] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [itemSkills, setItemSkills] = useState([]);
  const [show, setShow] = useState('none');
  
  //showHide={showHide}
        // show={show}
        //setShow={setShow}


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
          setCountry,
          selectCountry,
          setRegion,
          selectRegion,
          handleOfferSelection,
          setOfferSelection,
          handleLookSelection,
          setLookSelection,
          userInfo,
          setUserInfo,
          showSkillsSelection,
          setShowSkillsSelection,
          email,
          setEmail,
          alertEM,
          setAlertEM,
          password, 
          setPassWord,
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
          setShow
        }}
      >
        {props.children}
      </SearchContext.Provider>
    </>
  );
};

export default SearchProvider;




// import React, { useState } from 'react';
// import SearchContext from "./SearchContext";


// const SearchProvider = (props) => {
//   const [country, setCountry] = useState(" ");
//   const [region, setRegion] = useState(" ");
//   const [offerSelection, setOfferSelection] = useState([]);
//   const [lookSelection, setLookSelection] = useState([]);
//   const [userInfo, setUserInfo] = useState({});
//   const [showSkillsSelection, setShowSkillsSelection] = useState("block");
//   const [newPassword, setNewPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [alertEM, setAlertEM] = useState(false);
//   const [alertPW, setAlertPW] = useState(false);
//   const [confirmNewPW, setConfirmNewPW] = useState("");
//   const [alertPWCheck, setAlertPWCheck] = useState(false);
//   const [itemSkills, setItemSkills] = useState([]);

//   const selectCountry = (e) => {
//     setCountry(e);
//   };

//   const selectRegion = (e) => {
//     setRegion(e);
//   };

//   const handleOfferSelection = (selection) => {
//     setOfferSelection(selection);
//   };

//   const handleLookSelection = (selection) => {
//     setLookSelection(selection);
//   };

  
//   return (
//     <>
//       <SearchContext.Provider
//         value={{
//           country,
//           region,
//           offerSelection,
//           lookSelection,
//           selectCountry,
//           selectRegion,
//           handleOfferSelection,
//           handleLookSelection,
//           userInfo,
//           setUserInfo,
//           showSkillsSelection,
//           setShowSkillsSelection,
//           email,
//           setEmail,
//           alertEM,
//           setAlertEM,
//           newPassword,
//           setNewPassword,
//           alertPW,
//           setAlertPW,
//           confirmNewPW,
//           setConfirmNewPW,
//           alertPWCheck,
//           setAlertPWCheck, 
//           itemSkills,
//           setItemSkills          
//         }}
//       >
//         {props.children}
//       </SearchContext.Provider>
//     </>
//   );
// };

// export default SearchProvider;
