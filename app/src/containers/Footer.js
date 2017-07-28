/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Footer from 'src/components/Footer';
import { addThing, addPeople, fullReboot } from 'src/store/reducer';


/* Map */
// state
const mapStateToProps = state => ({
  people: state.people,
  things: state.things,
});

// dispatch
const mapDispatchToProps = dispatch => ({
  actions: {
    addThing: name => dispatch(addThing(name)),
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
    doItAgain: () => {
      const buddys = stateProps.people.allIds.map(id => (
        stateProps.people.byId[id].input
      ));
      const stuffs = stateProps.things.allIds.map(id => (
        stateProps.things.byId[id].input
      ));
      dispatchProps.actions.fullReboot();
      buddys.forEach(name => dispatchProps.actions.addPeople(name));
      stuffs.forEach(name => dispatchProps.actions.addThing(name));
      setTimeout(() => document.getElementById('core-share-go').focus(), 50);
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
