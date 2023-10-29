import React from "react";

const DisplayTime = ({ text, children}) => {
  return (
    <div>
    {children}{text}
    </div>
  );
};

export default DisplayTime;
