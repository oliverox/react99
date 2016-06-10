// Node modules
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

// React Bootstrap
const Badge = require('react-bootstrap/lib/Badge');

const CONST = {};

// Adjust these if underlying css changes
CONST.TRANSITION_LENGTH = 500;
CONST.MARGINBOTTOM = 10;
CONST.MARGINTOP = 5;
CONST.PADDINGBOTTOM = 5;

// The outer wrapper for the Router
export default class Dropdown extends React.Component {

  constructor() {
    super();
    this.state = {
      displaySubMenu: false,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  /**
   * Component Did Mount
   *
   * @return {[type]} [description]
   */
  componentDidMount() {
    const $submenu = ReactDOM.findDOMNode(this.refs.submenu);

    // Set the original values for these style properties
    this.originalStyle = {
      borderBottom: $submenu.style.borderBottom,
    };

    // Set the styles. This is needed to make transitions work on the first
    // take. E.g. we need to have a value for margin before we can transition
    // to another value.
    this.setStyle();
  }

  componentWillReceiveProps(nextProps) {
    // Everything is the same? Did we simply just rerender everything? Return.
    if (nextProps.activeDropdown === this.props.activeDropdown && nextProps.label === this.props.label) {
      return;
    }

    // If the next active dropdown is this one (turn on) OR this dropdown is active (turn off)
    if (nextProps.activeDropdown === nextProps.label || this.state.displaySubMenu) {
      this.toggleDisplay();
    }
  }

  /**
   * Set Style
   *
   * Set the proper styling for the submenu.
   * Can only be called after the component has been rendered
   */
  setStyle() {
    const $submenu = ReactDOM.findDOMNode(this.refs.submenu);

    let height = 0;
    let paddingBottom = 0;
    let marginBottom = 0;
    let marginTop = 0;
    let borderBottom = '0px solid rgba(255,255,255,0)';

    if (this.state.displaySubMenu) {
      paddingBottom = CONST.PADDINGBOTTOM;
      marginBottom = CONST.MARGINBOTTOM;
      marginTop = CONST.MARGINTOP;
      borderBottom = this.originalStyle.borderBottom;
      height = $submenu.scrollHeight + paddingBottom;
    }

    $submenu.style.height = `${height}px`;
    $submenu.style.marginBottom = `${marginBottom}px`;
    $submenu.style.marginTop = `${marginTop}px`;
    $submenu.style.paddingBottom = `${paddingBottom}px`;
    $submenu.style.borderBottom = borderBottom;
  }


  /**
   * Handle Menu Click
   *
   */
  toggleDisplay() {
    const self = this;
    this.setState({
      // Toggle the display of the submenu
      displaySubMenu: !this.state.displaySubMenu,

      // Mark as transitioning
      transitioning: true,

      // Once the state has been set
    }, () => {
      // Calculate the styles
      self.setStyle();

      // If there is a timeoutID, clear it.
      if (self.timeoutID) {
        clearTimeout(self.timeoutID);
      }

      // Timeout used to clear the transitioning state
      self.timeoutID = setTimeout(() => {
        self.setState({
          transitioning: false,
        });

      // Call this after the transition has completed. Ideally, we used an
      // event listener `transitionend` but not all browsers support this.
      // https://developer.mozilla.org/en-US/docs/Web/Events/transitionend
      }, CONST.TRANSITION_LENGTH);
    });
  }

  handleMenuClick(e) {
    e.preventDefault();

    // If there is a handleDropClick and we don't want to simply toggle this one
    // This would happen if the activeDropdown is this one and a click was performed here
    if (this.props.handleDropClick && this.props.activeDropdown !== this.props.label) {
      this.props.handleDropClick();
    } else {
      this.toggleDisplay();
    }
  }

  renderHeading() {
    const triggerClasses = classnames({
      'downdown-trigger': true,
      toggled: this.state.displaySubMenu,
    });
    return (
      <a className={triggerClasses} onClick={this.handleMenuClick}>
        <span className="the-label">{this.props.label}</span>
        <Badge className="pull-right ">{this.props.badgeNumber}</Badge>
      </a>
    );
  }

  renderBody() {
    const classes = classnames({
      submenu: true,
      in: this.state.displaySubMenu,
      transitioning: this.state.transitioning,
    });

    return (
      <ul className={classes} ref="submenu">
        {this.props.children}
      </ul>
    );
  }

  render() {
    return (
      <li className="dropdown" {...this.props}>
        {this.renderHeading()}
        {this.renderBody()}
      </li>
    );
  }
}

Dropdown.propTypes = {
  label: React.PropTypes.string.isRequired,
  badgeNumber: React.PropTypes.number,
  activeDropdown: React.PropTypes.string,
  handleDropClick: React.PropTypes.func,
  children: React.PropTypes.array,
};

Dropdown.defaultProps = {
  label: '',
  badgeNumber: null,
  activeDropdown: '',
  handleDropClick: null,
};
