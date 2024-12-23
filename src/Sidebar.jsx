import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? `sidebar` : `sidebar hide-sidebar`}>
      <div className="sidebarcontainer">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          <ul className="sublinks">
            {sublinks.map((item) => {
              const { pageId, page, links } = item;
              return (
                <li key={pageId}>
                  {page}
                  <ul className="links">
                    {links.map((item) => {
                      const { id, label, icon, url } = item;
                      return (
                        <li key={id}>
                          {icon} <a href={url}>{label}</a>{" "}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
