import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

function AppLayout() {
  return (
    <div className="flex h-screen overflow-x-hidden">
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
