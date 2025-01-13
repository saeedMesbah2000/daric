/*
  this compoent is for handling input's state such as value or blur

  arguments : 

  1- valueValidation : it is an evaluation function that returns true if the input is correct acourding to the function
  
  2- input : it is a defualt value and if it's not provided it will be empty string 
*/

import {useState} from "react";

const useInput = (valueValidation, input = "") => {
  const [inputValue, setInputValue] = useState(input);
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = valueValidation(inputValue);
  const hasError = !inputIsValid && inputIsTouched;

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onBlurHandler = (event) => {
    setInputIsTouched(true);
  };

  const onResetHandler = (event) => {
    setInputValue("");
    setInputIsTouched(false);
  };

  return {
    value: inputValue,
    inputIsValid,
    hasError,
    onBlurHandler,
    onChangeHandler,
    onResetHandler,
  };
};

export default useInput;
