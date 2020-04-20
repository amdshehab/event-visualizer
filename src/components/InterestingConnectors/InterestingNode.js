import React from "react";

const InterestingNode = ({ name, imgUrl }) => {
  return (
    <div
      style={{
        margin: "0 15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <p>{name}</p>
    </div>
  );
};

export default InterestingNode;
