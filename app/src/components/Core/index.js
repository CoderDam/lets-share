/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */
import Thing from 'src/containers/Core/Thing';
import People from 'src/containers/Core/People';


/* Code */
const Core = ({ things, people, sharing, over, calculation, actions }) => (
  <section id="core">
    <h2 id="core-title">Qui et quoi ?</h2>
    <div id="core-lists">
      {/* PEOPLE */}
      {/* need sharing, people, actions.addPeople */}
      <div id="core-lists-people">
        {sharing
          ?
            <h3>Buddies</h3>
          :
            <button
              id="core-lists-people-add"
              className="button"
              onClick={actions.addPeople}
            >+ Buddy</button>
        }
        <ul id="core-lists-people-list">
          {people.allIds.map(peopleId => (
            <People key={peopleId} id={peopleId} />
          ))}
        </ul>
      </div>

      {/* THINGS */}
      {/* need sharing, things, actions.addThing */}
      <div id="core-lists-things">
        {sharing
          ?
            <h3>Trucs</h3>
          :
            <button
              id="core-lists-things-add"
              className="button"
              onClick={actions.addThing}
            >+ Truc</button>
        }
        <ul id="core-lists-things-list">
          {things.allIds.map(thingId => (
            <Thing key={thingId} id={thingId} />
          ))}
        </ul>
      </div>
    </div>

    {/* LET'S GO */}
    {/* need sharing, people, things, actions.start, actions.changeAmount,
    actions.validAmounts, actions.share (actions.go) */}
    {!over &&
      <div id="core-share">
        {sharing
          ?
            <div id="core-share-block">
              <h2 id="core-share-block-title">
                C'est parti pour <strong>{people.byId[people.current].input}</strong>
              </h2>
              {people.byId[people.current].done === 'waiting' &&
                <div>
                  <p>Quand t'es prêt (et seul), cliques sur le beau bouton !</p>
                  <button
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
                    indiques le montant <strong>maximum</strong>&nbsp;
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
    }

    {/* OVER */}
    {/* need over, calculation, people, things, actions.calculation */}
    {over &&
      <div id="core-results">
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
            <div>
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
    }

  </section>
);

Core.propTypes = {
  things: PropTypes.shape({
    allIds: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
  people: PropTypes.shape({
    allIds: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
  sharing: PropTypes.bool.isRequired,
  over: PropTypes.bool.isRequired,
  calculation: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


/* Export */
export default Core;
