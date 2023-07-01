/*
 *      <div id="parent">
 *           <div id="child">
 *               <h1></h1>
 *           </div>
 *       </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 Tag"),
    React.createElement("h2", {}, "I am an h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 Tag"),
    React.createElement("h2", {}, "I am an h2 Tag"),
  ]),
]);

//JSX

console.log(parent); //Javascript object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //render converts the object into the tag and puts it up on the webpage
