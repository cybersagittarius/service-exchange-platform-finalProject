import React, { useState } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import SearchContext from "./SearchContext";


const SearchProvider = (props) => {
  const [country, setCountry] = useState(" ");
  const [region, setRegion] = useState(" ");
  const [offerSelection, setOfferSelection] = useState([]);
  const [lookSelection, setLookSelection] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [showSkillsSelection, setShowSkillsSelection] = useState("block");
  const [password,setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [alertEM, setAlertEM] = useState(false);
  const [alertPW, setAlertPW] = useState(false);
  const [confirmNewPW, setConfirmNewPW] = useState("");
  const [alertPWCheck, setAlertPWCheck] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [itemSkills, setItemSkills] = useState([]);
  const [show, setShow] = useState('none');
  const [currentPage, setCurrentPage] = useState("/")

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
    // console.log(location.pathname);
    if(location.pathname !== '/logInPage' && location.pathname !== '/register'){
      setCurrentPage(location.pathname);
      
    }
    history.push("/logInPage");
  };

  const goRegister = () => {
    // console.log(location.pathname);
    if(location.pathname !== '/logInPage' && location.pathname !== '/register'){
      setCurrentPage(location.pathname);
      
    }
    history.push("/register");
  };

  return (
    <>
      <SearchContext.Provider
        value={{
          country,
          region,
          offerSelection,
          setOfferSelection,
          lookSelection,
          setCountry,
          selectCountry,
          setRegion,
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
          password,
          setPassword,
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
          goLogin
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
