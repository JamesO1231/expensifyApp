console.log('App.js is running');

var app = {
  title: 'Indecision App',
  subtitle: 'Give in to the power of the computer',
  options: ['One', 'Two']
};
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>First</li>
      <li>Second</li>
    </ol>
  </div>
);

var user = {
  name: 'Bob',
  age: 30,
  location: 'Denver',
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } 
};
var userName = 'Mike'
var userAge = 27;
var userLocation = 'Denver';
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);