import CalculatorButton from "./components/CalculatorButton";

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

const handleChangeButtonColor = (setButtonColor: any) => {
  const randomColor = getRandomColor();
  setButtonColor(randomColor);
};

/**Number */
const handleNumberChange = (setRandomNumbers: any) => {
  setRandomNumbers(getRandomNumber() + " + " + getRandomNumber() + " = ");
};

function getRandomNumber(): number {
  // Get a random number between 1 and 10 (inclusive)
  return Math.floor(Math.random() * 10) + 1;
}

/**Render function */
function App() {
  return (
    <>
      <CalculatorButton
        color={getRandomColor()}
        num1={getRandomNumber()}
        num2={getRandomNumber()}
        handleChangeButtonColor={handleChangeButtonColor}
        handleNumberChange={handleNumberChange}
      />
    </>
  );
}

export default App;
