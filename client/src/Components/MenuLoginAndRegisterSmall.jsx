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
    <div className="btn-group LogRegSmall" role="group">
      <button>EN</button>
      <button>DE</button>
      </div>
    
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
       <br />
    </>
  );
};
export default LoginAndRegister;
