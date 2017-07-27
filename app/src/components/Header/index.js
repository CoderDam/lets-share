/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/* Local import */


/* Code */
const Header = ({ display, actions }) => (
  <header id="app-how">
    <h2 id="app-how-title">
      Comment ça marche ?
      <button
        id="app-how-title-arrow"
        onClick={actions.show}
      />
    </h2>
    <div className={classNames('how-text',
      { 'how-text--visible': display })}
    >
      <p className="text">
        <em className="english">Easy buddy!</em> D'un côté on saisit les trucs à se partager, de l'autre les <em className="english">buddies</em>.
      </p>
      <p className="text">
        Chaque <em className="english">buddy</em> indique alors le montant <strong>maximum</strong> qu'il est prêt à dépenser pour obtenir chaque truc. (oui oui, on parle de sous-sous !)
      </p>
      <p className="text">Et je m'occupe du reste <span role="img" aria-label="victory sign">✌</span></p>
      <hr />
    </div>
  </header>
);

Header.propTypes = {
  display: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


/* Export */
export default Header;
