/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/* Local import */


/* Code */
const People = ({ people, sharing, actions }) => (
  <li id={`people-${people.id}`} className="people">
    {sharing
      ?
        <span
          className={classNames('people-name',
          { 'people-name--done': people.done === 'ok' })}
        >
          {people.input}
        </span>
      :
        <div>
          <input
            id={`people-${people.id}-input`}
            className="input people-input"
            type="text"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            value={people.input}
            onChange={evt => actions.updateInput(evt.target.value)}
            onKeyUp={evt => (
              evt.key === 'Enter' && actions.addPeople(evt.target.value)
            )}
          />
          <button
            className="delete people-delete"
            onClick={actions.delete}
          >✖</button>
        </div>
    }
  </li>
);

People.propTypes = {
  people: PropTypes.object.isRequired,
  sharing: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


/* Export */
export default People;
