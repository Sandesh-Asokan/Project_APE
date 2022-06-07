import { React, useState } from "react";
import Header from "../components/header";
import bghome from "../assets/login1.jpg";
import bghome1 from "../assets/stdlog.jpg";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
import { useHistory } from "react-router-dom";

const styles = {
  typography: {
    color: "#ffffff",
    "&:hover": {
      color: "orange",
    },
  },
  typography1: {
    color: "white",
    "&:hover": {
      color: "primary",
    },
  },
};

function Login() {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [teach, setTeach] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const log = {
      user: user,
      pass: pass,
      role: teach ? "teacher" : "student",
    };

    if (log.user && log.pass) {
      const dispatchData = {
        user: log.user,
        role: teach ? "Teacher" : "Student",
        password: log.pass,
        loggedIn: true,
      };
      dispatch(login(dispatchData));

      axios.post("http://localhost:4000/app/login", log).then((res) => {
        console.log(res.data);
        if (res.data.username) {
          console.log(res.data);
          console.log("Logged in Thalaiva!");
          // window.location = "/";
          teach ? history.push("/post") : history.push("/due");
          // alert("Welcome " + res.data.username + "!");
          setUser("");
          setPass("");
          dispatch(login(dispatchData));
        } else {
          console.log(res.data);
          alert("Invalid Username/password!");
        }
      });
    } else {
      alert("Some fields are empty!");
    }
  };

  return (
    <div
      style={{
        maxHeight: "100vh",
        minHeight: "100vh",
        maxWidth: "100vw",
        minWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <Header active={1} />
      <div className="d-flex text-center">
        <div
          className={`${teach ? "bg-primary" : "bg-li-green"}`}
          style={{
            minHeight: "92.8vh",
            maxHeight: "92.8vh",
          }}
        >
          <img
            src={teach ? bghome : bghome1}
            style={{
              maxHeight: "90vh",
              minHeight: "90vh",
              maxWidth: "44vw",
              padding: 0,
              borderBottomRightRadius: "35%",
            }}
          />
        </div>
        <div
          style={{
            maxHeight: "92.8vh",
            minHeight: "100vh",
          }}
        >
          <div
            className={`color-primary ${
              teach ? "bg-primary" : "bg-li-green"
            } p-5`}
            style={{
              maxHeight: "100vh",
              minHeight: "100vh",
              minWidth: "57.32vw",
              minHeight: "100vh",
              borderTopLeftRadius: "35%",
            }}
          >
            <form>
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{
                  minWidth: "40vw",
                  minHeight: "80.5vh",
                }}
              >
                <Grid items>
                  <Box
                    className=""
                    sx={{
                      width: 500,
                      height: 450,
                      backgroundColor: "primary",
                      borderTopLeftRadius: "25%",
                      borderBottomRightRadius: "25%",
                      color: "warning",
                      boxShadow: "0px 0px 5px black",
                      padding: 10,
                      border: "5px solid orange",

                      "&:hover": {
                        boxShadow: "0px 0px 5px white",
                        border: "5px solid white",
                        transition: "0.5s ease-in",
                      },
                    }}
                    spacing={1}
                  >
                    <div className="col-12 row d-flex justify-content-evenly">
                      <div
                        className={`fw-bold h4 col-5 ${
                          !teach ? "bg-li-green text-white" : "bg-white"
                        } li-shadow br-10 py-2 cursor-pointer`}
                        onClick={() => setTeach(false)}
                      >
                        Student
                      </div>
                      <div
                        className={`fw-bold h4 col-5 ${
                          teach ? "bg-primary text-white" : "bg-white"
                        } li-shadow br-10 py-2 cursor-pointer`}
                        onClick={() => setTeach(true)}
                      >
                        Teacher
                      </div>
                    </div>
                    <Typography
                      style={styles.typography}
                      variant="h6"
                      sx={{ mb: 4 }}
                    >
                      Login
                    </Typography>
                    <TextField
                      variant="filled"
                      color="warning"
                      onChange={(e) => setUser(e.target.value)}
                      label="Username"
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      variant="filled"
                      label="Password"
                      name="Password"
                      onChange={(e) => setPass(e.target.value)}
                      color="warning"
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                    <Button
                      variant="contained"
                      // type="submit"
                      onClick={handleSubmit}
                      color="warning"
                      sx={{ mb: 2 }}
                    >
                      Login
                    </Button>
                    {/* {console.log("hello!")} */}
                    <Typography variant="body1">
                      <Link to="/signup" style={styles.typography1}>
                        Don't Have an account ?
                      </Link>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
