import React from "react";
import { DeleteButton, KeyboardButton, SubmitButton } from "./Buttons"; 

const MobileKeyboard = ({ onKeyPress, onSubmit, disabled }) => {
    const firstRowDigits = ["1", "2", "3"];
    const secondRowDigits = ["4", "5", "6"];
    const thirdRowDigits = ["7", "8", "9"];
    const lastRowDigits = ["0"];
  
    return (
      <div className="mobile-number-keyboard">
        <div className="mobile-number-row">
          {firstRowDigits.map((digit) => (
            <KeyboardButton
              key={digit}
              onClick={() => onKeyPress(digit)}
              className="mobile-number-key"
            >
              {digit}
            </KeyboardButton>
          ))}
        </div>
        <div className="mobile-number-row">
          {secondRowDigits.map((digit) => (
            <KeyboardButton
              key={digit}
              onClick={() => onKeyPress(digit)}
              className="mobile-number-key"
            >
              {digit}
            </KeyboardButton>
          ))}
        </div>
        <div className="mobile-number-row">
          {thirdRowDigits.map((digit) => (
            <KeyboardButton
              key={digit}
              onClick={() => onKeyPress(digit)}
              className="mobile-number-key"
            >
              {digit}
            </KeyboardButton>
          ))}
        </div>
        <div className="mobile-number-row">
          <DeleteButton onClick={() => onKeyPress("backspace")} className="mobile-number-key">
            ⌫
          </DeleteButton>
          <KeyboardButton onClick={() => onKeyPress(lastRowDigits[0])} className="mobile-number-key">
            {lastRowDigits[0]}
          </KeyboardButton>
          <SubmitButton onClick={onSubmit} className="mobile-number-key" disabled={disabled}>
            Go
          </SubmitButton>
        </div>
      </div>
    );
  };
  
  export default MobileKeyboard;