import Find from "../../Find";
import HeaderDropdown from "./ProfileHeaderDropdown";

const Header = () => {
  return (
    <>
      <div className="find">
        <Find />
        <HeaderDropdown />

      </div>
    </>
  );
}
export default Header;
