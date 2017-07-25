/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */
import Thing from 'src/containers/Core/Thing';
import People from 'src/containers/Core/People';


/* Code */
const Core = ({ things, people, sharing, over, actions }) => (
  <section id="core">
    <div id="core-lists">
      {/* THINGS */}
      <div id="core-lists-things">
        {sharing
          ?
            <p>Trucs</p>
          :
            <button
              id="core-lists-things-add"
              className="button"
              onClick={actions.addThing}
            >+ truc</button>
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
            <p>Buddies</p>
          :
            <button
              id="core-lists-people-add"
              className="button"
              onClick={actions.addPeople}
            >+ buddy</button>
        }
        <ul id="core-lists-people-list">
          {people.allIds.map(peopleId => (
            <People key={peopleId} id={peopleId} />
          ))}
        </ul>
      </div>
    </div>

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
                    onClick={actions.start}
                  >Go !</button>
                </div>
              }
              {people.byId[people.current].done === 'go' &&
                <form
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    actions.validAmounts();
                  }}
                >
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
                              onChange={evt => (
                                actions.changeAmount(thingId, evt.target.value)
                              )}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button type="submit" className="button">
                    C'est mon dernier mot Jean-Pierre !
                  </button>
                </form>
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
        <button className="button">Voir le partage !</button>
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
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


/* Export */
export default Core;