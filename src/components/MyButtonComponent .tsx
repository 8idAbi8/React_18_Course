import { useState } from "react";

interface Props {
  //function
  onSelectButton: (buttonText: string, setbuttonText: any) => void;
}

const MyButtonComponent = ({ onSelectButton }: Props) => {
  // state hook
  const [buttonText, setbuttonText] = useState("2+2=");

  return (
    <>
      <button
        type="button"
        className={
          buttonText === "2+2="
            ? "btn btn-outline-success btn-lg"
            : "btn btn-outline-primary btn-lg"
        }
        onClick={() => {
          onSelectButton(buttonText, setbuttonText);
        }}
      >
        {buttonText}
      </button>
    </>
  );
};

export default MyButtonComponent;
