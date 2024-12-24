import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
  const { pageid } = useGlobalContext();
  const currentpage = sublinks.find((item) => item.pageId === pageid);
  return (
    <div className={currentpage ? "submenu show-submenu" : "submenu"}>
      <h5>{currentpage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentpage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentpage?.links?.map((item) => {
          const { id, url, label, icon } = item;
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
