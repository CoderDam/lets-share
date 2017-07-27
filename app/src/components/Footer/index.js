/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';


/* Local import */


/* Code */
const Header = ({ actions }) => (
  <footer id="app-footer">
    <button
      id="reboot"
      className="button"
      tabIndex={-1}
      onClick={actions.reboot}
    >Tout reboot !</button>
    <hr />
    <p>
      Appli inspirée par <a href="https://www.youtube.com/watch?v=kefptSDi0Es&feature=youtu.be&t=7m53s">Science4All</a>
    </p>
    <a href="mailto:garnes.damien|AT|gmail.com">Me contacter</a>
  </footer>
);

Header.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


/* Export */
export default Header;
