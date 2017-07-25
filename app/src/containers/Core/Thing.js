/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Thing from 'src/components/Core/Thing';
import { updateThingInput, deleteThing, addThing } from 'src/store/reducer';


/* Map */
// state
const mapStateToProps = (state, { id }) => ({
  thing: state.things.byId[id],
  sharing: state.sharing,
});

// dispatch
const mapDispatchToProps = (dispatch, { id }) => ({
  actions: {
    updateInput: string => dispatch(updateThingInput(id, string)),
    delete: () => dispatch(deleteThing(id)),
    addThing: () => dispatch(addThing()),
  },
});


/* Connect */
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Thing);


/* Export */
export default container;
