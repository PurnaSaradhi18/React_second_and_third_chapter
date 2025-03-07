import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> ReactElement.JS (object) ==> ReactDOM ==> Converts into HTML
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World, This is Purna"
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// ------------------------------------------------------------------------------------------------------------------------------------

// JSX - HTML like syntax / XML like syntax
// JSX ==> React.createElement ==> ReactElement.JS (object) ==> ReactDOM ==> Converts into HTML
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Hi, This is in JSX
  </h1>
);
console.log(jsxHeading);
root.render(jsxHeading);

// React Functional Componenets
const HeadingComponent = () => {
  return (
    <h1 className="heading" tabIndex="1">
      Hi, This is Heading Component
    </h1>
  );
};
root.render(<HeadingComponent />);

const HeadingComponent2 = () => (
  <h1 className="head" tabIndex="2">
    Hi, This is Second Heading Component
  </h1>
);
root.render(<HeadingComponent2 />);

const ele = <span>This is React variable.</span>;

const HeadingComponent3 = () => (
  <div>
    <h1>This is Functional Component</h1>
  </div>
);

const title = (
  <h1 className="head" tabIndex="3">
    {ele}Hi, This is Title Variable <HeadingComponent3 />
  </h1> // dont add div into h1 it doesn't make sense
);

root.render(title);
