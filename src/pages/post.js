import React, { useEffect, useState } from "react";
import Header from "../components/header";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";

var idd = 1;
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
  const [assName, setAssName] = useState("");
  const [assDue, setAssDue] = useState("");
  const [postData, setPostData] = useState([
    {
      id: 1,
      ques: "",
      words: "",
    },
  ]);

  const Summary = () => {
    // console.log(data.stud);
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

  const addQuest = () => {
    const addObj = {
      id: idd,
      ques: "",
      words: "",
    };
    setPostData([...postData, addObj]);
  };

  const handleSubmit = () => {
    const submitData = {
      assesName: assName,
      assesDue: assDue,
      qna: postData,
    };
    axios
      .post("http://localhost:4000/app/postAsses", submitData)
      .then((res) => {
        console.log(res.data);
        // console.log(res.data.message.msg);
        // console.log("Success back to back to back bro!");
        // if (res.data.message.result) window.location = "/";
        // alert(res.data.message.msg);
        // setUser("");
        // setMail("");
        // setPass("");
      })
      .catch((err) => console.log(err));
    // console.log(submitData);
    reset();
    setPost(false);
  };

  const reset = () => {
    setPostData([
      {
        id: 1,
        ques: "",
        words: "",
      },
    ]);
    setAssName("");
    setAssDue("");
    idd = 1;
  };

  // useEffect(() => console.log(array), [array]);
  // useEffect(() => console.log(postData), [postData]);

  return (
    <div className="vh-100">
      <Header logged={true} rout="Staff" />
      {post ? (
        <div className="py-3">
          <div className="d-flex align-items-center">
            <div className="p-3 h1 fw-bold mx-5">Post Assesment</div>
            <input
              // label="Enter the Assesment Name"
              // variant="standard"
              type="text"
              className="mb-2 col-12 col-md-6 h3 p-2"
              placeholder="Enter the Asssesment name"
              style={{ border: "0px  solid white" }}
              onChange={(e) => setAssName(e.target.value)}
              // InputProps={{ style: { fontSize: 25 } }}
              // InputLabelProps={{ style: { fontSize: 25, fontWeight: "bold" } }}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Set Due Date"
                value={assDue}
                onChange={(newValue) => {
                  setAssDue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className=" col-12 row d-flex justify-content-evenly align-items-center">
            {array.map((ab, ind) => (
              <div className="col-4 m-3">
                <div className="br-15 py-3 px-4 d-flex flex-column align-items-center bg-box1 li-shadow cursor-pointer">
                  <div className="h3 fw-bold cursor-pointer d-flex align-items-center col-12 justify-content-center">
                    <div className="me-2">{ab}.</div>
                    <TextField
                      id="standard-basic"
                      label="Question"
                      variant="standard"
                      className="mb-2 col-10"
                      size="large"
                      multiline
                      rows={3}
                      onChange={(e) => {
                        let dum = [...postData];
                        dum[ind].ques = e.target.value;
                        // console.log(dum[ind].ques);
                        setPostData(dum);
                      }}
                      sx={{ fontSize: 50 }}
                    />
                  </div>
                </div>
                <div className="br-15 mt-3 py-3 px-4 d-flex flex-column align-items-center bg-box1 li-shadow cursor-pointer">
                  <div className="h3 fw-bold cursor-pointer d-flex align-items-center col-12 justify-content-center">
                    <div className="me-2">{ab}.</div>
                    <TextField
                      id="standard-basic"
                      label="Key"
                      variant="standard"
                      className="mb-2 col-10"
                      size="large"
                      multiline
                      rows={2}
                      onChange={(e) => {
                        let dum = [...postData];
                        dum[ind].words = e.target.value;
                        // console.log(dum[ind].ques);
                        setPostData(dum);
                      }}
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
              console.log(idd);
              idd += 1;
              setArray([...array, idd]);
              addQuest();
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
              onClick={() => {
                reset();
                setPost(false);
              }}
            >
              Cancel
            </div>
            <div
              className=" mx-3 mt-4 py-3 text-center h4 fw-bold col-2 bg-warning br-10 li-shadow cursor-pointer"
              onClick={handleSubmit}
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
            <div
              className="d-flex bg-box1 li-shadow br-15  px-3 mx-5 justify-content-center align-items-center cursor-pointer"
              onClick={() => setPost(true)}
            >
              <AddCircleOutlineIcon className="mb-2" style={{ fontSize: 40 }} />
              <div className="p-3 h2 fw-bold" onClick={() => setPost(true)}>
                Post Assesments
              </div>
            </div>
          </div>
          <div className=" col-12 row d-flex justify-content-evenly">
            {details.map((sub, index) => (
              <div
                className="br-15 col-4 py-3 px-4 m-4 d-flex flex-column align-items-center bg-box2 li-shadow cursor-pointer"
                onClick={() => {
                  setSummary(true);
                  setData(sub);
                }}
              >
                <div className="h3 fw-bold">
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
