/* eslint-disable react/prop-types */
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
    <h3>Listen Carefully...</h3>
  ) : (
    <h3>Now you may proceed to the next round :)</h3>
  );
};

export default Listening;
