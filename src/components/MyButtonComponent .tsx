import { useState } from "react";

const MyButtonComponent = () => {
  // state hook
  const [buttonText, setbuttonText] = useState("2+2=");

  // handle event function
  const handleClick = () => {
    if (buttonText === "2+2=") setbuttonText("3+1=");
    else setbuttonText("2+2=");
  };

  return (
    <>
      <button type="button" className="btn btn-success" onClick={handleClick}>
        {buttonText}
      </button>
    </>
  );
};

export default MyButtonComponent;
