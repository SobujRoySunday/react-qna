import { useState } from "react";
import {
  Dashboard,
  Listening,
  ListeningInstruction,
  Reading,
  ReadingInstruction,
  Result,
  Test,
  Video,
  VideoInstruction,
} from "./pages";

const App = () => {
  const [pageState, setPageState] = useState(0);
  const [data, setData] = useState({});
  let pageJSX;

  console.log(data);

  const handleOperation = () => {
    setPageState((prevPageState) => prevPageState + 1);
  };

  if (pageState === 0) {
    pageJSX = <Dashboard setData={setData} />;
  } else if (pageState === 1) {
    pageJSX = <ReadingInstruction />;
  } else if (pageState === 2) {
    pageJSX = <Reading />;
  } else if (pageState === 3) {
    pageJSX = <Test paper={1} setData={setData} />;
  } else if (pageState === 4) {
    pageJSX = <ListeningInstruction />;
  } else if (pageState === 5) {
    pageJSX = <Listening />;
  } else if (pageState === 6) {
    pageJSX = <Test paper={2} setData={setData} />;
  } else if (pageState === 7) {
    pageJSX = <VideoInstruction />;
  } else if (pageState === 8) {
    pageJSX = <Video />;
  } else if (pageState === 9) {
    pageJSX = <Test paper={3} setData={setData} />;
  } else if (pageState === 10) {
    pageJSX = <Result data={data} />;
  }

  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center p-5">
      {pageJSX}
      {pageState === 10 ? null : (
        <button
          onClick={handleOperation}
          className="bg-green-500 hover:bg-green-600 text-white absolute bottom-4 right-4"
        >
          Next &gt;&gt;
        </button>
      )}
    </div>
  );
};

export default App;
