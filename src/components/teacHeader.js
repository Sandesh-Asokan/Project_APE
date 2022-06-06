import React from "react";
import log from "../assets/log.png";
import { NavLink } from "react-router-dom";

const header = {
  header: {
    color: "black",
    backgroundColor: "white",
    minHeight: "7vh",
  },
  logo: {
    height: "5vh",
    borderRadius: "5px",
  },
  nav: {
    listStyle: "unlisted",
    color: "black",
  },
  li: {
    color: "black",
    fontWeight: "bold",
  },
  li1: {
    color: "white",
    fontWeight: "bold",
    textShadow: "0px 0px 2px black",
  },
};

const data = [
  {
    name: "Home",
    path: "/",
    class: "border border-4 border-success shadow rounded bg-warning",
  },
  {
    name: "Login",
    path: "/login",
    class: "border border-4 border-warning shadow rounded bg-primary",
  },
  {
    name: "Signup",
    path: "/signup",
    class: "border border-4 border-success shadow rounded bg-danger",
  },
];

function teacHeader({ active, logged }) {
  return (
    <div className="header p-2 d-flex " style={header.header}>
      <img src={log} className=" px-3 mx-5" style={header.logo} />
      <div
        style={header.nav}
        className="offset-7 d-flex justify-content-center align-items-center"
      >
        {data.map((data, index) => {
          return (
            <div key={index} className={active == index && data.class}>
              <NavLink
                to={data.path}
                // className="bg-primary"
                className="mx-3 text-decoration-none font-weight-bold"
                style={active == index ? header.li1 : header.li}
              >
                {data.name}
              </NavLink>
            </div>
          );
        })}
        {logged && (
          <div className="">
            <NavLink
              to="\upload"
              // className="bg-primary"
              className="px-3 py-2 rounded border border-white mx-3 text-decoration-none font-weight-bold"
              style={{ backgroundColor: "#8800f7", color: "white" }}
            >
              Upload
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default teacHeader;
