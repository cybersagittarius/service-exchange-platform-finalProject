import MenuFind from "./MenuFind";
import MenuLoginAndRegisterLarge from "./MenuLoginAndRegisterLarge";

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
