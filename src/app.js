class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.pickOption = this.pickOption.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'Things four']
    };
  }
  deleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  pickOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
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
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
        onClick={this.props.pickOption}
        disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
        <button onClick={this.props.deleteOptions}>Remove All</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));