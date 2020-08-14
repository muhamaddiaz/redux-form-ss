import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Example from './pages/Example';
import ReduxInput from "./pages/ReduxInput";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.input = React.createRef()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path={'/'} component={Example} />
          <Route exact path={'/redux-input'} component={ReduxInput} />
          <Route render={() => (
            <h1>404 Not Found</h1>
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
