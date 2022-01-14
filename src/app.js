console.log('App.js is running');

// JSX - Javascript XML
// var template = <p>This is JSX from app.js</p>;
// var template = (
//   <div>
//     <h1>Nailed it</h1>
//     <p>Words</p>;
//     <ol>
//       <li>First</li>
//       <li>Second</li>
//     </ol>
//   </div>
// );

var templateTwo = (
  <div>
    <h1>James</h1>
    <p>Age: 30</p>
    <p>Location: New York</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);