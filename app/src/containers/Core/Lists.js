/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Lists from 'src/components/Core/Lists';
import { addThing, addPeople } from 'src/store/reducer';


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
  },
});


/* Connect */
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lists);


/* Export */
export default container;
