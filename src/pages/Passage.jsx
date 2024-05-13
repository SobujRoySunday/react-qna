import { useNavigate } from "react-router-dom";
import { PASSAGE } from "../conf";
import SOUND from "../assets/sound.mp3";
import { useState } from "react";

const Passage = () => {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const navigate = useNavigate();
  const handler = () => {
    navigate("/test");
  };

  const playArticle = () => {
    const sound = new Audio(SOUND);
    setIsSoundPlaying(true);
    sound.play();
    sound.addEventListener("ended", () => {
      setIsSoundPlaying(false);
    });
  };

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center p-5">
      <div className="flex flex-col justify-center items-center gap-3 bg-slate-400 p-5 h-fit rounded-lg shadow-2xl">
        <h1>SAM Test</h1>
        <button
          onClick={playArticle}
          className={`${
            isSoundPlaying
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded shadow w-full`}
          disabled={isSoundPlaying}
        >
          Play the article
        </button>
        <div className="w-96 bg-gray-300 rounded shadow-lg">
          <h3>Read the passage</h3>
          <hr />
          <div className="overflow-auto h-[90%]">
            <p>{PASSAGE}</p>
          </div>
        </div>
        <button
          onClick={handler}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow w-full"
        >
          Start test
        </button>
      </div>
    </div>
  );
};

export default Passage;
