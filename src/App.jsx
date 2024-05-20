import { useEffect, useRef, useState } from "react";
import {
  Dashboard,
  Listening,
  Reading,
  Ready,
  Result,
  Test,
  Video,
  Welcome,
} from "./pages";
import { handlePageStateChange, executeWithDelayAndBeep } from "./utils";
import { Counter } from "./components";

const App = () => {
  const [pageState, setPageState] = useState(0);
  const [data, setData] = useState({});
  const pageJSX = useRef(<Welcome />);
  const [busy, setBusy] = useState(false);

  console.log("Sequence no: ", pageState);
  console.log("Data: ", data);

  // pageState based sequence rendering
  useEffect(() => {
    let sequenceFunction;
    switch (pageState) {
      case 1:
        pageJSX.current = <Dashboard setData={setData} setBusy={setBusy} />;
        setData({ startTime: Date.now() });
        break;
      case 2:
        pageJSX.current = <Ready text="READING" />;
        setData((prevData) => ({
          ...prevData,
          readingInstructionTime: Date.now(),
        }));
        break;
      case 3:
        sequenceFunction = executeWithDelayAndBeep(
          () => {
            pageJSX.current = <Reading />;
            setData((prevData) => ({
              ...prevData,
              readingStartTime: Date.now(),
            }));
          },
          3000,
          setBusy
        );
        sequenceFunction();
        break;
      case 4:
        sequenceFunction = executeWithDelayAndBeep(
          () => {
            pageJSX.current = (
              <Test paper={1} setData={setData} setBusy={setBusy} />
            );
            setData((prevData) => ({
              ...prevData,
              readingTestTime: Date.now(),
            }));
          },
          3000,
          setBusy
        );
        sequenceFunction();
        break;
      case 5:
        pageJSX.current = <Ready text="LISTENING" />;
        setData((prevData) => ({
          ...prevData,
          listeningInstructionTime: Date.now(),
        }));
        break;
      case 6:
        sequenceFunction = executeWithDelayAndBeep(
          () => {
            pageJSX.current = <Listening setBusy={setBusy} />;
            setData((prevData) => ({
              ...prevData,
              listeningStartTime: Date.now(),
            }));
          },
          3000,
          setBusy
        );
        sequenceFunction();
        break;
      case 7:
        sequenceFunction = executeWithDelayAndBeep(
          () => {
            pageJSX.current = (
              <Test paper={2} setData={setData} setBusy={setBusy} />
            );
            setData((prevData) => ({
              ...prevData,
              listeningTestTime: Date.now(),
            }));
          },
          3000,
          setBusy
        );
        sequenceFunction();
        break;
      case 8:
        pageJSX.current = <Ready text="VIDEO" />;
        setData((prevData) => ({
          ...prevData,
          videoInstructionTime: Date.now(),
        }));
        break;
      case 9:
        sequenceFunction = executeWithDelayAndBeep(
          () => {
            pageJSX.current = <Video />;
            setData((prevData) => ({
              ...prevData,
              videoStartTime: Date.now(),
            }));
          },
          3000,
          setBusy
        );
        sequenceFunction();
        break;
      case 10:
        sequenceFunction = executeWithDelayAndBeep(
          () => {
            pageJSX.current = (
              <Test paper={3} setData={setData} setBusy={setBusy} />
            );
            setData((prevData) => ({
              ...prevData,
              videoTestTime: Date.now(),
            }));
          },
          3000,
          setBusy
        );
        sequenceFunction();
        break;
      case 11:
        pageJSX.current = <Result data={data} />;
        setData((prevData) => ({
          ...prevData,
          endTime: Date.now(),
        }));
        break;
      default:
        break;
    }
  }, [pageState]);

  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center p-5">
      {/* Counter */}
      <Counter />

      {/* Sequence Page */}
      {pageJSX.current}

      {/* Last Page */}
      {pageState === 11 ? null : (
        <button
          onClick={() => {
            handlePageStateChange(setPageState);
          }}
          className="bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white absolute bottom-4 right-4"
          disabled={busy}
        >
          Next &gt;&gt;
        </button>
      )}
    </div>
  );
};

export default App;
