import React from "react";

//import any components needed
import NumberButton from "./NumberButton";
//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const { numbers } = props;
  return (
    <div>
      {
      /* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/
        numbers.map(
          (number) => (
            <NumberButton
              key={number}
              number={number}
            />
          )
        )
      }
    </div>
  );
};

export default Numbers;