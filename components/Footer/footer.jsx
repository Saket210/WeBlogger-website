import React from "react";

const footer = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        background:'black',
        alignItems:'center',
        marginTop: '30px',
      }}
    >
      <h6 style={{color:'white', fontSize: '15px', margin: '10px'}}>WeBlogger</h6>
      <p style={{ color: "white" }}>
        All rights reserved. Copyright @WeBlogger
      </p>
    </div>
  );
};

export default footer;
