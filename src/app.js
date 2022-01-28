class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of the computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <h2>What would you like for dinner?</h2>
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <h3>This is your option</h3>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <h2>Add an option</h2>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));