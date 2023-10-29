import React from "react";
import { formatSeconds } from "../../utils/helpers";

const DisplayTime = ({ text, children}) => {
  // Convert seconds to a mm:ss string
  // text = formatSeconds(text);
  
  return (
    <div>
    {children}{formatSeconds(text)}
    </div>
  );
};

export default DisplayTime;
