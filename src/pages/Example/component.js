import React from 'react';

class Example extends React.Component {
  _handleSetGreetingClick = () => {
    this.props.setGreetingAction('Welcome to')
  }

  _handleSetNameClick = () => {
    this.props.setNameAction('Senegal')
  }

  render() {
    const { greeting, name } = this.props

    return (
      <div>
        <h1>{`${greeting} ${name}`}</h1>
        <button onClick={this._handleSetGreetingClick}>set greeting</button>
        <button onClick={this._handleSetNameClick}>set name</button>
      </div>
    )
  }
}

export default Example;
