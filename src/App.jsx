import { useGlobalContext } from "./context";
import Hero from "./hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

const App = () => {
  const { isSidebarOpen } = useGlobalContext();
  console.log(isSidebarOpen);
  return (
    <>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </>
  );
};
export default App;
