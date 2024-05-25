const Instructions = () => {
  return (
    <div className="border-[1px] border-blue-500 rounded-lg bg-gray-200">
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
            <li>After completing the reading, proceed to the test section.</li>
            <li>
              Answer the multiple-choice questions (MCQs) based on the material
              you&apos;ve read.
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
            <li>Answer the MCQs based on the material you&apos;ve watched.</li>
            <li>Ensure you understand each question before answering.</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Instructions;
