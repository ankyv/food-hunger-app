import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/themeSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const theme = useSelector((store) => store.theme.theme);

  return (
    <div className="sidebar">
      <div>
        <Link to={"/about"}>
          <p>About</p>
        </Link>
      </div>
      <div>
        <Link to={"/contact"}>
          <p>Contact</p>
        </Link>
      </div>
      <div>
        <Link to={"/signup"}>
          <p>Signup</p>
        </Link>
      </div>
      <div
        onClick={() => {
          dispatch(toggleTheme());
          document.querySelector("body").className =
            theme === "light" ? "dark" : "light";
        }}
      >
        <p>{theme === "light" ? "Dark" : "Light"}</p>
      </div>
    </div>
  );
};

export default Sidebar;
