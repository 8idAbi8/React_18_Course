// .tsx usually used for react component (instead of .ts used for plain ts files)

/**there are 2 ways for creating react components: js class or a function  (the second option is more faster, concise and popular, older projects may be using js class) */

// function react component
function Message() {
  // JSX: JavaScript XML
  const name = "idi";
  return <h1>Hello {name.toUpperCase()}</h1>;
}

/**  to use the component, we have to export it as a default object on this module */
export default Message;
