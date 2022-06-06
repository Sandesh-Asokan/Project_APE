import React, { useState } from "react";
import Header from "../components/header";
import TextField from "@mui/material/TextField";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Due() {
  const [upload, setUpload] = useState(false);
  const [summary, setSummary] = useState(false);
  const [title, setTitle] = useState({});
  const [sum, setSum] = useState({});
  const recent = [
    {
      sub: "OOAD",
      task: "Weekly assesment",
      date: "May 3",
      mark: 78,
      stud: [
        {
          ques: "How doesthe conectivity of database work here?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 20,
        },
        {
          ques: "How effective would be the evaluation?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 18,
        },
        {
          ques: "Do using lexical tokens helps in accuracy?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 20,
        },
        {
          ques: "Is this question next to 3rd question?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 20,
        },
      ],
    },
    {
      sub: "CI",
      task: "Practical assesment",
      date: "May 19",
      mark: 81,
      stud: [
        {
          ques: "How doesthe conectivity of database work here?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 20,
        },
        {
          ques: "How effective would be the evaluation?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 18,
        },
        {
          ques: "Do using lexical tokens helps in accuracy?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 20,
        },
        {
          ques: "Is this question next to 3rd question?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 20,
        },
      ],
    },
    {
      sub: "CGM",
      task: "Assignment 4",
      date: "June 1",
      mark: 99,
      stud: [
        {
          ques: "How doesthe conectivity of database work here?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 20,
        },
        {
          ques: "How effective would be the evaluation?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 18,
        },
        {
          ques: "Do using lexical tokens helps in accuracy?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 20,
        },
        {
          ques: "Is this question next to 3rd question?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 20,
        },
      ],
    },
    {
      sub: "AM",
      task: "Unit test 4",
      date: "June 3",
      mark: 91,
      stud: [
        {
          ques: "How doesthe conectivity of database work here?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 20,
        },
        {
          ques: "How effective would be the evaluation?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 18,
        },
        {
          ques: "Do using lexical tokens helps in accuracy?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 20,
        },
        {
          ques: "Is this question next to 3rd question?",
          ans: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
          mark: 20,
        },
      ],
    },
  ];
  const due = [
    {
      sub: "OOAD",
      task: "Assigment 3",
      date: 23,
      Ques: [
        "What is purpose of APE project?",
        "Why Planet earth is rotating?",
        "How would this project help us?",
      ],
    },
    {
      sub: "CI",
      task: "Journal referencce",
      date: 2,
      Ques: [
        "Why Planet earth is rotating?",
        "What is purpose of APE project?",
        "How would this project help us?",
      ],
    },
    {
      sub: "CGM",
      task: "Weekly assesment",
      date: 10,
      Ques: [
        "How would this project help us?",
        "What is purpose of APE project?",
        "Why Planet earth is rotating?",
      ],
    },
  ];

  const Upload = () => (
    <div
      className="bg-white position-absolute"
      style={{ minHeight: "100vh", left: 0, right: 0 }}
    >
      <div className="d-flex mt-2 col-12 justify-content-between">
        <div
          className=" mx-3 mt-4 px-5 py-3 text-center bg-dark text-white h4 fw-bold br-10 li-shadow cursor-pointer"
          // onClick={() => setPost(false)}
        >
          {title.sub} - {title.task}
        </div>
        <div
          className=" mx-3 mt-4 py-3 text-center h4 fw-bold col-2 bg-danger text-white br-10 li-shadow cursor-pointer"
          // onClick={() => setPost(false)}
        >
          <span className=" h4 fw-bold"> {title.date} </span>hrs left
        </div>
      </div>
      <div className=" col-12 row d-flex justify-content-evenly align-items-center">
        {title.Ques.map((ab, ind) => (
          <div className="col-4 m-3 d-flex flex-column justify-content-center ">
            <div className="br-15 py-3 px-4 d-flex flex-column align-items-center bg-box1 li-shadow cursor-pointer">
              <div className="h3 fw-bold cursor-pointer d-flex align-items-center col-12 justify-content-center">
                <div className="me-2">
                  {ind + 1}. {ab}
                </div>
              </div>
            </div>
            <div className="br-15 mt-3 py-3 px-4 d-flex flex-column align-items-center bg-box1 li-shadow cursor-pointer h4">
              {/* <div className="h3 fw-bold cursor-pointer d-flex align-items-center col-12 justify-content-center">
              <div className="me-2">{ind + 1}.</div>
              <TextField
                id="standard-basic"
                label="Key"
                variant="standard"
                className="mb-2 col-10"
                size="large"
                sx={{ fontSize: 50 }}
              />
            </div> */}
              <UploadFileIcon className="mx-3" style={{ fontSize: 40 }} />{" "}
              Upload your answer
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex mt-2 col-12 justify-content-center">
        <div
          className=" mx-3 mt-4 py-3 text-center h4 fw-bold col-2 bg-danger br-10 li-shadow cursor-pointer"
          onClick={() => setUpload(false)}
        >
          Cancel
        </div>
        <div
          className=" mx-3 mt-4 py-3 text-center h4 fw-bold col-2 bg-warning br-10 li-shadow cursor-pointer"
          onClick={() => setUpload(false)}
        >
          Submit
        </div>
      </div>
    </div>
  );

  const Summary = () => (
    <div
      className="bg-white position-absolute"
      style={{ minHeight: "100vh", left: 0, right: 0 }}
    >
      <ArrowBackIcon
        className="bg-box1 purple rounded-circle p-1 me-3 mt-2 ms-3 cursor-pointer li-shadow col-1"
        sx={{ fontSize: 30 }}
        onClick={() => setSummary(false)}
      />
      <div className="d-flex mt-2 col-12 justify-content-between align-items-center">
        <div
          className=" mx-3 mt-4 px-5 py-3 text-center bg-dark text-white h4 fw-bold br-10 li-shadow cursor-pointer"
          // onClick={() => setPost(false)}
        >
          {sum.sub} - {sum.task}
        </div>
        <div
          className=" mx-3 mt-4 py-3 text-center h4 fw-bold col-2 bg-success text-white br-10 li-shadow cursor-pointer"
          // onClick={() => setPost(false)}
        >
          <span className=" h1 fw-bold"> {sum.mark} </span>
        </div>
        <div
          className=" mx-3 mt-4 py-3 text-center h4 fw-bold col-2 bg-danger text-white br-10 li-shadow cursor-pointer"
          // onClick={() => setPost(false)}
        >
          <span className=" h4 fw-bold"> {sum.date} </span>
        </div>
      </div>
      <div className=" col-12 row d-flex justify-content-evenly align-items-center">
        {sum.stud.map((ab, ind) => (
          <div className="col-4 m-3 d-flex flex-column justify-content-center ">
            <div className="br-15 py-3 px-4 d-flex flex-column align-items-center bg-box1 li-shadow cursor-pointer">
              <div className="h3 fw-bold cursor-pointer d-flex align-items-center col-12 justify-content-center">
                <div className="me-2">
                  {ind + 1}. {ab.ques}
                </div>
              </div>
            </div>
            <div className="br-15 mt-3 py-3 px-4 d-flex flex-column align-items-center bg-box2 li-shadow cursor-pointer h4">
              {ab.ans}
              <div className="h3 fw-bold col-10 mx-auto bg-box4 p-2 li-shadow text-center mt-3 br-10">
                {ab.mark}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="d-flex mt-2 col-12 justify-content-center">
        <div
          className=" mx-3 mt-4 py-3 text-center h4 fw-bold col-2 bg-danger br-10 li-shadow cursor-pointer"
          onClick={() => setUpload(false)}
        >
          Cancel
        </div>
        <div
          className=" mx-3 mt-4 py-3 text-center h4 fw-bold col-2 bg-warning br-10 li-shadow cursor-pointer"
          onClick={() => setUpload(false)}
        >
          Submit
        </div>
      </div> */}
    </div>
  );

  return (
    <div className="vh-100">
      <Header />
      {upload && <Upload />}
      {summary && <Summary />}

      <div className="py-3">
        <div className="p-3 h1 fw-bold mx-5">Due Assesment</div>
        <div className=" col-12 row d-flex justify-content-evenly">
          {due.map((du) => (
            <div
              className=" br-15 col-4 m-3 py-3 px-4 d-flex flex-column align-items-center bg-box1 li-shadow cursor-pointer"
              onClick={() => {
                setUpload(true);
                setTitle(du);
              }}
            >
              <div className="h3 fw-bold cursor-pointer">
                {du.sub} - {du.task}
              </div>
              <div className="h5 fw-bold cursor-pointer">
                <span className="text-danger h4 fw-bold">{du.date}</span> hrs
                left
              </div>
              {/* <ArrowCircleRightIcon className="" style={{ fontSize: 50 }} /> */}
            </div>
          ))}
        </div>
        {/* <div className=" mx-auto mt-4 py-3 text-center h4 fw-bold col-2 bg-warning rounded-10 li-shadow">
          Submit
        </div> */}
      </div>
      <div className="py-3 mt-3">
        <div className="p-3 h1 fw-bold mx-5">Recently Completed Assesments</div>
        <div className=" col-12 row d-flex justify-content-evenly">
          {recent.map((rc, index) => (
            <div
              className="br-15 col-4 p-0 ps-4  m-4 d-flex justify-content-between align-items-center bg-box2 li-shadow cursor-pointer"
              onClick={() => {
                setSummary(true);
                setSum(rc);
              }}
            >
              <div className="h3 fw-bold py-3 mb-0 cursor-pointer text-center">
                {index + 1}. {rc.sub}
              </div>
              <div
                className="h3 fw-bold my-2 bg-box4 py-3 li-shadow px-5"
                style={{ borderRadius: "10px 0px 0px 10px" }}
              >
                {rc.mark}
              </div>
              {/* <UploadFileIcon className="" style={{ fontSize: 50 }} /> */}
            </div>
          ))}
          {/* <div className="rounded-15 li-shadow col-4 py-3 px-4 d-flex flex-column align-items-center bg-box1">
            <div className="h3 fw-bold cursor-pointer">Post Answer Key</div>
            {/* <UploadFileIcon className="" style={{ fontSize: 50 }} />
          </div> */}
        </div>
      </div>
    </div>
  );
}







