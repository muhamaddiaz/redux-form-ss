import Component from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';

function mapStateToProps(state) {
  return {
    ...state.example
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
