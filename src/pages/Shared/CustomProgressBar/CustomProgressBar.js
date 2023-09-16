import React, { useEffect, useState } from "react";

function CustomProgressBar({ level, progressValue, oddBar }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(progressValue);
  }, [progressValue]);

  return (
    <div
      className={`progress-container d-flex ${
        oddBar ? "justify-content-end text-end" : "justify-content-left"
      }`}
    >
      <div
        className={"custom-progress-bar px-3 py-1"}
        style={{ width: `${width}%` }}
      >
        {level}
      </div>
    </div>
  );
}

export default CustomProgressBar;
