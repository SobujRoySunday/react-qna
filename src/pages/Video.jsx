import VIDEO from "../assets/video1.mp4";

const Video = () => {
  return (
    <div className="w-80 bg-gray-300 rounded shadow-lg overflow-auto max-h-[95%] lg:w-[60%] lg:min-h-[60%] flex justify-center items-center">
      <video width="1280" height="720" controls autoPlay>
        <source src={VIDEO} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
