console.log('App.js is running');

// JSX - Javascript XML
// var template = <p>This is JSX from app.js</p>;
var template = (
  <div>
    <h1>Nailed it</h1>
    <p>Words</p>;
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);