import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
export default function Homepage() {
  return (
    <main className="relative h-screen">
      <div className=" absolute inset-0 bg-stone-600 bg-opacity-75"></div>
      <div className=" bg-hero bg-cover bg-center h-screen">
        <section className="absolute w-full">
          <div>
            <PageNav />
          </div>
          <div className="text-center mt-[15%] w-1/2 ml-[25%]">
            <div className="font-bold text-xl">
              You travel the world.
              <br />
              TravelNotes keeps track of your adventures.
            </div>
            <div className="font-medium text-lg mt-[5%]">
              A world map that tracks your footsteps into every city you can
              think of. Never forget your wonderful experiences, and show your
              friends how you have wandered the world.
            </div>
            <div className="bg-yellow-300 w-1/6 ml-72 mt-8 rounded-lg">
              <Link to={"/login"}>
                <button>Start</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
