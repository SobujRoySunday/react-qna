/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { QUESTIONS } from "../conf";

const Test = ({ paper, setData }) => {
  Array.prototype.shuffle = function () {
    for (var i = this.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));

      var temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }

    return this;
  };
  const handleAnswerChange = (option, index) => {
    let arr = selectedValue.slice();
    let timeArr = time.slice();
    arr[index] = option;
    timeArr[index] = Date.now();
    setSelectedValue(arr);
    setTime(timeArr);
  };
  const [selectedValue, setSelectedValue] = useState([]);
  const [time, setTime] = useState([]);
  let questions = QUESTIONS[paper];

  const handle = () => {
    let points = 0;
    questions.forEach((question, index) => {
      if (question.answer === selectedValue[index]) {
        points++;
      }
    });
    setData((prevData) => {
      const oldTest = prevData.test;
      const newData = {
        ...prevData,
        test: { ...oldTest, [paper]: { score: points, timeStamps: time } },
      };
      return newData;
    });
  };

  useEffect(() => {
    questions.shuffle();
    let arr = [];
    questions.forEach((question) => {
      arr.push("");
      question.options.shuffle();
    });
    setSelectedValue(arr);
  }, [questions]);

  return (
    <div className="w-80 flex flex-col gap-5 bg-slate-300 h-fit p-5 rounded overflow-auto my-5 max-h-[95%]">
      {questions.map((q, index) => {
        return (
          <div
            key={q.id}
            className="flex flex-col gap-2 rounded bg-gray-200 px-4 py-2"
          >
            <div>
              <label className="text-blue-600">Q. {q.question}</label>
            </div>
            <div className="flex flex-col gap-2">
              {q.options.map((option) => {
                return (
                  <div key={option}>
                    <input
                      type="radio"
                      className="cursor-pointer"
                      id={option}
                      value={option}
                      checked={selectedValue[index] === option}
                      onChange={() => {
                        handleAnswerChange(option, index);
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
        );
      })}
      <button
        onClick={handle}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        End Test
      </button>
    </div>
  );
};

export default Test;
