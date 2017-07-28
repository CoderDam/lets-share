/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Share from 'src/components/Core/Share';
import { startSharing, startAmounts, changeAmount, validAmounts } from 'src/store/reducer';


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
    go: () => dispatch(startSharing()),
    start: () => dispatch(startAmounts()),
    changeAmount: (thingId, amount) => dispatch(changeAmount(thingId, amount)),
    validAmounts: () => dispatch(validAmounts()),
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
)(Share);


/* Export */
export default container;
