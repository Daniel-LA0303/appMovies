import React from "react";
import './Spinner.css'

const Spinner = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
        <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
    </div>
  );
};

export default Spinner;
