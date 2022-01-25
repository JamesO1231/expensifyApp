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

// const user = {
//   name: 'Bob',
//   age: 30,
//   location: 'Denver',
// };
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } 
// };
// const userName = 'Mike'
// const userAge = 27;
// const userLocation = 'Denver';
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

let count = 0;
const addOne = () => {
  console.log('addOne');
};
const minusOne = () => {
  console.log('minusOne');
};
const reset = () => {
  console.log('reset');
};
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
);

console.log(templateTwo);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);