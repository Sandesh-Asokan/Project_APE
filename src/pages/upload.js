import React, { useState } from "react";
import Header from "../components/header";
import bghome from "../assets/upload.gif";
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
    color: "white",
  },
};

function Upload() {
  const [ans, setAns] = useState(false);

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
      <Header logged="true" />
      <div className="d-flex text-center">
        <div
          className=""
          style={{
            minHeight: "92.8vh",
            maxHeight: "92.8vh",
            backgroundColor: "#8800f7",
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
            className="color-primary p-5"
            style={{
              maxHeight: "92.8vh",
              minHeight: "92.8vh",
              minWidth: "57.32vw",
              minHeight: "92vh",
              backgroundColor: "#8800f7",
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
              {ans ? (
                <>
                  <Grid items>
                    <div className="d-flex justify-content-center align-items-center">
                      <h1 style={styles.h1}> Here are your results!! </h1>{" "}
                      {/* <Typography variant="h5" style={styles.h1} sx={{ pl: 1 }}>
                    PVT LTD
                  </Typography> */}
                    </div>
                    {/* <p style={styles.h1}>Best of luck for your results</p> */}
                  </Grid>
                  <Grid items>
                    <h3 style={styles.h1} className="py-3">
                      Congratulations you have obtained
                    </h3>
                    <div
                      className="px-4 py-3 bg-white shadow h1 fw-bold "
                      style={{ color: "#8800f7", borderRadius: 15 }}
                    >
                      82/100
                    </div>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid items>
                    <div className="d-flex justify-content-center align-items-center">
                      <h1 style={styles.h1}> One step away !! </h1>{" "}
                      {/* <Typography variant="h5" style={styles.h1} sx={{ pl: 1 }}>
                    PVT LTD
                  </Typography> */}
                    </div>
                    {/* <p style={styles.h1}>Best of luck for your results</p> */}
                  </Grid>
                  <Grid items>
                    <h3 style={styles.h1} className="py-3">
                      Upload your answer scripts for evaluation
                    </h3>
                    <div
                      className="px-4 py-3 bg-white shadow h1 fw-bold cursor-pointer"
                      style={{ color: "#8800f7", borderRadius: 15 }}
                      onClick={() => setAns(true)}
                    >
                      Evaluate
                    </div>
                  </Grid>
                </>
              )}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
