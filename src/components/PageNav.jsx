import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function PageNav() {
  return (
    <div className="flex justify-around bg-stone-600 h-12 text-white items-center">
      <div>
        <Logo />
      </div>
      <div className="flex flex-col-4 gap-x-16">
        <NavLink to={"/"}>Home</NavLink>{" "}
        <NavLink to={"/product"}>Product</NavLink>{" "}
        <NavLink to={"/pricing"}>Pricing</NavLink>{" "}
        <NavLink to={"/login"}>Login</NavLink>
      </div>
    </div>
  );
}

export default PageNav;
