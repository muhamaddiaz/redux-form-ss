import Component from './component';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

const Connected = connect(mapStateToProps, null)(Component);

export default Connected;
