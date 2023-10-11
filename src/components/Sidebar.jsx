import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
function Sidebar() {
  return (
    <div className="bg-stone-600 text-white overflow-y h-screen  flex flex-col items-center min-w-[40%] pt-24 space-y-12  ">
      <span className="font-semibold text-xl">
        <Logo />
      </span>
      <AppNav />
      <Outlet />
    </div>
  );
}

export default Sidebar;
