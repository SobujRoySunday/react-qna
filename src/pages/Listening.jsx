import { useState, useEffect } from "react";
import SOUND from "../assets/sound.mp3";

const Listening = () => {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);

  useEffect(() => {
    const sound = new Audio(SOUND);
    setIsSoundPlaying(true);
    sound.play();
    sound.addEventListener("ended", () => {
      setIsSoundPlaying(false);
    });
  }, []);
  return isSoundPlaying ? (
    <div>Listen Carefully</div>
  ) : (
    <div>Now you may proceed to the next round</div>
  );
};

export default Listening;
