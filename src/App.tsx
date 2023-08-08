import { useState } from "react";
import Alert from "./components/Alert";
import MyButtonComponent from "./components/MyButtonComponent ";

// handle event function
const handleClick = (buttonText: string, setbuttonText: any) => {
  if (buttonText === "2+2=") setbuttonText("3+1=");
  else setbuttonText("2+2=");
};

/**Render function */
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert
          children={"Click X to remove Alert"}
          onClose={() => setAlertVisibility(false)}
        />
      )}

      <MyButtonComponent
        onSelectButton={handleClick}
        buttonClicked={() => setAlertVisibility(true)}
      />
    </div>
  );
}

export default App;
