/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */


/* Code */
const Share = ({ things, people, sharing, actions }) => (
  <div id="core-share">
    {/* LET'S GO */}
    {/* need sharing, people, things, actions.start, actions.changeAmount,
      actions.validAmounts, actions.share (actions.go) */}
    {sharing
      ?
        <div id="core-share-block">
          <hr />
          <h2 id="core-share-block-title">
            C'est parti pour <strong>{people.byId[people.current].input}</strong>
          </h2>
          {people.byId[people.current].done === 'waiting' &&
            <div>
              <p>Quand t'es prêt (et seul), clique sur le beau bouton !</p>
              <button
                id="core-share-block-button"
                className="button"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                onClick={actions.start}
              >Go !</button>
            </div>
          }
          {people.byId[people.current].done === 'go' &&
            <div>
              <p>
                Pour chaque truc,
                indique le montant <strong>maximum</strong>&nbsp;
                que t'es prêt à payer
              </p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Truc</th>
                    <th>Ton prix</th>
                  </tr>
                </thead>
                <tbody>
                  {things.allIds.map(thingId => (
                    <tr key={thingId}>
                      <td>{things.byId[thingId].input}</td>
                      <td>
                        <input
                          type="number"
                          min={0}
                          className="input value-input"
                          value={people.byId[people.current].things[thingId]}
                          // eslint-disable-next-line jsx-a11y/no-autofocus
                          autoFocus={thingId === Math.min(...things.allIds)}
                          onChange={evt => (
                            actions.changeAmount(thingId, evt.target.value)
                          )}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                id="core-share-block-button"
                className="button"
                onClick={actions.validAmounts}
              >C'est mon dernier mot Jean-Pierre !
              </button>
            </div>
          }
        </div>
      :
        <button
          id="core-share-go"
          className="button"
          onClick={actions.share}
        >On partage !</button>
    }
  </div>
);

Share.propTypes = {
  things: PropTypes.shape({
    allIds: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
  people: PropTypes.shape({
    allIds: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
  sharing: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


/* Export */
export default Share;
