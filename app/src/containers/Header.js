/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Header from 'src/components/Header';
import { showHow } from 'src/store/reducer';


/* Map */
// state
const mapStateToProps = state => ({
  display: state.displayHow,
});

// dispatch
const mapDispatchToProps = dispatch => ({
  actions: {
    show: () => dispatch(showHow()),
  },
});


/* Connect */
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);


/* Export */
export default container;
