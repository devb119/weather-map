import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#3697d1",
};

const RoundSpinner = (props) => {
  return (
    <div className="p-5">
      <MoonLoader
        color={"#3697d1"}
        loading={true}
        cssOverride={override}
        size={40}
        {...props}
      />
    </div>
  );
};

export default RoundSpinner;
