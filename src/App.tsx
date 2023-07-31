import MyButtonComponent from "./components/MyButtonComponent ";

function App() {
  // handle event function
  const handleClick = (buttonText: string, setbuttonText: any) => {
    if (buttonText === "2+2=") setbuttonText("3+1=");
    else setbuttonText("2+2=");
  };

  return (
    <button>
      <MyButtonComponent onSelectButton={handleClick} />
    </button>
  );
}

export default App;
