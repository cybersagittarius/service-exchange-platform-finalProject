import { useState } from 'react';
import { Link } from 'react-router-dom'


const LoginAndRegister = () => {

  const [dispDDMenu, setDispDDMenu] = useState("none")
  
  const openDDMenu = () => {
    if(dispDDMenu === "none"){
      setDispDDMenu("block")
    }else{
      setDispDDMenu("none")
    }
  }

  return (
    <>
    <div className="btn-group LogRegLarge" role="group">
      <Link to="/login">
        <button className="btn log">
          <a href="#">Login</a>
        </button>
      </Link>
      <Link to="/register">
        <button className="btn log">
          <a href="#">Register</a>
        </button>
      </Link>
      <a
        id="btnGroupDrop"
        type="button"
        className="dropdown-toggle laguages"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        EN
      </a>
      <div
        className="dropdown-menu linguaMenu lingua"
        aria-labelledby="btnGroupDrop1"
      >
        <a className="dropdown-item" href="#">
          DE
        </a>
        <a className="dropdown-item" href="#">
          PT
        </a>
        <a className="dropdown-item" href="#">
          ES
        </a>
        <a className="dropdown-item" href="#">
          ZH
        </a>
      </div>
    </div>
    </>
  );
};
export default LoginAndRegister;
