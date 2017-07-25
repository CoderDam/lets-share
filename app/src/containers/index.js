/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Component from 'src/components/Component';
import { actionCreator } from 'src/store/reducer';


/* Map */
// state
const mapStateToProps = undefined;

// dispatch
const mapDispatchToProps = undefined;


/* Connect */
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);


/* Export */
export default container;
