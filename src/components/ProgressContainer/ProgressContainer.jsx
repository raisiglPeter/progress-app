import "./ProgressContainer.css";

function ProgressContainer() {
  const progressNodes = [
    { title: "workout 1", checkmarks: [true, true, false, false] },
    { title: "workout 2", checkmarks: [true, true, false, false] },
    { title: "workout 3", checkmarks: [true, true, false, false] },
    { title: "workout 4", checkmarks: [true, true, false, false] },
  ];

  return (
    <ul className="progress-container">
      {progressNodes
        .map((node) => (
          <li>
            <p>{node.title}</p>
            <div className="progress-nodes"></div>
          </li>
        ))
        .reverse()}
    </ul>
  );
}

export default ProgressContainer;
