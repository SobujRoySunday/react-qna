import { useEffect, useRef, useState } from "react";
import {
  Dashboard,
  Listening,
  Reading,
  Ready,
  Result,
  Test,
  Video,
} from "./pages";

const App = () => {
  function downloadObjectAsJson(obj, fileName = "data.json") {
    // Convert object to JSON string
    const jsonString = JSON.stringify(obj, null, 2);

    // Create a blob from the JSON string
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create a link element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // Append the link to the document body and click it to start the download
    document.body.appendChild(link);
    link.click();

    // Remove the link element from the document
    document.body.removeChild(link);
  }
  function playBeep() {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // 440 Hz is the frequency of the A4 note
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(
      0.00005,
      audioContext.currentTime + 1
    ); // Beep lasts 1 second

    oscillator.stop(audioContext.currentTime + 1);
  }
  function executeWithDelayAndBeep(fn, delay = 3000) {
    return function () {
      let state = delay / 1000;
      document.getElementById("container").classList.remove("hidden");
      document.getElementById("container").classList.add("flex");
      const dom = document.getElementById("counter");
      dom.innerText = state;

      // Change state every second
      const intervalId = setInterval(() => {
        state -= 1;
        console.log(state);
        dom.innerText = state;
      }, 1000);

      // After 'delay' milliseconds, play beep and execute the function
      setTimeout(() => {
        clearInterval(intervalId); // Stop the state changes
        playBeep();
        setTimeout(() => {
          fn();
        }, 1000); // Execute the function 1 second after the beep starts
        document.getElementById("container").classList.add("hidden");
        document.getElementById("container").classList.remove("flex");
      }, delay);
    };
  }

  const [pageState, setPageState] = useState(0);
  const [data, setData] = useState({});
  const pageJSX = useRef(null);
  const [busy, setBusy] = useState(false);

  console.log(data);

  const handleOperation = () => {
    setPageState((prevPageState) => prevPageState + 1);
  };

  useEffect(() => {
    if (pageState === 0) {
      pageJSX.current = <Dashboard setData={setData} setBusy={setBusy} />;
      setData({ startTime: Date.now() });
    } else if (pageState === 1) {
      pageJSX.current = <Ready text="READING" />;
      setData((prevData) => ({
        ...prevData,
        readingInstructionTime: Date.now(),
      }));
    } else if (pageState === 2) {
      const fun = executeWithDelayAndBeep(() => {
        pageJSX.current = <Reading />;
        setData((prevData) => ({
          ...prevData,
          readingStartTime: Date.now(),
        }));
      });
      fun();
    } else if (pageState === 3) {
      const fun = executeWithDelayAndBeep(() => {
        pageJSX.current = (
          <Test paper={1} setData={setData} setBusy={setBusy} />
        );
        setData((prevData) => ({
          ...prevData,
          readingTestTime: Date.now(),
        }));
      });
      fun();
    } else if (pageState === 4) {
      pageJSX.current = <Ready text="LISTENING" />;
      setData((prevData) => ({
        ...prevData,
        listeningInstructionTime: Date.now(),
      }));
    } else if (pageState === 5) {
      const fun = executeWithDelayAndBeep(() => {
        pageJSX.current = <Listening setBusy={setBusy} />;
        setData((prevData) => ({
          ...prevData,
          listeningStartTime: Date.now(),
        }));
      });
      fun();
    } else if (pageState === 6) {
      const fun = executeWithDelayAndBeep(() => {
        pageJSX.current = (
          <Test paper={2} setData={setData} setBusy={setBusy} />
        );
        setData((prevData) => ({
          ...prevData,
          listeningTestTime: Date.now(),
        }));
      });
      fun();
    } else if (pageState === 7) {
      pageJSX.current = <Ready text="VIDEO" />;
      setData((prevData) => ({
        ...prevData,
        videoInstructionTime: Date.now(),
      }));
    } else if (pageState === 8) {
      const fun = executeWithDelayAndBeep(() => {
        pageJSX.current = <Video />;
        setData((prevData) => ({
          ...prevData,
          videoStartTime: Date.now(),
        }));
      });
      fun();
    } else if (pageState === 9) {
      const fun = executeWithDelayAndBeep(() => {
        pageJSX.current = (
          <Test paper={3} setData={setData} setBusy={setBusy} />
        );
        setData((prevData) => ({
          ...prevData,
          videoTestTime: Date.now(),
        }));
      });
      fun();
    } else if (pageState === 10) {
      pageJSX.current = <Result data={data} download={downloadObjectAsJson} />;
      setData((prevData) => ({
        ...prevData,
        resultTime: Date.now(),
      }));
    }
  }, [pageState]);

  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center p-5">
      <div
        id="container"
        className="w-screen h-screen bg-gray-950 opacity-70 text-white hidden justify-center items-center absolute top-0 left-0"
      >
        <h1 id="counter"></h1>
      </div>
      {pageJSX.current}
      {pageState === 10 ? null : (
        <button
          onClick={handleOperation}
          className={`${
            busy ? "bg-green-300" : "bg-green-500 hover:bg-green-600"
          }  text-white absolute bottom-4 right-4`}
          disabled={busy}
        >
          Next &gt;&gt;
        </button>
      )}
    </div>
  );
};

export default App;
