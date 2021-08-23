import React, { useState, useEffect, useRef } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
let i = 0;
let flag = 0;
export const GameLayout = ({ data }) => {
  const [question, setQuestion] = useState(data[i]);
  const [marks, setMarks] = useState(0);
  const [time, setTime] = useState(0);
  const seconds = useRef(0);
  const prevClickHandler = () => {
    if (i > 0) {
      i = i - 1;
      setQuestion(data[i]);
    } else {
      i = data.length - 1;
      setQuestion(data[i]);
    }
  };
  const nextClickHandler = () => {
    document.getElementsByTagName("h3");
    reset();
    flag = 0;
    if (i === data.length - 1) {
      i = 0;
      setQuestion(data[i]);
    } else {
      i = i + 1;
      setQuestion(data[i]);
    }
  };
  const reset = () => {
    question["options"].map((question, index) => {
      document.getElementById(`h${index}`).style.background = "white";
      return 0;
    });
  };

  useEffect(() => {
    setInterval(() => {
      seconds.current++;
      setTime(seconds.current);
      if (seconds.current >= 30) {
        seconds.current = 0;
        nextClickHandler();
        clearInterval(seconds);
      }
    }, 1000);
  }, []);

  console.log("hello ", question["options"]);
  return (
    <>
      <div className="game-layout">
        <div className="game-header">
          <div className="question-number"> Q{question["id"]}</div>
          <div className="timer">{time}</div>
        </div>
        <div className="game-body">
          <div className="current-question">
            <h4> {question["question"]} </h4>
          </div>
          <div className="options">
            {question["options"].map((option, index) => {
              return (
                <h3
                  id={`h${index}`}
                  key={index}
                  style={{ background: "white" }}
                  onClick={() => {
                    let x = option[Object.keys(option)];

                    if (x) {
                      if (flag === 0) {
                        flag = 1;
                        document.getElementById(`h${index}`).style.background =
                          "green";
                        setMarks(marks + 1);
                        console.log("correct");
                      }
                    } else {
                      console.log("incorrect");
                      document.getElementById(`h${index}`).style.background =
                        "red";
                    }
                  }}
                >
                  {index + 1}. {Object.keys(option)}
                </h3>
              );
            })}
          </div>
        </div>
        <div className="game-footer">
          <button
            className="btn"
            onClick={() => {
              prevClickHandler();
            }}
          >
            <GrPrevious />
          </button>
          <button
            className="btn"
            onClick={() => {
              setMarks(0);
              setQuestion(data[0]);
              clearInterval(0);
              seconds.current = 0;
              setTime(seconds.current);
              clearInterval(0);
              reset();
            }}
          >
            ReStart
          </button>
          <button
            className="btn"
            onClick={() => {
              console.log("next");
              nextClickHandler();
            }}
            onDrag
          >
            <GrNext />
          </button>
        </div>
      </div>
      <div className="rewards">
        <div className="questions-status">
          <div className="question-status">
            {data.map((option, index) => {
              return (
                <p
                  key={index}
                  className="active"
                  style={{ background: "" }}
                ></p>
              );
            })}
          </div>
          <div className="created-by">
            &copy; Created by Avinash jha
            <br />
            {new Date().getFullYear()}{" "}
          </div>
        </div>
        <div className="marks">
          <div className="current-marks">
            <h4>Your Marks</h4>
            <h3>{marks}/5</h3>
          </div>
          <div className="pass-marks">
            <h4>Avg Marks</h4>
            <h3>4/10</h3>
          </div>
        </div>
      </div>
    </>
  );
};
