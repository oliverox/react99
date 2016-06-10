import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import classnames from 'classnames';
import _ from 'underscore';

// Fake data
import FAKE_ALERTS from '../__FAKEDATA/alerts';

// React Bootstrap
import Button from 'react-bootstrap/lib/Button';
import EventListener from 'react-bootstrap/lib/utils/EventListener';

// Custom components
import SingleAlert from './single-alert';

/**
 * Alerts
 *
 * Display alerts in the site's header
 */
export default class Alerts extends React.Component {

  constructor() {
    super();
    this.state = {
      alerts: [],
      displayAlertList: false,
      viewAll: true,
    };
    this.markAsRead = this.markAsRead.bind(this);
    this.toggleDisplayAlerts = this.toggleDisplayAlerts.bind(this);
    this.toggleViewAll = this.toggleViewAll.bind(this);
  }

  componentWillMount() {
    this.setState({
      alerts: FAKE_ALERTS,
    });
  }

  componentDidMount() {
    // Listen to the keyup event. Will be used to hide the list of alerts
    this.onDocumentKeyupListener = EventListener.listen(document, 'keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount() {
    this.onDocumentKeyupListener.remove();
  }

  // Get the alerts, sorted by timestamp from newest to oldest
  getAlerts() {
    // Get the alerts, sorted by timestamp from newest to oldest
    let alerts = _.sortBy(this.state.alerts, 'timestamp').reverse();

    // If the state is set not set to view all, reject the alerts which have been read
    if (!this.state.viewAll || !this.state.displayAlertList) {
      alerts = _.reject(alerts, (alert) => alert.read);
    }

    return alerts;
  }

  /**
   * Mark As Read
   *
   * Mark a single alert as read
   */
  markAsRead(alert) {
    const alerts = this.state.alerts;
    const theAlert = _.findWhere(alerts, alert);

    theAlert.read = true;

    this.setState({
      alerts,
    });
  }

  /**
   * Toggle Display Alerts
   *
   * Toggle the displayAlertList state
   */
  toggleDisplayAlerts() {
    this.setState({
      displayAlertList: !this.state.displayAlertList,
    });
  }

  /**
   * Toggle View All
   *
   * Toggle the viewAll state
   */
  toggleViewAll(e) {
    e.preventDefault();
    this.setState({
      viewAll: !this.state.viewAll,
    });
  }

  /**
   * Mark All As Read
   *
   * Update the alerts to mark all as read
   */
  markAllAsRead(e) {
    e.preventDefault();

    const alerts = this.state.alerts;

    _.each(alerts, (alert) => {
      alert.read = true;  // eslint-disable-line
    });

    this.setState({
      alerts,
    });
  }

  handleDocumentKeyUp(e) {
    const ESCAPE_KEYCODE = 27;

    if (e.keyCode === ESCAPE_KEYCODE) {
      this.setState({
        displayAlertList: false,
      });
    }
  }

  render() {
    const alerts = this.getAlerts();

    // See if there are any unred alerts
    const hasUnread = !!_.find(alerts, (alert) => !alert.read);

    // The classes for the icon
    const iconClassNames = classnames({
      icon: true,
      'ion-ios-bell-outline': true,
      'fg-red': hasUnread,
    });

    // Do not display the `mark all as read` button if there are no unread alerts
    const markAllAsReadButton = hasUnread ? (
      <Button bsSize="xsmall" onClick={this.markAllAsRead}>Mark All As Read</Button>
    ) : null;

    // Text for `view` button
    const viewButtonText = this.state.viewAll ? 'View Unread Only' : 'View All';

    const alertClassNames = classnames({
      alerts: true,
      'display-as-list': this.state.displayAlertList,
      'display-as-alerts': !this.state.displayAlertList,
    });

    const ActionContainerClassNames = classnames({
      'action-container': true,
      hide: !this.state.displayAlertList,
    });

    const self = this;

    return (
      <div>
        <i className={iconClassNames} onClick={this.toggleDisplayAlerts}></i>

        <div className={alertClassNames}>

          <div className={ActionContainerClassNames}>
            {markAllAsReadButton}
            <Button bsSize="xsmall" onClick={this.toggleViewAll}>{viewButtonText}</Button>
          </div>

          {/*
            There still seems to be some bugs with `ReactCSSTransitionGroup` when removing multiple DOM Node,
            You can see this issue when using `ReactCSSTransitionGroup` below and clicking on the icon that toggles
            `displayAlertList`. With `transitionLeave={false}` the read alerts do not disappear correctly.

            I left the CSS in place for when this gets fixed.

            https://github.com/facebook/react/issues/1326

            <ReactCSSTransitionGroup transitionName="alert-transition" component="ul" className="alert-list" transitionLeave={false}>

          */}
          <ul className="alert-list">
          {
            alerts.map((alert) => (<SingleAlert key={alert.id} {...alert} onClick={self.markAsRead.bind(this, alert)}/>)) // eslint-disable-line
          }
          </ul>
        </div>
      </div>
    );
  }
}
