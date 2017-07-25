/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Core from 'src/components/Core';
import { addThing, addPeople, share } from 'src/store/reducer';


/* Map */
// state
const mapStateToProps = state => ({
  things: state.things,
  people: state.people,
  sharing: state.sharing,
});

// dispatch
const mapDispatchToProps = dispatch => ({
  actions: {
    addThing: () => dispatch(addThing()),
    addPeople: () => dispatch(addPeople()),
    share: () => dispatch(share()),
  },
});


/* Connect */
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Core);


/* Export */
export default container;
