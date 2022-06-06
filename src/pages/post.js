import React, { useState } from "react";
import Header from "../components/header";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function Post() {
  const details = [
    {
      sub: "OOAD",
      submiss: 4,
      due: "Jul 20",
      stud: [
        { name: "Surya", mark: 78 },
        { name: "Manoj", mark: 81 },
        { name: "Sandesh", mark: 99 },
        { name: "Sharwin", mark: 91 },
      ],
    },
    {
      sub: "CI",
      submiss: 12,
      due: "Jul 2",
      stud: [
        { name: "Manoj", mark: 81 },
        { name: "Surya", mark: 78 },
        { name: "Sandesh", mark: 99 },
        { name: "Sharwin", mark: 91 },
      ],
    },
    {
      sub: "CGM",
      submiss: 44,
      due: "Jun 10",
      stud: [
        { name: "Sandesh", mark: 99 },
        { name: "Surya", mark: 78 },
        { name: "Manoj", mark: 81 },
        { name: "Sharwin", mark: 91 },
      ],
    },
    {
      sub: "AM",
      submiss: 14,
      due: "Jun 20",
      stud: [
        { name: "Sharwin", mark: 91 },
        { name: "Surya", mark: 78 },
        { name: "Manoj", mark: 81 },
        { name: "Sandesh", mark: 99 },
      ],
    },
  ];
  const [post, setPost] = useState(false);
  const [summary, setSummary] = useState(false);

  const [array, setArray] = useState([1]);
  const [data, setData] = useState({
    sub: "AM",
    submiss: 14,
    due: "Jun 20",
    stud: [
      { name: "Sharwin", mark: 91 },
      { name: "Surya", mark: 78 },
      { name: "Manoj", mark: 81 },
      { name: "Sandesh", mark: 99 },
    ],
  });

  const Summary = () => {
    console.log(data.stud);
    return (
      <>
        <Modal
          // className={classes.modalStyle1}
          // sx={{ overflow: "scroll" }}
          open={summary}
          onClose={() => setSummary(false)}
          className="d-flex justify-content-center align-items-center mx-2 mx-md-3 mx-lg-4 mx-lg-5"
        >
          <Box
            // component={motion.div}
            // {...ModalAnimation}
            className=" overflow-hidden bg-white no-out"
            sx={{
              // backgroundColor: "#7201c8 !important",
              // position: "absolute",
              // top: "50%",
              // left: "50%",
              // transform: "translate(-50%, -50%)",
              overflowY: "scroll",
              // border: "3px solid #fff",
              borderRadius: 5,
              boxShadow: 24,
              height: "80vh",
              width: "70vw",
              // px: 4,
              // py: 2,
            }}
          >
            <div className="d-flex justify-content-between align-items-start">
              <ArrowBackIcon
                className="bg-box1 purple rounded-circle p-1 me-3 mt-2 ms-3 cursor-pointer li-shadow col-1"
                sx={{ fontSize: 30 }}
                onClick={() => setSummary(false)}
              />
              <div className="d-flex justify-content-center px-5 w-100">
                <div className="text-dark fw-bold h3 py-3 me-5">{data.sub}</div>
              </div>
            </div>
            <div className=" col-12 p-3 d-flex justify-content-evenly">
              <div className="p-3 br-10 bg-box3 li-shadow  col-3 d-flex flex-column align-items-center ">
                <div className="text-dark fw-bold h1 py-3">{data.submiss}</div>
                <div className="fw-bold h5 text-dark">submissions</div>
              </div>
              <div className="p-3 br-10 bg-box3 li-shadow  col-3 d-flex flex-column align-items-center ">
                <div className="fw-bold h5 text-dark">Due:</div>
                <div className="text-dark fw-bold h1 py-3">{data.due}</div>
              </div>
            </div>
            <div className="mx-3 p-3">
              <div className="d-flex  bg-box2 br-10 my-2 shadow">
                <div className="col-8 h5 text-center fw-bold py-3">
                  Students
                </div>
                <div className="col-4 h5 text-center fw-bold py-3">Marks</div>
              </div>
              {data.stud.map((dm) => (
                <div className="d-flex  bg-white br-10 my-2 shadow">
                  <div className="col-8 h5 text-center fw-bold py-3">
                    {dm.name}
                  </div>
                  <div className="col-4 h5 text-center fw-bold py-3">
                    {dm.mark}
                  </div>
                </div>
              ))}
            </div>
          </Box>
        </Modal>
      </>
    );
  };

  return (
    <div className="vh-100">
      <Header />
      {post ? (
        <div className="py-3">
          <div className="p-3 h1 fw-bold mx-5">Post Assesment</div>
          <div className=" col-12 row d-flex justify-content-evenly align-items-center">
            {array.map((ab, ind) => (
              <div className="col-4 m-3">
                <div className="br-15 py-3 px-4 d-flex flex-column align-items-center bg-box1 li-shadow cursor-pointer">
                  <div className="h3 fw-bold cursor-pointer d-flex align-items-center col-12 justify-content-center">
                    <div className="me-2">{ind + 1}.</div>
                    <TextField
                      id="standard-basic"
                      label="Question"
                      variant="standard"
                      className="mb-2 col-10"
                      size="large"
                      sx={{ fontSize: 50 }}
                    />
                  </div>
                </div>
                <div className="br-15 mt-3 py-3 px-4 d-flex flex-column align-items-center bg-box1 li-shadow cursor-pointer">
                  <div className="h3 fw-bold cursor-pointer d-flex align-items-center col-12 justify-content-center">
                    <div className="me-2">{ind + 1}.</div>
                    <TextField
                      id="standard-basic"
                      label="Key"
                      variant="standard"
                      className="mb-2 col-10"
                      size="large"
                      sx={{ fontSize: 50 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="mx-auto m-3 br-15 col-2 py-3 px-4 d-flex flex-column align-items-center bg-box2 li-shadow cursor-pointer"
            onClick={() => {
              setArray([...array, 1]);
              console.log(array);
            }}
          >
            <AddIcon style={{ fontSize: 30 }} />
            <div className="h3 fw-bold">Add Question</div>
          </div>
          {/* <div className=" col-12 d-flex justify-content-evenly">
            <input type="file" id="postQP" className="d-none" />
            <input type="file" id="postKey" className="d-none" />
            <label
              for="postQP"
              className="br-15 col-4 py-3 px-4 d-flex flex-column align-items-center bg-box1 li-shadow cursor-pointer"
            >
              <div className="h3 fw-bold cursor-pointer">
                Post Question paper
              </div>
              <UploadFileIcon className="" style={{ fontSize: 50 }} />
            </label>
            <label
              for="postKey"
              className="br-15 li-shadow col-4 py-3 px-4 d-flex flex-column align-items-center bg-box1 cursor-pointer"
            >
              <div className="h3 fw-bold cursor-pointer">Post Answer Key</div>
              <UploadFileIcon className="" style={{ fontSize: 50 }} />
            </label>
          </div> */}
          <div className="d-flex mt-2 col-12 justify-content-center">
            <div
              className=" mx-3 mt-4 py-3 text-center h4 fw-bold col-2 bg-danger br-10 li-shadow cursor-pointer"
              onClick={() => setPost(false)}
            >
              Cancel
            </div>
            <div
              className=" mx-3 mt-4 py-3 text-center h4 fw-bold col-2 bg-warning br-10 li-shadow cursor-pointer"
              onClick={() => setPost(false)}
            >
              Submit
            </div>
          </div>
        </div>
      ) : (
        <div className="py-3 mt-3">
          <div className="d-flex justify-content-between me-5 pe-5">
            <div className="p-3 h1 fw-bold mx-5">
              Recently Posted Assesments
            </div>
            <div className="d-flex bg-box1 li-shadow br-15  px-3 mx-5 justify-content-center align-items-center">
              <AddCircleOutlineIcon className="mb-2" style={{ fontSize: 40 }} />
              <div
                className="p-3 h2 fw-bold cursor-pointer"
                onClick={() => setPost(true)}
              >
                Post Assesments
              </div>
            </div>
          </div>
          <div className=" col-12 row d-flex justify-content-evenly">
            {details.map((sub, index) => (
              <div
                className="br-15 col-4 py-3 px-4 m-4 d-flex flex-column align-items-center bg-box2 li-shadow"
                onClick={() => {
                  setSummary(true);
                  setData(sub);
                }}
              >
                <div className="h3 fw-bold cursor-pointer">
                  {index + 1}. {sub.sub} Question paper
                </div>
                {/* <UploadFileIcon className="" style={{ fontSize: 50 }} /> */}
              </div>
            ))}
            {/* <div className="br-15 li-shadow col-4 py-3 px-4 d-flex flex-column align-items-center bg-box1">
            <div className="h3 fw-bold cursor-pointer">Post Answer Key</div>
            {/* <UploadFileIcon className="" style={{ fontSize: 50 }} />
          </div> */}
            <Summary />
          </div>
        </div>
      )}
    </div>
  );
}
