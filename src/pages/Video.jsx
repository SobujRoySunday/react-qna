import VIDEO from "../assets/video.mp4";

const Video = () => {
  return (
    <div className="w-80 bg-gray-300 rounded shadow-lg overflow-auto max-h-[95%]">
      <video width="320" height="240" controls autoPlay>
        <source src={VIDEO} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
