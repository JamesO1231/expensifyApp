import React from 'react';
import AddOption from './addOption';
import Action from './action';
import Header from './header';
import Options from './options';
import OptionModal from './optionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  deleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  clearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  removeOption = (optionToRemove) => {
    this.setState((prevState) => ({ 
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };
  pickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };
  addOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } 
    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
  
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('componentDidUpdate');
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of the computer';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          pickOption={this.pickOption}
        />
        <Options 
          options={this.state.options} 
          deleteOptions={this.deleteOptions}
          removeOption={this.removeOption}
        />
        <AddOption 
          addOption={this.addOption}
        />
        <OptionModal 
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;