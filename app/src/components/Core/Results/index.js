/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */


/* Code */
const Results = ({ things, people, calculation, actions }) => (
  <div id="core-results">
    <hr />
    <h2 id="core-results-title">Résultats</h2>
    {!calculation
      ?
        <button
          id="core-results-button"
          className="button"
          onClick={actions.calculation}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        >Voir le partage !</button>
      :
        <div id="core-results-table">
          <table className="table">
            <thead>
              <tr>
                <th>Buddy</th>
                <th>Obtient</th>
                <th>Paye</th>
                <th>Reçoit</th>
              </tr>
            </thead>
            <tbody>
              {people.allIds.map(peopleId => (
                <tr key={peopleId}>
                  <td className="buddy">{people.byId[peopleId].input}</td>
                  <td>
                    {people.byId[peopleId].get.map(thingId => (
                      <span key={thingId} className="thing">
                        {things.byId[thingId].input}
                      </span>
                    ))}
                  </td>
                  <td className="amount">
                    {people.byId[peopleId].total < 0
                      ? -people.byId[peopleId].total
                      : '-'
                    }
                  </td>
                  <td className="amount">
                    {people.byId[peopleId].total > 0
                      ? people.byId[peopleId].total
                      : '-'
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    }
  </div>
);

Results.propTypes = {
  things: PropTypes.shape({
    allIds: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
  people: PropTypes.shape({
    allIds: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
  calculation: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


/* Export */
export default Results;
