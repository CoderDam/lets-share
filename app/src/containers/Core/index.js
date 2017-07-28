/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Core from 'src/components/Core';


/* Map */
// state
const mapStateToProps = state => ({
  over: state.over,
});

// dispatch
const mapDispatchToProps = undefined;


/* Connect */
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Core);


/* Export */
export default container;
