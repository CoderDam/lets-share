/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Core from 'src/components/Core';
import { addThing, addPeople,
  startSharing, startAmounts, changeAmount,
  validAmounts, calculation1, calculation2 } from 'src/store/reducer';


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
    go: () => dispatch(startSharing()),
    start: () => dispatch(startAmounts()),
    changeAmount: (thingId, amount) => dispatch(changeAmount(thingId, amount)),
    validAmounts: () => dispatch(validAmounts()),
    calculation: () => {
      dispatch(calculation1());
      dispatch(calculation2());
    },
  },
});

const mergeProps = (stateProps, dispatchProps) => {
  const share = () => {
    const { things, people } = stateProps;

    let thingsOk = [];
    if (things.allIds.length) {
      thingsOk = things.allIds.filter(thingId => (
        things.byId[thingId].input.trim() !== ''
      ));
    }

    let peopleOk = [];
    if (people.allIds.length) {
      peopleOk = people.allIds.filter(peopleId => (
        people.byId[peopleId].input.trim() !== ''
      ));
    }

    if (things.allIds.length && thingsOk.length
    && people.allIds.length && peopleOk.length) {
      dispatchProps.actions.go();
    }
  };

  return ({
    ...stateProps,
    actions: {
      ...dispatchProps.actions,
      share,
    },
  });
};


/* Connect */
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Core);


/* Export */
export default container;
