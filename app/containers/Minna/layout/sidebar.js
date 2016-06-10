import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

// Custom components
import Dropdown from '../sidebar/dropdown';

// React Bootstrap
import Badge from 'react-bootstrap/lib/Badge';

/**
 * Layout: Sidebar
 *
 * Display a the site's main sidebar
 */
export default class Sidebar extends React.Component {

  constructor() {
    super();
    this.state = {
      activeDropdown: null,
    };
    this.handleDropClick = this.handleDropClick.bind(this);
  }

  handleDropClick(activeDropdown) {
    this.setState({
      activeDropdown,
    });
  }

  render() {
    const classes = classnames({
      in: this.props.open,
      transitioning: !this.props.done,
      out: this.props.done && !this.props.open,
    });

    return (
      <div id="main-sidebar" className={classes} >
        <section className="menu-section">
          <h3 className="heading">Application</h3>
          <ul>
            <li><Link to="/minna/dashboard">Dashboard</Link></li>
            <li><Link to="users">Users</Link></li>
            <li><Link to="single-user" params={{ id: 1001 }}>Single User</Link></li>

            <li><Link to="timeline">Timeline</Link></li>
            <li><Link to="gallery">Gallery</Link></li>
            <li><Link to="blog">Blog</Link></li>
            <li><Link to="invoice">Invoice</Link></li>
          </ul>
        </section>

        <section className="menu-section">
          <h3 className="heading">General</h3>
          <ul>
            <li><Link to="widgets">Widgets</Link></li>
            <li><Link to="calendar">Calendar</Link></li>
            <li><Link to="social">Social <Badge>4</Badge></Link></li>
            <Dropdown
              label="Bootstrap"
              badgeNumber={3}
              activeDropdown={this.state.activeDropdown}
              handleDropClick={this.handleDropClick}
            >
              <li><Link to="typography">Typography </Link></li>
              <li><Link to="grid">Grid <Badge>2</Badge></Link></li>
              <li><Link to="panels">Panels <Badge>1</Badge></Link></li>
              <li><Link to="demo">Demo</Link></li>
            </Dropdown>
            <li><Link to="charts">Charts</Link></li>
            <li><Link to="email-templates">Emails</Link></li>
            <li><Link to="icons">Icons</Link></li>
            <li><Link to="table">Table</Link></li>
            <li><Link to="forms">Forms</Link></li>
            <li><Link to="colors">Colors</Link></li>
          </ul>
        </section>

        <section className="menu-section">
          <h3 className="heading">Pages</h3>
          <ul>
            <li><Link to="register">Register</Link></li>
            <li><Link to="login">Login</Link></li>
            <li><Link to="404">Error Page</Link></li>
          </ul>
        </section>

        <section className="menu-section">
          <h3 className="heading">Usage</h3>
          <ul>
            <li><a href="https://facebook.github.io/react/" target="_blank"><i className="ion-social-facebook fg-facebook" /> React</a></li>
            <li><a href="http://react-bootstrap.github.io/components.html" target="_blank"><i className="ion-social-twitter fg-twitter" /> Bootstrap</a></li>
            <li><a href="http://c3js.org/" target="_blank"><i className="ion-social-github" /> C3.js</a></li>
          </ul>
        </section>

        <footer id="sidebar-footer">
          <a href="#" className="user-name">Justin Braithwaite</a>
          <a href="#" className="action">Logout</a>
        </footer>

      </div>
    );
  }
}

Sidebar.propTypes = {
  open: React.PropTypes.bool,
  done: React.PropTypes.bool,
};

Sidebar.defaultProps = {
  open: true,
};
