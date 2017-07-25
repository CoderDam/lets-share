/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */
// import Core from 'src/containers/Core';


/* Code */
const Thing = ({ thing, sharing, actions }) => (
  <li id={`thing-${thing.id}`} className="thing">
    {sharing
      ?
        <div>
          <span>{thing.id}. </span>
          <span>{thing.input}</span>
        </div>
      :
        <div>
          <span>{thing.id}. </span>
          <input
            id={`thing-${thing.id}-input`}
            className="thing-input"
            type="text"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            value={thing.input}
            onChange={evt => (!sharing && actions.updateInput(evt.target.value))}
            onKeyUp={evt => (
              !sharing && evt.key === 'Enter' && actions.addThing()
            )}
          />
          <button
            className="thing-delete"
            onClick={actions.delete}
          >x</button>
        </div>
    }
  </li>
);

Thing.propTypes = {
  thing: PropTypes.object.isRequired,
  sharing: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


/* Export */
export default Thing;
