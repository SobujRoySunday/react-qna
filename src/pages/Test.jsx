/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { QUESTIONS } from "../conf";

Array.prototype.shuffle = function () {
  for (var i = this.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));

    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }

  return this;
};

const Test = ({ paper, setData, setBusy }) => {
  const [enable, setEnable] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);
  const [time, setTime] = useState([]);
  const [ans, setAns] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  let questions = QUESTIONS[paper];
  let questionNo = questions.length;

  const handleAnswerChange = (option, index) => {
    let arr = selectedValue.slice();
    let timeArr = time.slice();
    arr[index] = option;
    timeArr[index] = Date.now();
    setSelectedValue(arr);
    setTime(timeArr);
  };
  const handle = () => {
    let points = 0;
    questions.forEach((question, index) => {
      if (question.answer === selectedValue[index]) {
        let answers = ans;
        answers[index] = true;
        setAns(answers);
        points++;
      } else {
        let answers = ans;
        answers[index] = false;
        setAns(answers);
      }
    });
    setData((prevData) => {
      const oldTest = prevData.test;
      const newData = {
        ...prevData,
        test: {
          ...oldTest,
          [paper]: { score: points, timeStamps: time, isCorrect: ans },
        },
      };
      return newData;
    });
    setEnable(true);
  };

  useEffect(() => {
    let arr = [];
    questions.forEach((question) => {
      arr.push("");
      question.options.shuffle();
    });
    setSelectedValue(arr);
    setTime(arr);
    setAns(arr);
  }, []);

  useEffect(() => {
    setBusy(!enable);
  }, [enable]);

  return (
    <div className="w-80 flex flex-col justify-center items-center gap-5 bg-slate-300 h-fit p-5 rounded overflow-auto my-5 max-h-[95%] lg:w-[60%] lg:min-h-[60%]">
      <div className="flex flex-col gap-2 rounded bg-gray-200 px-4 py-2">
        <div>
          <label className="text-blue-600">
            Q. {questions[currentQuestion].question}
          </label>
        </div>
        <div className="flex flex-col gap-2">
          {questions[currentQuestion].options.map((option) => {
            return (
              <div key={option}>
                <input
                  type="radio"
                  className="cursor-pointer"
                  id={option}
                  value={option}
                  checked={selectedValue[currentQuestion] === option}
                  onChange={() => {
                    handleAnswerChange(option, currentQuestion);
                  }}
                />{" "}
                <label className="cursor-pointer" htmlFor={option}>
                  {option}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {currentQuestion === questionNo - 1 ? null : (
        <button
          onClick={() => {
            setCurrentQuestion(currentQuestion + 1);
          }}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Next Question
        </button>
      )}
      {currentQuestion === questionNo - 1 ? (
        <button
          onClick={handle}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          End Test
        </button>
      ) : null}
    </div>
  );
};

export default Test;
