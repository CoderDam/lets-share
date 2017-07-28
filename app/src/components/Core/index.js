/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */
import Lists from 'src/containers/Core/Lists';
import Share from 'src/containers/Core/Share';
import Results from 'src/containers/Core/Results';


/* Code */
const Core = ({ over }) => (
  <section id="core">
    <Lists />
    {!over
      ? <Share />
      : <Results />
    }
  </section>
);

Core.propTypes = {
  over: PropTypes.bool.isRequired,
};


/* Export */
export default Core;
