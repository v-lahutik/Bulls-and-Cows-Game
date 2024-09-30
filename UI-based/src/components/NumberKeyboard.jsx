import React from "react";
import { DeleteButton, KeyboardButton, SubmitButton } from "./Buttons"; 


const NumberKeyboard = ({ onKeyPress, onSubmit, disabled }) => {
    const firstRowDigits = ["0", "1", "2", "3", "4"];
    const secondRowDigits = ["5", "6", "7", "8", "9"];
  
    return (
      <div className="number-keyboard">
        <div className="number-row">
          {firstRowDigits.map((digit) => (
            <KeyboardButton
              key={digit}
              onClick={() => onKeyPress(digit)}
              className="number-key"
            >
              {digit}
            </KeyboardButton>
          ))}
          <DeleteButton onClick={() => onKeyPress("backspace")} className="number-key">
            ⌫
          </DeleteButton>
        </div>
        <div className="number-row">
          {secondRowDigits.map((digit) => (
            <KeyboardButton
              key={digit}
              onClick={() => onKeyPress(digit)}
              className="number-key"
            >
              {digit}
            </KeyboardButton>
          ))}
          <SubmitButton onClick={onSubmit} className="number-key" disabled={disabled}>
            Go
          </SubmitButton>
        </div>
      </div>
    );
  };
  
  export default NumberKeyboard;