import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const Body = () => {
  const isVisible = useSelector((store) => store.menu.isVisible);

  return (
    <div>
      {isVisible && <Sidebar />}
      <Outlet />
    </div>
  );
};

export default Body;
