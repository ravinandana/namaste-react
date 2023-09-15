/*
    <div id="parent">
        <div id="child">
            <h1>I am tag</h1>
        </div>    
    </div>


*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am tag"),
    React.createElement("h2", {}, "I am tag"),
  ]),
]);

const parent2 = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I am tag"),
      React.createElement("h2", {}, "I am tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am tag"),
      React.createElement("h2", {}, "I am tag"),
    ]),
  ]);

// const heading = React.createElement("h1", {id: "heading", className:"head"}, "Hello from React library");

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
