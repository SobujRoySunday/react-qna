import { useEffect, useState } from "react";
import { QUESTIONS } from "../conf";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const startTime = Date.now();
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
    arr[index] = option;
    setSelectedValue(arr);
  };
  const [selectedValue, setSelectedValue] = useState([]);
  const navigate = useNavigate();

  const handle = () => {
    const time = (Date.now() - startTime) / 1000;
    let points = 0;
    QUESTIONS.forEach((question, index) => {
      if (question.answer === selectedValue[index]) {
        points++;
      }
    });
    alert(
      `Total test time: ${time} seconds\nYour score: ${points}/${QUESTIONS.length}`
    );
    navigate("/");
  };

  useEffect(() => {
    QUESTIONS.shuffle();
    let arr = [];
    QUESTIONS.forEach((question) => {
      arr.push("");
      question.options.shuffle();
    });
    setSelectedValue(arr);
  }, []);

  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center h-screen w-screen">
      <div className="w-80 flex flex-col gap-5 bg-slate-500 h-fit p-5 rounded">
        {QUESTIONS.map((q, index) => {
          return (
            <div
              key={q.id}
              className="flex flex-col gap-2 rounded bg-gray-300 px-4 py-2"
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
    </div>
  );
};

export default Test;
