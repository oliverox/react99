/*
 *
 * Minna
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import selectMinna from './selectors';
import Header from './layout/header';
import Footer from './layout/footer';
import Sidebar from './layout/sidebar';
import SidebarAlt from './layout/sidebar-alt';

require('./styles/main.scss');

export class Minna extends React.Component {
  constructor() {
    super();
    this.state = {
      // Is the main sidebar open?
      mainSidebarOpen: true,
      // Is the alternate sidebar open?
      altSidebarOpen: false,
      // Even if the main sidebar is closed,
      // the user could see want it visible if certain conditions are met
      desireMainSidebar: true,
      // Did all the CSS transitions on the page end?
      transitionEnd: true,
      // Width where the sidebars auto hide
      hideMainSidebarWidth: 900,
    };
    this.toggleMainSidebar = this.toggleMainSidebar.bind(this);
    this.toggleAltSidebar = this.toggleAltSidebar.bind(this);
    this.noSidebarsOnSmallScreens = this.noSidebarsOnSmallScreens.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  }

  /**
   * React: CDM
   *
   * Check to see if any sidebars should be visible (mobile)
   *
   * Add event listeners
   */
  componentDidMount() {
    const header = ReactDOM.findDOMNode(this.refs.header);

    // Set the initial classes
    this.noSidebarsOnSmallScreens();

    // Add the resize event listener
    window.addEventListener('resize', this.noSidebarsOnSmallScreens, false);
    header.addEventListener('transitionend', this.onTransitionEnd, false);
  }

  /**
   * React: CWU
   *
   * Remove event listeners
   */
  componentWillUnmount() {
    const header = ReactDOM.findDOMNode(this.refs.header);

    // Remove event listeners
    window.removeEventListener('resize', this.noSidebarsOnSmallScreens, false);
    header.removeEventListener('transitionend', this.onTransitionEnd, false);
  }


  /**
   * On Transition End
   *
   * This is attached to the header, when the header resizes, the
   * content body has resized, but we need to let any plugins know
   * that a resize has taken place (even though the window didn't
   * technically resize). To accomplish this, we dispatch a window
   * resize event
   *
   * Set the state of `transitionEnd` to `true` and dispatch a window resize event.
   *
   * @return {[type]} [description]
   */
  onTransitionEnd() {
    this.setState({
      transitionEnd: true,
    });

    window.dispatchEvent(new CustomEvent('resize', { detail: true }));
  }

  toggleMainSidebar(e) {
    e.preventDefault();
    const toggleMain = !this.state.mainSidebarOpen;
    this.setState({
      altSidebarOpen: toggleMain ? false : this.state.altSidebarOpen,
      mainSidebarOpen: toggleMain,
      desireMainSidebar: toggleMain,
      transitionEnd: false,
    });
  }

  toggleAltSidebar(e) {
    e.preventDefault();
    const toggleAlt = !this.state.altSidebarOpen;
    this.setState({
      altSidebarOpen: toggleAlt,
      mainSidebarOpen: toggleAlt ? false : this.state.desireMainSidebar && window.innerWidth > this.state.hideMainSidebarWidth,
      transitionEnd: false,
    });
  }

  /**
   * No Sidebar on small screens
   *
   * Check the width, if under this.state.hideMainSidebarWidth (and some other magic)
   * we hide both sidebars.
   */
  noSidebarsOnSmallScreens(e) {
    // Was this event triggered because of a transition ending?
    const isTransistionTriggeredEvent = e && e.detail;

    // We don't want to trigger this all the time
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }

    const self = this;
    this.timeout = window.setTimeout(() => {
      let altSidebarOpen = self.state.altSidebarOpen;
      let mainSidebarOpen = self.state.mainSidebarOpen;

      // If the window is wider than 900px
      // and the user wants a Main Sidebar
      // and the Alt isn't show...
      if (window.innerWidth > self.state.hideMainSidebarWidth && self.state.desireMainSidebar && !altSidebarOpen) {
        // Display the main
        mainSidebarOpen = true;
      }

      // If the window is less than 900px AND not triggered by a transition
      if (window.innerWidth <= self.state.hideMainSidebarWidth && !isTransistionTriggeredEvent) {
        // Close both
        altSidebarOpen = false;
        mainSidebarOpen = false;
      }

      self.setState({
        altSidebarOpen,
        mainSidebarOpen,
        transitionEnd: self.state.mainSidebarOpen === mainSidebarOpen && self.state.altSidebarOpen === altSidebarOpen,
      });
    }, 200);
  }

  render() {
    const appWrapperClass = this.state.mainSidebarOpen || this.state.altSidebarOpen ? 'open-sidebar' : null;
    return (
      <div id="app-wrapper" className={appWrapperClass}>
        <a href="#main-content" className="sr-only sr-only-focusable skip-to-main-content">Skip to main content</a>
        <Sidebar open={this.state.mainSidebarOpen} done={this.state.transitionEnd} />
        <SidebarAlt open={this.state.altSidebarOpen} done={this.state.transitionEnd} />
        <Header ref="header" onSidebarToggleClick={this.toggleMainSidebar} onAltSidebarToggleClick={this.toggleAltSidebar} />
        <div id="main-content" tabIndex="-1">
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectMinna();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Minna);

Minna.propTypes = {
  children: React.PropTypes.object,
};
