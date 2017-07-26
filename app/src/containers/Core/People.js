/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import People from 'src/components/Core/People';
import { updatePeopleInput, deletePeople, addPeople, startSharing } from 'src/store/reducer';


/* Map */
// state
const mapStateToProps = (state, { id }) => ({
  people: state.people.byId[id],
  sharing: state.sharing,
});

// dispatch
const mapDispatchToProps = (dispatch, { id }) => ({
  actions: {
    updateInput: string => dispatch(updatePeopleInput(id, string)),
    delete: () => dispatch(deletePeople(id)),
    addPeople: (string) => {
      if (string) dispatch(addPeople());
      else dispatch(startSharing());
    },
  },
});


/* Connect */
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(People);


/* Export */
export default container;
