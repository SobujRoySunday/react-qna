import { useState, useEffect } from "react";
import SOUND from "../assets/sound.mp3";

const Listening = ({ setBusy }) => {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);

  useEffect(() => {
    setBusy(true);
    const sound = new Audio(SOUND);
    setIsSoundPlaying(true);
    sound.play();
    sound.addEventListener("ended", () => {
      setIsSoundPlaying(false);
      setBusy(false);
    });
  }, []);
  return isSoundPlaying ? (
    <div>Listen Carefully</div>
  ) : (
    <div>Now you may proceed to the next round</div>
  );
};

export default Listening;
