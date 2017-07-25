/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */
// import Core from 'src/containers/Core';


/* Code */
const People = ({ people, actions }) => (
  <li id={`people-${people.id}`} className="people">
    <span>{people.id}</span>
    <input
      id={`people-${people.id}-input`}
      className="people-input"
      type="text"
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus
      value={people.input}
      onChange={evt => actions.updateInput(evt.target.value)}
      onKeyUp={evt => (evt.key === 'Enter' ? actions.addPeople() : '')}
    />
    <button
      className="people-delete"
      onClick={actions.delete}
    >x</button>
  </li>
);

People.propTypes = {
  people: PropTypes.object.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


/* Export */
export default People;
