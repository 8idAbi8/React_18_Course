import { useState } from "react";
/**This React component is a calculator button that generates random addition problems with two random numbers and updates its color on each click. It utilizes state hooks to manage the random numbers and the button's color class for dynamic content and interactive behavior. */

/**Number */
function getRandomNumber(): string {
  // Get a random number between 1 and 10 (inclusive)
  return (Math.floor(Math.random() * 10) + 1).toString();
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

/**Color */
const getRandomColor = () => {
  const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

// Render Function
const CalculatorButton = () => {
  // numbers state hook
  const [randomNumbers, setRandomNumbers] = useState(
    getRandomNumber() + "+" + getRandomNumber() + "="
  );

  const handleNumberChange = () => {
    setRandomNumbers(getRandomNumber() + "+" + getRandomNumber() + "=");
  };

  // colors state hook
  const [buttonColorClass, setButtonColorClass] = useState("primary"); // initial color

  const handleChangeButtonColor = () => {
    const randomColorClass = getRandomColor();
    setButtonColorClass(randomColorClass);
  };

  return (
    <>
      <button
        type="button"
        className={"btn btn-lg btn-outline-" + buttonColorClass}
        onClick={() => {
          handleNumberChange();
          handleChangeButtonColor();
        }}
      >
        {randomNumbers + sumFunc(randomNumbers)}
      </button>
    </>
  );
};

export default CalculatorButton;
