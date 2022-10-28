import React from "react";

const OutputDetails = ({ outputDetails }) => {
  return (
    <div className="metrics-container mt-4 flex flex-row ">
      <p className="text-sm" style={{"color":"white"}}>
        Status:{" "}
        <span className="font-semibold px-2 py-1 rounded-md">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm"style={{"color":"white"}}>
        Memory:{" "}
        <span className="font-semibold px-2 py-1 rounded-md">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-sm"style={{"color":"white"}}>
        Time:{" "}
        <span className="font-semibold px-2 py-1 rounded-md ">
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;