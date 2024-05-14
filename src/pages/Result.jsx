/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Result = ({ data, download }) => {
  const [result, setResult] = useState({});
  function adjustTimestamps(data) {
    const { startTime, ...rest } = data;

    // Function to adjust a single timestamp
    const adjustTimestamp = (timestamp) => (timestamp - startTime) / 1000;

    // Recursive function to adjust timestamps in the object
    const adjustObject = (obj) => {
      const result = {};
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          if (typeof obj[key] === "number" && key.endsWith("Time")) {
            result[key] = adjustTimestamp(obj[key]);
          } else if (Array.isArray(obj[key])) {
            result[key] = obj[key].map((item) =>
              typeof item === "number" ? adjustTimestamp(item) : item
            );
          } else if (typeof obj[key] === "object" && obj[key] !== null) {
            result[key] = adjustObject(obj[key]);
          } else {
            result[key] = obj[key];
          }
        }
      }
      return result;
    };

    // Return the new object with adjusted timestamps
    return {
      startTime: 0,
      ...adjustObject(rest),
    };
  }
  console.log(data);

  useEffect(() => {
    const result = adjustTimestamps(data);
    setResult(result);
  }, []);

  return (
    <div className="flex flex-col">
      Your result is ready here:
      <button
        onClick={() => {
          download(result);
        }}
        className="bg-blue-500 hover:bg-blue-600"
      >
        Download
      </button>
    </div>
  );
};

export default Result;
