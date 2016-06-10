import React from 'react';
import Alerts from '../misc/alerts';

/**
 * Layout: Header
 *
 * Display the site's header
 */
export default class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header id="main-header" className="menubar fixed" {...this.props}>

        <a href="#" className="sidebar-toggler" onClick={this.props.onSidebarToggleClick}>
          <i className="ion-navicon icon"></i>
        </a>

        {/* <span className="branding"><img src="http://placehold.it/400x100&amp;text=Minna Logo"/></span> */}
        {/* <div className="branding"><span className="text">Minna</span></div> */}

        <div className="icons-right">
          <div className="icon-link alert-button">
            <Alerts />
          </div>
          <a href="#" className="icon-link" onClick={this.props.onAltSidebarToggleClick}>
            <i className="ion-ios-more"></i>
          </a>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  onSidebarToggleClick: React.PropTypes.func,
  onAltSidebarToggleClick: React.PropTypes.func,
};
