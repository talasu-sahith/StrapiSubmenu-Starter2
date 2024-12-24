import { useGlobalContext } from "./context";
import sublinks from "./data";

const Navlinks = () => {
  const { setPageid } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageid(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Navlinks;
