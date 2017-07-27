/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import People from 'src/components/Core/People';
import { updatePeopleInput, deletePeople, addPeople } from 'src/store/reducer';


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
      else document.getElementById('core-share-go').focus();
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
