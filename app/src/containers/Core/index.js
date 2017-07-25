/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Core from 'src/components/Core';
import { addThing, addPeople, startSharing,
  startAmounts, changeAmount, validAmounts, calculation1 } from 'src/store/reducer';


/* Map */
// state
const mapStateToProps = state => ({
  things: state.things,
  people: state.people,
  sharing: state.sharing,
  over: state.over,
  calculation: state.calculation,
});

// dispatch
const mapDispatchToProps = dispatch => ({
  actions: {
    addThing: () => dispatch(addThing()),
    addPeople: () => dispatch(addPeople()),
    share: () => dispatch(startSharing()),
    start: () => dispatch(startAmounts()),
    changeAmount: (thingId, amount) => dispatch(changeAmount(thingId, amount)),
    validAmounts: () => dispatch(validAmounts()),
    calculation: () => {
      dispatch(calculation1());
    },
  },
});


/* Connect */
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Core);


/* Export */
export default container;
