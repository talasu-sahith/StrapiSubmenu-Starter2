import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const { openSidebar, setPageid } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageid(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        {/* NavLinks */}
        <Navlinks />
      </div>
    </nav>
  );
};
export default Navbar;
