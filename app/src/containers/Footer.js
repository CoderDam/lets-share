/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Footer from 'src/components/Footer';
import { addThing, addPeople, fullReboot } from 'src/store/reducer';


/* Map */
// state
const mapStateToProps = state => ({
  people: state.people,
});

// dispatch
const mapDispatchToProps = dispatch => ({
  actions: {
    addThing: () => dispatch(addThing()),
    addPeople: name => dispatch(addPeople(name)),
    fullReboot: () => dispatch(fullReboot()),
  },
});

// merge props
const mergeProps = (stateProps, dispatchProps) => ({
  actions: {
    ...dispatchProps.actions,
    thingsReboot: () => {
      const names = stateProps.people.allIds.map(id => (
        stateProps.people.byId[id].input
      ));
      dispatchProps.actions.fullReboot();
      names.forEach(name => dispatchProps.actions.addPeople(name));
      dispatchProps.actions.addThing();
    },
  },
});


/* Connect */
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Footer);


/* Export */
export default container;
