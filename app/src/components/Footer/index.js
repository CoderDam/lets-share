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
        id="full-reboot"
        className="button"
        tabIndex={-1}
        onClick={actions.fullReboot}
      >RàZ</button>
    </div>

    <hr />

    <p id="app-footer-text">
      <span>Appli inspirée par <a href="https://www.youtube.com/watch?v=kefptSDi0Es&feature=youtu.be&t=7m53s">Science4All</a></span>
      <span>réalisée par Damien GARNÈS</span>
      <a href="mailto:garnes.damien|AT|gmail.com">Me contacter</a>
    </p>
  </footer>
);

Header.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


/* Export */
export default Header;
