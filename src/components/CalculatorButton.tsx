import { useState } from "react";
/**This React component is a dynamic calculator-like button that performs addition based on the provided num1 and num2 props. It utilizes useState to manage the button's content and color, and the sumFunc function ensures correct addition operation. */

interface Props {
  color: string;
  num1: number;
  num2: number;
  handleNumberChange: (nsetRandomNumbers: any) => void;
  handleChangeButtonColor: (setButtonColor: any) => void;
}

const sumFunc = (inputString: string): number | null => {
  // Split string using '+' operator
  const numbersArray = inputString.split("+");

  // Check if there are two elements in the array after splitting
  if (numbersArray.length === 2) {
    const number1 = parseInt(numbersArray[0], 10);
    const number2 = parseInt(numbersArray[1], 10);

    // Check if the two elements are valid numbers
    if (!isNaN(number1) && !isNaN(number2)) {
      const sum = number1 + number2;
      return sum;
    }
  }
  // Return null if the string is not in the correct format or if the numbers are invalid
  return null;
};

// Render Function
const CalculatorButton = ({
  color,
  num1,
  num2,
  handleNumberChange,
  handleChangeButtonColor,
}: Props) => {
  // numbers state hook
  const [randomNumbers, setRandomNumbers] = useState(
    num1 + " + " + num2 + " = "
  ); // initial addition

  // colors state hook
  const [buttonColorClass, setButtonColor] = useState("primary"); // initial color

  return (
    <>
      <button
        type="button"
        className={"btn btn-lg btn-outline-" + buttonColorClass}
        onClick={() => {
          handleNumberChange(setRandomNumbers);
          handleChangeButtonColor(setButtonColor);
        }}
      >
        {randomNumbers + sumFunc(randomNumbers)}
      </button>
    </>
  );
};

export default CalculatorButton;
