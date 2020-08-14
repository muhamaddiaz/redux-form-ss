import React from 'react';

class NewPage extends React.Component {
  render() {
    const { auth } = this.props;

    return (
      <div>
        <div>{auth.username}</div>
        <div>{auth.password}</div>
      </div>
    )
  }
}

export default NewPage;
