export const generateUniqueDigits = () => {
    let digits = "";
    while (digits.length < 4) {
      let randomDigit = Math.floor(Math.random() * 10).toString();
      if (!digits.includes(randomDigit)) {
        digits += randomDigit;
      }
    }
    return digits;
  };

  export const areDigitsUnique = (number) => {
    const numString = number.toString();
    const uniqueDigits = numString
      .split("")
      .filter((digit, index, array) => array.indexOf(digit) === index);
    return uniqueDigits.length === 4;
  };

  export const onlyDigits=(str)=>{
    var regex = /^\d+$/;
    return regex.test(str);
  }
  
