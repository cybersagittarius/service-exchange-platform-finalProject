import Find from "./MenuFind";
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
