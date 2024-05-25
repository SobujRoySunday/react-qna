/* eslint-disable react/prop-types */
import TINTLOGO from "../assets/logo.jpeg";
import USER from "../assets/user.png";
import { useState, useEffect } from "react";

const Dashboard = ({ setData }) => {
  const [busy, setBusy] = useState(true);
  const [formButton, setFormButton] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    age: 0,
    gender: "Male",
    prof: "Student",
    med: "No",
    consent: true,
    confidential: false,
    grade: "AA",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setData((prevData) => ({ ...prevData, userData: formData }));
    setBusy(false);
  };

  useEffect(() => {
    if (formData.fullName === "" || formData.age === 0 || formData.med === "") {
      setFormButton(false);
    } else {
      setFormButton(true);
    }
  }, [formData]);

  return (
    <div className="rounded-xl border-[1px] border-blue-500 w-[95%] h-[95%] p-2 flex flex-col overflow-auto">
      <h1 className="text-xl italic font-semibold text-blue-500">DASHBOARD</h1>
      <div className="h-[95%] grid grid-cols-2">
        <div className="flex justify-center items-center border-r-[1px] border-blue-500">
          <div className="bg-gray-200 rounded-xl shadow-xl border-[1px] border-blue-500 p-10 flex flex-col justify-center items-center">
            <img src={TINTLOGO} className="mix-blend-multiply" />
            <h1 className="text-5xl">Welcome to SAM test</h1>
            <div className="flex flex-row gap-5 mt-8">
              <button
                disabled={busy}
                className={`border-2 border-blue-500 rounded-full w-20 h-20 flex justify-center items-center hover:bg-gray-100 ${
                  busy ? "bg-gray-100 border-blue-300" : "bg-gray-200"
                }`}
              >
                <svg
                  height={30}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className={busy ? "fill-gray-400" : "fill-black"}
                >
                  <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                </svg>
              </button>
              <button
                disabled={busy}
                className={`border-2 border-blue-500 rounded-full w-20 h-20 flex justify-center items-center hover:bg-gray-100 ${
                  busy ? "bg-gray-100 border-blue-300" : "bg-gray-200"
                }`}
              >
                <svg
                  height={30}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className={busy ? "fill-gray-400" : "fill-black"}
                >
                  <path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" />
                </svg>
              </button>
              <button
                disabled={busy}
                className={`border-2 border-blue-500 rounded-full w-20 h-20 flex justify-center items-center hover:bg-gray-100 ${
                  busy ? "bg-gray-100 border-blue-300" : "bg-gray-200"
                }`}
              >
                <svg
                  height={30}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className={busy ? "fill-gray-400" : "fill-black"}
                >
                  <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {busy ? (
            <div className="bg-gray-200 rounded-xl shadow-lg border-[1px] border-blue-500 p-10 w-96 h-fit">
              <h3>Let us know you</h3>
              <hr />
              <form className="flex flex-col p-4 gap-2">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="fullName"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="age">Age:</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="gender">Gender:</label>
                  <select id="gender" name="gender" onChange={handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="prof">Profession:</label>
                  <select id="prof" name="prof" onChange={handleChange}>
                    <option value="Student">Student</option>
                    <option value="Professor">Professor</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="med">Any medical conditions:</label>
                  <input
                    type="text"
                    id="med"
                    name="med"
                    value={formData.med}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    onChange={() =>
                      setFormData((prevFormData) => {
                        return {
                          ...prevFormData,
                          consent: !prevFormData.consent,
                        };
                      })
                    }
                    checked={formData.consent}
                  />
                  <label htmlFor="consent">
                    I&apos;m part of this research voluntarily
                  </label>
                </div>
                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    id="confidential"
                    name="confidential"
                    onChange={() =>
                      setFormData((prevFormData) => {
                        return {
                          ...prevFormData,
                          confidential: !prevFormData.confidential,
                        };
                      })
                    }
                    checked={formData.confidential}
                  />
                  <label htmlFor="confidential">
                    I don&apos;t want to disclose my name
                  </label>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="grade">Marks in 10+2:</label>
                  <select id="grade" name="grade" onChange={handleChange}>
                    <option value="AA">above 90</option>
                    <option value="A+">80 to 90</option>
                    <option value="A">70 to 80</option>
                    <option value="B">60 to 70</option>
                    <option value="C">50 to 60</option>
                    <option value="D">40 to 50</option>
                    <option value="F">40 & below</option>
                  </select>
                </div>
                <button
                  onClick={submitForm}
                  disabled={!formButton}
                  className={` rounded-lg py-2 text-white ${
                    formButton ? "bg-blue-500" : "bg-blue-300"
                  }`}
                >
                  Save User
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-gray-200 rounded-xl shadow-lg border-[1px] border-blue-500 p-10 w-96 h-fit flex flex-col justify-center items-center">
              <img src={USER} />
              <h3>{formData.fullName}</h3>
              <div className="grid grid-cols-2">
                <div className="p-1">
                  <p className="text-sm text-blue-600">Age:</p>
                  <p className="text-sm text-blue-600">Gender:</p>
                  <p className="text-sm text-blue-600">Profession:</p>
                  <p className="text-sm text-blue-600">Grade:</p>
                </div>
                <div className="p-1">
                  <p className="text-sm">{formData.age}</p>
                  <p className="text-sm">{formData.gender}</p>
                  <p className="text-sm">{formData.prof}</p>
                  <p className="text-sm">{formData.grade}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
