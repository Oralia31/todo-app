import React from "react";
import { lineSpinner } from "ldrs";
import "./Loader.css";

const Loader = () => {
  React.useEffect(() => {
    lineSpinner.register();
  }, []);

  return (
    <div className="containerLoader">
      <l-line-spinner
        size="40"
        stroke="3"
        speed="1"
        color="black"
      ></l-line-spinner>
    </div>
  );
};

export default Loader;
