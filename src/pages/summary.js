import React from "react";
import Header from "../components/header";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export default function Summary() {
  const andrew = ["OOAD", "CGM", "CI", "AM"];

  return (
    <div className="vh-100">
      <Header />
      {/* <div className="py-3">
        <div className="p-3 h1 fw-bold mx-5">Post Assesment</div>
        <div className=" col-12 d-flex justify-content-evenly">
          <input type="file" id="postQP" className="d-none" />
          <input type="file" id="postKey" className="d-none" />
          <label
            for="postQP"
            className="br-15 col-4 py-3 px-4 d-flex flex-column align-items-center bg-box1 li-shadow cursor-pointer"
          >
            <div className="h3 fw-bold cursor-pointer">Post Question paper</div>
            <UploadFileIcon className="" style={{ fontSize: 50 }} />
          </label>
          <label
            for="postKey"
            className="br-15 li-shadow col-4 py-3 px-4 d-flex flex-column align-items-center bg-box1 cursor-pointer"
          >
            <div className="h3 fw-bold cursor-pointer">Post Answer Key</div>
            <UploadFileIcon className="" style={{ fontSize: 50 }} />
          </label>
        </div>
        <div className=" mx-auto mt-4 py-3 text-center h4 fw-bold col-2 bg-warning br-10 li-shadow">
          {" "}
          Submit{" "}
        </div>
      </div> */}
      <div className="py-3 mt-3">
        <div className="p-3 h1 fw-bold mx-5">Recently Posted Assesments</div>
        <div className=" col-12 row d-flex justify-content-evenly">
          {andrew.map((sub, index) => (
            <div className="br-15 col-4 py-3 px-4 m-4 d-flex flex-column align-items-center bg-box2 li-shadow">
              <div className="h3 fw-bold cursor-pointer">
                {index + 1}. {sub} Question paper
              </div>
              {/* <UploadFileIcon className="" style={{ fontSize: 50 }} /> */}
            </div>
          ))}
          {/* <div className="br-15 li-shadow col-4 py-3 px-4 d-flex flex-column align-items-center bg-box1">
            <div className="h3 fw-bold cursor-pointer">Post Answer Key</div>
            {/* <UploadFileIcon className="" style={{ fontSize: 50 }} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
