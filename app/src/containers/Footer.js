/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Footer from 'src/components/Footer';
import { reboot } from 'src/store/reducer';


/* Map */
// state
const mapStateToProps = undefined;

// dispatch
const mapDispatchToProps = dispatch => ({
  actions: {
    reboot: () => dispatch(reboot()),
  },
});


/* Connect */
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);


/* Export */
export default container;
