import Alert from "./components/Alert";

function App() {
  return (
    <div>
      {/**Alert component accepts a single prop called children, which represents the content enclosed in <Alert>...</Alert> tags */}
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
