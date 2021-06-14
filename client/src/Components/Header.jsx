import React, { useEffect, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import FindMenuLarge from "./FindMenuLarge";
import Context from "../context/SearchContext";
import axios from "axios";

const Header = () => {
  const context = useContext(Context);
  const {
    setItemSkills,
    country,
    region,
    lookSelection,
    userInfo,
    searchResults,
    setSearchResults,
    setShowSkillsSelection,
    show,
    setShow,
    goLogin,
    goRegister
  } = context;

  
  const history = useHistory();
 
  

  useEffect(() => {
    axios
      .get("http://localhost:4000/itemSkills")
      .then((res) => {
        setItemSkills(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const goSearch = () => {
    const data = { country, region, lookSelection, userInfo, searchResults };
    axios
      .post("http://localhost:4000/search", data)
      .then((res) => {
        setSearchResults(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    showHide();
    setShowSkillsSelection("none");
    history.push("/search");
  };

  const showHide = () => {
    if (show === "none") {
      setShow("block");
    } else {
      setShow("none");
    }
  };

  
  return (
    <>
      <div className="find">
        <FindMenuLarge goSearch={goSearch} />
        <div className="btn-group LogRegLarge" role="group">
          {/* <Link to="/logInPage">
            <button className="btn log">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="btn log">
              Register
            </button>
          </Link> */}

          <button onClick={goLogin} className="btn log">
            Login
          </button>

          <button onClick={goRegister} className="btn log">
            Register
          </button>

          <div className="btn-group LogRegSmall" role="group">
            <button>EN</button>
            <button>DE</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
