import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function Layout() {
  const Navs = [
    {
      text: "List",
      route: "/",
    },
    {
      text: "Search",
      route: "/search",
    },
  ];
  return (
    <>
      <div id="navbar">
        <div id="demo">
          <center>
            <p>Pokemon</p>
          </center>
        </div>
        <div id="links">
          {Navs.map((e) => (
            <Link key={e.text} id="navs" to={e.route}>
              <li>{e.text}</li>
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
