/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */
import Thing from 'src/containers/Core/Thing';
import People from 'src/containers/Core/People';


/* Code */
const Core = ({ things, people, sharing, over, calculation, actions }) => (
  <section id="core">
    <div id="core-lists">
      {/* THINGS */}
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

      {/* PEOPLE */}
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
    </div>

    {sharing &&
      <button
        className="button"
        onClick={actions.reboot}
      >Tout reboot !</button>
    }

    {/* LET'S GO */}
    {!over &&
      <div id="core-share">
        {sharing
          ?
            <div id="core-share-block">
              <h2 id="core-share-block-title">
                C'est parti pour {people.byId[people.current].input}
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
                    indiques le montant <strong>maximum</strong>
                    que t'es prêt à payer
                  </p>
                  <table>
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
    {over &&
      <div>
        <p>Yeah, tout le monde s'est exprimé !</p>
        <h2>Résultats</h2>
        {!calculation
          ?
            <button
              className="button"
              onClick={actions.calculation}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
            >Voir le partage !</button>
          :
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Buddy</th>
                    <th>Récupère</th>
                    <th>Paye</th>
                    <th>Reçoit</th>
                  </tr>
                </thead>
                <tbody>
                  {people.allIds.map(peopleId => (
                    <tr key={peopleId}>
                      <td>{people.byId[peopleId].input}</td>
                      <td>
                        {people.byId[peopleId].get.map(thingId => (
                          <span key={thingId}>
                            {things.byId[thingId].input}
                          </span>
                        ))}
                      </td>
                      <td>
                        {people.byId[peopleId].total < 0
                          ? -people.byId[peopleId].total
                          : '-'
                        }
                      </td>
                      <td>
                        {people.byId[peopleId].total >= 0
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
