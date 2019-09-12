import React from "react";

const NumberButton = (props) => {
  const { number, nextButton } = props;
  return (
    <>
      <button className="button numberButton" onClick={evt => nextButton(number)}>{number}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;