import React, { useState, useEffect } from "react";
import Header from "../components/header";
import TextField from "@mui/material/TextField";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
// import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Due() {
  const [upload, setUpload] = useState(false);
  const [summary, setSummary] = useState(false);
  const [ready, setReady] = useState(false);
  const [title, setTitle] = useState({});
  const [sum, setSum] = useState({});
  //Test Start
  const [data, setData] = useState([{}])

  useEffect(() =>{
    fetch("/recognised")
    .then(response => response.json()
    .then(data=>{
      console.log(data)
      setData(data.recognised_text)
    })
  )},[]);

  //Test End
  const recent = [
    {
      sub: "OOAD",
      task: "Weekly assesment",
      date: "May 3",
      mark: 78,
      stud: [
        {
          ques: "How does the conectivity of database work here?",
          ans: "Hello",
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
  const [due, setDue] = useState([
    {
      sub: "OOAD Assigment 3",
      task: "Assigment 3",
      date: 23,
      qna: [
        { id: 1, ques: "How would this project help us?", ans: [] },
        { id: 2, ques: "What is purpose of APE project?", ans: [] },
        { id: 3, ques: "Why Planet earth is rotating?", ans: [] },
      ],
    },
    {
      sub: "CI Journal referencce",
      task: "Journal referencce",
      date: 2,
      qna: [
        { id: 1, ques: "How would this project help us?", ans: [] },
        { id: 2, ques: "What is purpose of APE project?", ans: [] },
        { id: 3, ques: "Why Planet earth is rotating?", ans: [] },
      ],
    },
    {
      sub: "CGM Weekly assesment",
      task: "Weekly assesment",
      date: 10,
      qna: [
        { id: 1, ques: "How would this project help us?", ans: [] },
        { id: 2, ques: "What is purpose of APE project?", ans: [] },
        { id: 3, ques: "Why Planet earth is rotating?", ans: [] },
      ],
    },
  ]);

  const handleSubmit = () => {
    const submitData = {
      user: "Surya",
      date: "Jun 9",
      data: title,
    };
    // fetch("/recognise",title){
    //   function block
    // }
    console.log(submitData);
    axios
      .post("http://localhost:4000/app/submitAsses", submitData)
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data.message.msg);
        // console.log("Success back to back to back bro!");
        // if (res.data.message.result) window.location = "/";
        // alert(res.data.message.msg);
        // setUser("");
        // setMail("");
        // setPass("");
      });
    setReady(true);
  };

  const PreEvaluate = () => {
    const [evaled, setEvaled] = useState(false);
    const [load, setLoad] = useState(false);
    const handleEvaluate = () => {
      setEvaled(true);
      setLoad(true);

      setTimeout(() => {
        setLoad(false);
        // setEvaled(false);
      }, 3000);
    };

    return (
      <div
        className="bg-white position-absolute"
        style={{ minHeight: "100vh", left: 0, right: 0 }}
      >
        <ArrowBackIcon
          className="bg-box1 purple rounded-circle p-1 me-3 mt-2 ms-3 cursor-pointer li-shadow col-1"
          sx={{ fontSize: 30 }}
          onClick={() => setReady(false)}
        />
        <div className="d-flex mt-2 col-12 justify-content-between align-items-center">
          <div
            className=" mx-3 mt-4 px-5 py-3 text-center bg-dark text-white h4 fw-bold br-10 li-shadow cursor-pointer"
            // onClick={() => setPost(false)}
          >
            {title.sub}
          </div>
          {evaled ? (
            load ? (
              <LoadingButton loading variant="outlined">
                Submit
              </LoadingButton>
            ) : (
              <div
                className=" mx-3 mt-4 py-3 text-center h4 fw-bold col-2 bg-success text-white br-10 li-shadow cursor-pointer"
                // onClick={() => setPost(false)}
              >
                <span className=" h1 fw-bold"> Mark varum</span>
              </div>
            )
          ) : (
            <div
              className=" mx-3 mt-4 py-3 text-center h4 fw-bold col-2 bg-warning text-white br-10 li-shadow cursor-pointer"
              onClick={handleEvaluate}
            >
              <span className=" h1 fw-bold"> Evaluate </span>
            </div>
          )}
          <div
            className=" mx-3 mt-4 py-3 text-center h4 fw-bold col-2 bg-danger text-white br-10 li-shadow cursor-pointer"
            // onClick={() => setPost(false)}
          >
            <span className=" h4 fw-bold"> {title.date} </span>
          </div>
        </div>
        <div className=" col-12 row d-flex justify-content-evenly align-items-center">
          {title.qna.map((ab, ind) => (
            <div className="col-4 m-3 d-flex flex-column justify-content-center ">
              <div className="br-15 py-3 px-4 d-flex flex-column align-items-center bg-box1 li-shadow cursor-pointer">
                <div className="h3 fw-bold cursor-pointer d-flex align-items-center col-12 justify-content-center">
                  <div className="me-2">
                    {ab.id}. {ab.ques}
                  </div>
                </div>
              </div>
              <div className="br-15 mt-3 py-3 px-4 d-flex flex-column align-items-center bg-box2 li-shadow cursor-pointer h4">
                {ab.ans}
                {evaled && (
                  <div className="h3 fw-bold col-10 mx-auto bg-box4 p-2 li-shadow text-center mt-3 br-10">
                    {/* {ab.mark} */}
                    Mark podanum
                  </div>
                )}
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
  };

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
          {title.sub}
        </div>
        <div
          className=" mx-3 mt-4 py-3 text-center h4 fw-bold col-2 bg-danger text-white br-10 li-shadow cursor-pointer"
          // onClick={() => setPost(false)}
        >
          <span className=" h4 fw-bold"> {title.date} </span>hrs left
        </div>
      </div>
      <div className=" col-12 row d-flex justify-content-evenly align-items-center">
        {title.qna.map((ab, ind) => (
          <div className="col-4 m-3 d-flex flex-column justify-content-center ">
            <div className="br-15 py-3 px-4 d-flex flex-column align-items-center bg-box1 li-shadow cursor-pointer">
              <div className="h3 fw-bold cursor-pointer d-flex align-items-center col-12 justify-content-center">
                <div className="me-2">
                  {ab.id}. {ab.ques}
                </div>
              </div>
            </div>
            <input
              id={`img${ind}`}
              //Test// value={data.files}
              type="file"
              className="d-none"
              accept="image/*"
              onChange={(e) => {
                let dum = title;
                console.log(URL.createObjectURL(e.target.files[0]));
                dum.qna[ind].ans.push(URL.createObjectURL(e.target.files[0]));
                console.log(dum.qna[ind].ans);
                setTitle(dum);
              }}
            />
            <label
              for={`img${ind}`}
              className="br-15 mt-3 py-3 px-4 d-flex flex-column align-items-center bg-box1 li-shadow cursor-pointer h4"
            >
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
            </label>
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
          onClick={() => {
            handleSubmit();
            setUpload(false);
          }}
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
      {ready && <PreEvaluate />}

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
              <div className="h3 fw-bold cursor-pointer">{du.sub}</div>
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
