/* eslint-disable react/prop-types */
import { useState } from "react";

const Dashboard = ({ setData }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: 0,
    gender: "Male",
    prof: "Student",
    med: "",
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
    setData({ userData: formData });
  };

  return (
    <div className="w-80 max-h-[95%] bg-gray-300 rounded shadow-lg flex flex-col gap-5 overflow-auto">
      <div>
        <h3>SAM Instructions</h3>
        <hr />
        <ol className="p-5 flex flex-col gap-4">
          <li>
            <strong>Reading</strong>:
            <ul className="flex flex-col gap-2">
              <li>Read the provided text carefully.</li>
            </ul>
          </li>

          <li>
            <strong>Test</strong>:
            <ul className="flex flex-col gap-2">
              <li>
                After completing the reading, proceed to the test section.
              </li>
              <li>
                Answer the multiple-choice questions (MCQs) based on the
                material you&apos;ve read.
              </li>
              <li>Ensure you understand each question before answering.</li>
            </ul>
          </li>

          <li>
            <strong>Listening</strong>:
            <ul className="flex flex-col gap-2">
              <li>Pay attention to the audio material.</li>
            </ul>
          </li>

          <li>
            <strong>Test</strong>:
            <ul className="flex flex-col gap-2">
              <li>
                After completing the listening, proceed to the test section.
              </li>
              <li>
                Answer the MCQs based on the material you&apos;ve listened to.
              </li>
              <li>Ensure you understand each question before answering.</li>
            </ul>
          </li>

          <li>
            <strong>Video Viewing</strong>:
            <ul className="flex flex-col gap-2">
              <li>Watch the video attentively.</li>
            </ul>
          </li>

          <li>
            <strong>Test</strong>:
            <ul className="flex flex-col gap-2">
              <li>After completing the video, proceed to the test section.</li>
              <li>
                Answer the MCQs based on the material you&apos;ve watched.
              </li>
              <li>Ensure you understand each question before answering.</li>
            </ul>
          </li>
        </ol>
      </div>
      <div>
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
                  return { ...prevFormData, consent: !prevFormData.consent };
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
            <label htmlFor="grade">Marks in HS:</label>
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
          <div className="flex flex-col gap-1">
            <button
              onClick={submitForm}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Save User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
