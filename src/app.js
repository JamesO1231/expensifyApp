console.log('App.js is running');

var app = {
  title: 'Indecision App',
  subtitle: 'Give in to the power of the computer',
}
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>First</li>
      <li>Second</li>
    </ol>
  </div>
);

var user = {
  name: 'Bob',
  age: 26,
  location: 'New York',
}
var userName = 'Mike'
var userAge = 27;
var userLocation = 'Denver';
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);