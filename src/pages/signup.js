import { React, useState } from "react";
import Header from "../components/header";
import bgsignup from "../assets/signin.jpg";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import axios from "axios";

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

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const registered = {
      username: e.target.user.value,
      email: e.target.mail.value,
      role: e.target.role.value,
      password: e.target.pass.value,
    };
    console.log(registered);

    if (registered.username && registered.email && registered.password) {
      console.log("resssssssss");
      axios.post("http://localhost:4000/app/signup", registered).then((res) => {
        console.log(res.data);
        console.log(res.data.message.msg);
        console.log("Success back to back to back bro!");
        if (res.data.message.result) window.location = "/";
        alert(res.data.message.msg);
        setUser("");
        setMail("");
        setPass("");
      });
    } else {
      alert("Some fields are empty!");
    }
  };

  const [user, setUser] = useState();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [value, setValue] = useState("student");

  const handleChange1 = (event) => {
    setValue(event.target.value);
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
      <Header active={2} />
      <div className="d-flex text-center">
        <div
          className="bg-danger"
          style={{
            minHeight: "92.8vh",
            maxHeight: "92.8vh",
          }}
        >
          <img
            src={bgsignup}
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
            minHeight: "92.8vh",
          }}
        >
          <div
            className="color-primary bg-danger p-5"
            style={{
              maxHeight: "92.8vh",
              // minHeight: "92.8vh",
              minWidth: "57.32vw",
              minHeight: "100vh",
              borderTopLeftRadius: "35%",
            }}
          >
            <form onSubmit={handleSubmit}>
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
                      height: 550,
                      backgroundColor: "primary",
                      borderTopLeftRadius: "25%",
                      borderBottomRightRadius: "25%",
                      px: 10,
                      py: 5,
                      boxShadow: "0px 0px 5px black",
                      border: "5px solid 	#018a3c",

                      "&:hover": {
                        border: "5px solid white",
                        boxShadow: "0px 0px 5px white",
                        transition: "0.5s ease-in-out",
                      },
                    }}
                    spacing={1}
                  >
                    <Typography
                      style={styles.typography}
                      variant="h5"
                      sx={{ mb: 4 }}
                    >
                      Sign-Up
                    </Typography>
                    <TextField
                      variant="filled"
                      onChange={(e) => setUser(e.target.value)}
                      color="success"
                      label="Username"
                      value={user}
                      name="user"
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                    {/* <FormControl className="bg-success col-12 d-flex flex-column align-items-start"> */}
                    <div className="text-left col-12">Role</div>
                    <RadioGroup
                      // aria-labelledby="demo-controlled-radio-buttons-group"
                      // name="controlled-radio-buttons-group"
                      name="role"
                      value={value}
                      onChange={handleChange1}
                      // className=" col-12 d-flex bg-white"
                    >
                      {/* <span className="bg-secondary col-5"> */}
                      <FormControlLabel
                        // className="bg-primary"
                        value="student"
                        control={<Radio />}
                        label="Student"
                      />
                      {/* </span>
                      <span className="bg-secondary col-5"> */}
                      <FormControlLabel
                        // className="bg-warning"
                        value="teacher"
                        control={
                          <Radio
                          //  className=" bg-white"
                          />
                        }
                        label="Teacher"
                      />
                      {/* </span> */}
                    </RadioGroup>
                    {/* </FormControl> */}
                    <TextField
                      variant="filled"
                      label="Email"
                      value={mail}
                      name="mail"
                      color="success"
                      onChange={(e) => setMail(e.target.value)}
                      fullWidth
                      sx={{ mb: 2 }}
                    />

                    <FormControl
                      sx={{ mb: 2 }}
                      fullWidth
                      variant="filled"
                      color="success"
                    >
                      <InputLabel htmlFor="filled-adornment-password">
                        Password
                      </InputLabel>
                      <FilledInput
                        id="filled-adornment-password"
                        name="pass"
                        type={values.showPassword ? "text" : "password"}
                        value={values.pass}
                        // value={pass}
                        // onChange={}
                        onChange={(e) => {
                          setPass(e.target.value);
                          handleChange("password");
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    {/* 
                  <TextField
                    variant="filled"
                    label="Password"
                    onChange={(e) => setPass(e.target.value)}
                    color="success"
                    fullWidth
                    sx={{ mb: 2 }}
                  /> */}
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ mb: 2 }}
                      type="submit"
                    >
                      Sign-Up
                    </Button>
                    <Typography variant="body1">
                      <Link to="/login" style={styles.typography1}>
                        Already Have an account ?
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

export default Signup;
