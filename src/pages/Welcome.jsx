import TINTLOGO from "../assets/logo.jpeg";

const Welcome = () => {
  return (
    <div className="w-80 bg-gray-300 rounded shadow-lg overflow-auto max-h-[95%] lg:w-[60%] lg:min-h-[60%] flex flex-col justify-center items-center">
      <img src={TINTLOGO} className="mix-blend-multiply" />
      <h1 className="text-5xl">Welcome to SAM test</h1>
      <p>Click the next button to proceed to the tests</p>
    </div>
  );
};

export default Welcome;
