import React from "react";
import log from "../assets/log.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../userSlice";
import { useHistory } from "react-router-dom";

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
  // {
  //   name: "Signup",
  //   path: "/signup",
  //   class: "border border-4 border-success shadow rounded bg-danger",
  // },
];

// dispatch(login(dispatchData));

function Header({ active, logged, rout }) {
  const { loggedIn, user, role } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="header p-2 d-flex " style={header.header}>
      <img src={log} className=" px-3 mx-5" style={header.logo} />
      <div
        style={header.nav}
        className="offset-7 d-flex justify-content-center align-items-center"
      >
        {!logged &&
          data.map((data, index) => {
            if (index == 1) {
              if (loggedIn) {
                return (
                  <div key={index} className={active == index && data.class}>
                    <div
                      // to={data.path}
                      onClick={dispatch(logout())}
                      // className="bg-primary"
                      className="mx-3 text-decoration-none font-weight-bold"
                      style={active == index ? header.li1 : header.li}
                    >
                      Logout
                    </div>
                  </div>
                );
              } else {
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
              }
            } else {
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
            }
          })}
        {logged && (
          <>
            <div className="pt-2">
              <NavLink
                to="\upload"
                // className="bg-primary"
                className="px-3 py-2 mx-3 text-decoration-none br-10 li-shadow fw-bold"
                style={{ backgroundColor: "#8800f7", color: "white" }}
              >
                {rout} - Dashboard
              </NavLink>
            </div>

            <div>
              <div
                // to={data.path}
                onClick={() => {
                  dispatch(logout());
                  history.push("/login");
                }}
                // className="bg-primary"
                className="mx-3 text-decoration-none font-weight-bold cursor-pointer"
                style={header.li}
              >
                Logout
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
