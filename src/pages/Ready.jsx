/* eslint-disable react/prop-types */
const Ready = ({ text }) => {
  return (
    <div className="w-80 bg-gray-300 rounded shadow-lg overflow-auto max-h-[95%]">
      <h1>
        Are u ready for the <span className="text-blue-500">{text}</span> test?
      </h1>
    </div>
  );
};

export default Ready;
