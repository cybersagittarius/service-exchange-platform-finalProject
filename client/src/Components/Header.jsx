
import MenuFind from "./MenuFind";
import MenuLoginAndRegisterLarge from "./MenuLoginAndRegisterLarge";
import FindMenu from "./MenuFind";
import LoginAndRegister from "./LoginAndRegister";


const Header = () => {
   return (
    <>
      <div className="find">
        <MenuFind/>
        <MenuLoginAndRegisterLarge />
      </div>
    </>
  );
}
export default Header;
