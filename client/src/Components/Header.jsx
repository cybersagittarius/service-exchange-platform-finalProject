import { Link } from "react-router-dom";
import FindMenuLarge from "./FindMenuLarge";

const Header = () => {
  return (
    <>
      <div className="find">
        <FindMenuLarge />
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
