import { useState } from "react";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  return (
    <main className="bg-stone-600 h-screen">
      <PageNav />
      <form className="flex justify-center mt-[10%] h-auto">
        <div className="w-96 h-96 bg-stone-400 rounded-lg">
          <div className="grid grid-rows-3 gap-y-4  mt-[15%]  ml-10 w-72 ">
            <div className="grid grid-rows-2">
              <label htmlFor="email">Email address</label>
              <input
                className="mt-4 rounded-lg"
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="grid grid-rows-2">
              <label htmlFor="password">Password</label>
              <input
                className="mt-4 rounded-lg"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="">
              <Link to={"/app/cities"}>
                <button className="bg-yellow-200 rounded-lg w-full mt-12">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
