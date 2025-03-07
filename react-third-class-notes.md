## Laying The Foundation :rocket:

- Here in the **App.js** file, when we write JSX syntax which means 'HTML like syntax', it transfile the code that browser understands and React understand format through the **'Babel'** package imported by the parcel.

- **Components** - There are two types of components

  1. **Class Based Component** - Old way of writing the code using Classes.
  2. **Funtional Component** - New way of writing the code using Functions.

1. **Functional Components** - A functional component in React is a JavaScript function that returns JSX (React elements). It is a simple, reusable way to create UI components.

```Javascript
  const HeadingComponent = () => {
  return <h1 className="heading" tabIndex="1">Hi, This is Heading Component</h1>;
};

// or


const HeadingComponent2 = () => <h1 className="head" tabIndex="2">Hi, This is Second Heading Component</h1>;

// render into HTML by
root.render(<HeadingComponent />);

```

- Here, when we write **{}** in **arrow functions** we definitely write the **return** statement.

- Otherwise, if we write **()** in **arrow functions** no need to write **return** statement.

---

- For variable we structure as with small letters which is return single jsx element.
- For Functional Componenet we structure as starting with Capital letter in Pascal Case.
- ```Javascript
  // JSX element
  const heading = (<h1 className="head" tabIndex="1">Hi, This is in JSX</h1>);
  root.render(heading);

  // JSX Functional Component
  const HeadingComponent = () => {
    return <h1 className="heading" tabIndex="1">Hi, This is Heading Component</h1>;
  };
  root.render(<HeadingComponent />);
  ```

- **Functional Composition - Appending one function component into other component.**
- ```Javascript
  // Function Composition
  const TitleComp = () => {
    return <div>
      <h1>This is Title heading</h1>
      <button>Click</button>
    </div>
  };

  const ContainerComp = () => {
    return <div>
      <TitleComp />   // Title Component Composed in Container Component
      <p>This is the information of Title</p>
    <div>
  }
  ```

- ### **We can write or inject JavaScript code into JSX code by using {}**.
- ### **Even we can write JSX code in {}**.
- ### **We can compose React Element in other react elements or components** and **Composing React Components into other components or elements**.

#### **JSX cares about the application like, if we pass the data which is from external source it cleans up and sanitize the code if there is any malicious attack which is known as _Cross Side Scripting_.**

#### At end of the day all the code into JS, We can write Functional Component in three ways:

- ```javascript
  <FunctionalComp />
  <FunctionalComp></FunctionalComp>
  {FunctionalComp()}   // we can write in flower parenthesis as normal java script.
  ```
