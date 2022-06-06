import React from "react";
import Header from "../components/header";
import bghome from "../assets/home.png";
import { Box, Grid, Typography } from "@mui/material";

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
  h1: {
    fontWeight: "bold",
    color: "green",
  },
};

function Home() {
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
      <Header active={0} />
      <div className="d-flex text-center">
        <div
          className="bg-warning"
          style={{
            minHeight: "92.8vh",
            maxHeight: "92.8vh",
          }}
        >
          <img
            src={bghome}
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
            className="color-primary bg-warning p-5"
            style={{
              maxHeight: "92.8vh",
              minHeight: "92.8vh",
              minWidth: "57.32vw",
              minHeight: "92vh",
              borderTopLeftRadius: "35%",
            }}
          >
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
                <div className="d-flex justify-content-center align-items-center">
                  <h1 style={styles.h1}> AUTOMATED PAPER EVALUATION </h1>{" "}
                  {/* <Typography variant="h5" style={styles.h1} sx={{ pl: 1 }}>
                    PVT LTD
                  </Typography> */}
                </div>
                <p style={styles.h1}>UPLOAD - EVALUATE - RESULT</p>
              </Grid>
              <Grid items>
                <h2 style={styles.h1} className="py-3">
                  About
                </h2>
                <Box
                  className="h4 d-flex align-justify-center"
                  sx={{
                    width: 700,
                    height: 300,
                    backgroundColor: "primary",
                    borderTopLeftRadius: "25%",
                    borderBottomRightRadius: "25%",
                    color: "green",
                    fontWeight: "bold",
                    border: "5px solid green",
                    // padding: 10,
                    boxShadow: "0px 0px 5px black",

                    "&:hover": {
                      border: "5px solid white",
                      transition: "0.5s ease-in-out",
                    },
                  }}
                  spacing={1}
                >
                  <div className="my-auto mx-4">
                    An AI guided technology that helps teachers and students in
                    evaluating their answer scripts.
                  </div>
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
