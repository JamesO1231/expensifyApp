import React from 'react';
import Option from './option'

const Options = (props) => (
  <div>
  {props.options.length === 0 && <p>Please add an option to start</p>}
    {
      props.options.map((option) => (
        <Option 
          key={option} 
          optionText={option}
          removeOption={props.removeOption}
        />
      ))
    }
    <button onClick={props.deleteOptions}>Remove All</button>
  </div>
);

export default Options;