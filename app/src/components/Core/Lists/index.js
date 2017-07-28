/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */
import Thing from 'src/containers/Core/Thing';
import People from 'src/containers/Core/People';


/* Code */
const Lists = ({ things, people, sharing, actions }) => (
  <div id="core-lists">
    <h2 id="core-lists-title">Qui et quoi ?</h2>
    <div id="core-lists-block">
      {/* PEOPLE */}
      <div id="core-lists-block-people">
        {sharing
          ?
            <h3>Buddies</h3>
          :
            <button
              id="core-lists-block-people-add"
              className="button"
              onClick={actions.addPeople}
            >+ Buddy</button>
        }
        <ul id="core-lists-block-people-list">
          {people.allIds.map(peopleId => (
            <People key={peopleId} id={peopleId} />
          ))}
        </ul>
      </div>

      {/* THINGS */}
      <div id="core-lists-block-things">
        {sharing
          ?
            <h3>Trucs</h3>
          :
            <button
              id="core-lists-block-things-add"
              className="button"
              onClick={actions.addThing}
            >+ Truc</button>
        }
        <ul id="core-lists-block-things-list">
          {things.allIds.map(thingId => (
            <Thing key={thingId} id={thingId} />
          ))}
        </ul>
      </div>
    </div>
  </div>
);

Lists.propTypes = {
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
export default Lists;
