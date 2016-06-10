import React from 'react';
const Button = require('react-bootstrap/lib/Button');
const moment = require('moment');
const FAKE_USERS = require('./users');


const FAKE_USER_1 = FAKE_USERS[8];
const FAKE_USER_2 = FAKE_USERS[2];
// const FAKE_USER_3 = FAKE_USERS[6];
// const FAKE_USER_4 = FAKE_USERS[4];
// const FAKE_USER_5 = FAKE_USERS[5];


const FAKE_DATA = [
  {
    // Need an ID to do ReactTransitionGroup
    // https://facebook.github.io/react/docs/animation.html
    id: Date.now() + 1,
    icon: 'ion-alert-circled',
    iconColor: 'yellow',
    message: (<span>Non-Whitelisted IP Address <code>36.251.87.71</code> tried to access private API.</span>),
    actions: (
      <span>
        <Button bsSize="xsmall" bsStyle="warning">Block</Button>
        <Button bsSize="xsmall">Whitelist</Button>
      </span>
    ),
    read: false,
    dismissAfter: 1000,
    timestamp: parseInt(moment().subtract(5, 'minutes').format('X'), 10),
  },
  {
    id: Date.now() + 2,
    icon: 'ion-checkmark-circled',
    iconColor: 'green',
    read: true,
    message: 'User settings successfully saved',
    timestamp: parseInt(moment().subtract(10, 'minutes').format('X'), 10),
  },
  {
    id: Date.now() + 3,
    avatar: FAKE_USER_1.photos.avatar.small,
    message: (<span> <strong>{FAKE_USER_1.first_name}</strong> updated the homepage</span>),
    read: true,
    timestamp: parseInt(moment().subtract(1, 'hours').format('X'), 10),
  },
  {
    id: Date.now() + 4,
    avatar: FAKE_USER_2.photos.avatar.small,
    message: (
      <span>
        <strong>{FAKE_USER_2.first_name}</strong> Created an issue on GitHub.
      </span>
    ),
    read: true,
    actions: (
      <span>
        <Button bsSize="xsmall" bsStyle="danger">Merge</Button>
        <Button bsSize="xsmall" href="https://github.com/facebook/react/issues/1326" target="_blank">Review</Button>
      </span>
    ),
    timestamp: parseInt(moment().subtract(2, 'hours').format('X'), 10),
  },
];

export default FAKE_DATA;
