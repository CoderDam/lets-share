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
        <em className="english">Easy buddy!</em> D'un côté on saisit les <em className="english">buddies</em>, de l'autre, les trucs à se partager.
      </p>
      <p className="text">
        Chaque <em className="english">buddy</em> indique alors le montant <strong>maximum</strong> qu'il est prêt à dépenser pour obtenir chaque truc. (en effet, on parle d'argent)
      </p>
      <p className="text">
        Et je m'occupe du reste&nbsp;
        <span role="img" aria-label="victory sign">✌</span> (sur&nbsp;
        <a
          href="https://www.youtube.com/watch?v=kefptSDi0Es&t=7m53s"
          title="vidéo : le partage socialement juste"
        >ce principe</a>)
      </p>
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
