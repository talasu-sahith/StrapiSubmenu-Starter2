import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className="nav-center">
      <h3 className="logo">Strapi</h3>
      <button className="toggle-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      {/* NavLinks */}
      <Navlinks />
    </nav>
  );
};
export default Navbar;
