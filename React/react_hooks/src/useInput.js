import { useState } from "react";

const useInput = (initalvalue, validator) => {
  const [value, setValue] = useState(initalvalue);
  const onChange = (event) => {
    //const value = event.target.value;
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value); //value 유효성 검사
    }
    //특정문자 검증 기능
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default useInput;
