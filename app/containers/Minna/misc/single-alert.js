import React from 'react';

const classnames = require('classnames');
const moment = require('moment');

// React Bootstrap
// const Button = require('react-bootstrap/lib/Button');

/**
 * Single Alert
 *
 * A single alert used the header
 */
export default class SingleAlert extends React.Component {
  // Stop unnecessary renders
  // https://facebook.github.io/react/docs/pure-render-mixin.html
  mixins: [React.addons.PureRenderMixin]

  constructor(props) {
    super();
    this.state = {
      timeAgo: moment.unix(props.timestamp).fromNow(),
    };
  }

  componentDidMount() {
    // Update the timeAgo state every 30 seconds.
    // Since we are using the React.addons.PureRenderMixin, we will not perform
    // a rerender if the timeAgo is the same
    const self = this;
    this.intervalID = setInterval(() => {
      this.setState({
        timeAgo: moment.unix(self.props.timestamp).fromNow(),
      });
    }, 30000);
  }

  componentWillUnmount() {
    // A little house keeping. Clear the interval on unmount.
    clearInterval(this.intervalID);
  }

  render() {
    // Icon Classes
    const iconClassNames = classnames([
      this.props.icon,
      'icon',
      `fg-${this.props.iconColor}`,
    ]);

    // If there is an icon and no avatar
    const icon = this.props.icon && !this.props.avatar ? (
      <div className="alert-icon">
        <i className={iconClassNames} />
      </div>
    ) : null;

    // The avatar if it exists
    const avatar = this.props.avatar ? (
      <div className="alert-avatar">
        <img alt="avatar" src={this.props.avatar} className="avatar img-responsive" />
      </div>
    ) : null;


    // The actions if they exist
    const actions = this.props.actions ? (
      <div className="alert-actions">
        {this.props.actions}
      </div>
    ) : null;

    // Moment times
    const timeAgo = this.state.timeAgo;
    const fullDate = moment.unix(this.props.timestamp).format('LLLL');

    return (
      <li className={classnames({ 'single-alert': true, unread: !this.props.read })} {...this.props}>

        {icon}
        {avatar}

        <div className="alert-container">
          <div className="alert-content">
            {this.props.message}
          </div>

          {actions}

          <div className="alert-time" title={fullDate}>
            {timeAgo}
          </div>
        </div>
      </li>
    );
  }
}

SingleAlert.propTypes = {
  message: React.PropTypes.object,
  read: React.PropTypes.bool,
  actions: React.PropTypes.object,
  icon: React.PropTypes.string,
  iconColor: React.PropTypes.string,
  avatar: React.PropTypes.string,
  timestamp: React.PropTypes.number,
};

SingleAlert.defaultProps = {
  icon: null,
  iconColor: null,
  avatar: null,
  message: null,
  actions: null,
  read: null,
  timestamp: null,
};
