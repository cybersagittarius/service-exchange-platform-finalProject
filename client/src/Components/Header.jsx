import FindMenu from "./MenuFind";
import LoginAndRegister from "./LoginAndRegister";

const Header = () => {
   return (
    <>
      <div className="find">
        <FindMenu/>
        <LoginAndRegister />
      </div>
    </>
  );
}
export default Header;
