import { NavLink } from "react-router-dom";

function AppNav() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      backgroundColor: isActive ? "rgb(41 33 33) " : "",
      borderRadius: isActive ? "0.25rem" : "",
    };
  };
  return (
    <div>
      <ul className="flex gap-x-4 bg-stone-700 rounded-lg ">
        <li>
          <NavLink style={navLinkStyles} to={"cities"}>
            Cities
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyles} to={"countries"}>
            Countries
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNav;
