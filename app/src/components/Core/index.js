/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */
import Thing from 'src/containers/Core/Thing';
import People from 'src/containers/Core/People';


/* Code */
const Core = ({ things, people, sharing, actions }) => (
  <section id="core">
    <div id="core-lists">
      {/* THINGS */}
      <div id="core-lists-things">
        {!sharing &&
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
        {!sharing &&
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
    <div id="core-share">
      <button
        id="core-share-go"
        className="button"
        onClick={actions.share}
      >On partage !</button>
    </div>
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
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


/* Export */
export default Core;
