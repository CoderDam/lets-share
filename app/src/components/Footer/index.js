/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';


/* Local import */


/* Code */
const Header = ({ actions }) => (
  <footer id="app-footer">
    <div id="app-footer-buttons">
      <button
        id="things-reboot"
        className="button"
        onClick={actions.thingsReboot}
      >Nouveau partage avec les mêmes buddys</button>

      <button
        id="things-reboot"
        className="button"
        onClick={actions.doItAgain}
      >Refaire le partage</button>

      <button
        id="full-reboot"
        className="button"
        tabIndex={-1}
        onClick={actions.fullReboot}
      >RàZ</button>
    </div>

    <hr />

    <p id="app-footer-text">
      <span>
        Inspiré par&nbsp;
        <a
          href="https://www.youtube.com/watch?v=kefptSDi0Es"
          title="vidéo originale"
        >Science4All</a>
      </span>
      <span>
        Réalisé par&nbsp;
        <a
          href="mailto:garnes.damien|AT|gmail.com"
          title="contact"
        >Damien GARNÈS</a>
      </span>
    </p>
  </footer>
);

Header.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


/* Export */
export default Header;
