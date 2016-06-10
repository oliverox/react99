import React from 'react';
import classnames from 'classnames';

// React Bootstrap
const ProgressBar = require('react-bootstrap/lib/ProgressBar');

/**
 * Layout: Alternative Sidebar
 *
 * Display a the site's alt sidebar
 */
export default class SidebarAlt extends React.Component { // eslint-disable-line
  render() {
    const classes = classnames({
      in: this.props.open,
      transitioning: !this.props.done,
      out: this.props.done && !this.props.open,
    });

    return (
      <div id="sidebar-alt" className={classes}>

        <h5>Theme completetion <small className="pull-right">80%</small> </h5>
        <ProgressBar bsStyle="success" now={80} className="progress-bar-sm" />

        <h5>To Do Items</h5>

        <ol>
          <li>Flux (marty?)</li>
          <li>Sidebar click on mobile hides the sidebar</li>
          <li>Header Alerts (auto dismiss)</li>
          <li>Tweet, Insta, Vimeo, FB Post</li>
          <li>Calendar</li>
          <li>Set protoTypes for widgets</li>
          <li>Blog List and single post</li>
          <li>
            <a href="https://github.com/request/request" target="_blank">Request</a> and <a href="https://github.com/IndigoUnited/node-request-progress" target="_blank">Request Progress</a>
          </li>

          <li><a href="https://github.com/cezary/react-progress" target="_blank">React Progress Bar</a></li>

          <li><a href="https://github.com/banyan/react-emoji" target="_blank">React emoji</a></li>


        </ol>

        <h5>Backburner</h5>

        <ol>
          <li>Find non-jquery wysiwyg (under &lt;30 kbs)</li>
          <li>https://github.com/souhe/reactScrollbar</li>
        </ol>
      </div>
    );
  }
}

SidebarAlt.propTypes = {
  open: React.PropTypes.bool,
  done: React.PropTypes.bool,
};
