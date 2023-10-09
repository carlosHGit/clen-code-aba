import { useState } from "react";
import { generatePassword } from "../utils/generatePassword";

export const usePasswordGenerator = () => {

  const [password, setPassword] = useState();
  const [length, setLength] = useState();


  const handleGeneratePassword = ( addNumbers, addSpecialChars) => {
    setPassword(generatePassword(addNumbers, addSpecialChars, length))
  };

  const handleLength = (e) => {
    setLength(e.target.value)
  };

  return {
    handleGeneratePassword,
    password,
    handleLength
  }

  };