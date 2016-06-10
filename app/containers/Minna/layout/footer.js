import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

/**
 * Layout: Footer
 *
 * Display a the site's footer
 */
export default class Footer extends React.Component { // eslint-disable-line
  render() {
    return (
      <footer id="main-footer">
        &copy; {moment().format('YYYY')} <Link to="dashboard">Minna Theme</Link> &#124; <Link to="privacy-policy">Privacy Policy</Link>
      </footer>
    );
  }
}
