import { PASSAGE } from "../conf";

const Reading = () => {
  return (
    <div className="w-80 bg-gray-300 rounded shadow-lg overflow-auto max-h-[95%]">
      <h3>Read the passage</h3>
      <hr />
      <div>
        <p>{PASSAGE}</p>
      </div>
    </div>
  );
};

export default Reading;
