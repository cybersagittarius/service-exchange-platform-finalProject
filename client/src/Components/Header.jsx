import MenuFind from "./MenuFind";
import MenuLoginAndRegister from "./MenuLoginAndRegister";

const Header = () => {
   return (
    <>
      <div className="find">
        <MenuFind/>
        <MenuLoginAndRegister />
      </div>
    </>
  );
}
export default Header;
