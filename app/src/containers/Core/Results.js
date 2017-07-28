/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Results from 'src/components/Core/Results';
import { calculation1, calculation2 } from 'src/store/reducer';


/* Map */
// state
const mapStateToProps = state => ({
  things: state.things,
  people: state.people,
  calculation: state.calculation,
});

// dispatch
const mapDispatchToProps = dispatch => ({
  actions: {
    calculation: () => {
      dispatch(calculation1());
      dispatch(calculation2());
    },
  },
});


/* Connect */
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Results);


/* Export */
export default container;
