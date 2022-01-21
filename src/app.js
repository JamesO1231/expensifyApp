console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'Give in to the power of the computer',
  options: ['One', 'Two']
};
const template = (
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

const user = {
  name: 'Bob',
  age: 30,
  location: 'Denver',
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } 
};
const userName = 'Mike'
const userAge = 27;
const userLocation = 'Denver';
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);