var React = require('react/addons');
var moment = require('moment');
var FAKE_USERS = require('./users');
var FAKE_TWEETS = require('./tweets.jsx');

var Tweet = require('../components/widgets/tweet.jsx');


var FAKE_USER_1 = FAKE_USERS[1];
var FAKE_USER_2 = FAKE_USERS[2];
var FAKE_USER_3 = FAKE_USERS[6];
var FAKE_USER_4 = FAKE_USERS[4];
var FAKE_USER_5 = FAKE_USERS[5];


module.exports = [
  {
    type: 'LinkedIn',
    created: moment().subtract(5, 'days').format(),
    icon: 'ion-social-linkedin',
    iconColor: 'linkedin',
    avatar: FAKE_USER_1.photos.avatar.small,
    metaData: {uid: FAKE_USER_1.first_name},
    action: (<span><strong>{FAKE_USER_1.first_name}</strong> posted to linkedin</span>),
    details: (
        <p>&ldquo;The world is a dangerous place to live; not because of the people who are evil, but because of the people who don&rsquo;t do anything about it.&rdquo;</p>
    )
  },
  {
    type: 'Instagram',
    created: moment().subtract(3, 'days').subtract(5, 'hours').format(),
    icon: 'ion-social-instagram',
    iconColor: 'instagram',
    avatar: FAKE_USER_4.photos.avatar.small,
    metaData: {uid: FAKE_USER_4.first_name},
    action: (<span><strong>{FAKE_USER_4.first_name}</strong> posted a picture</span>),
    details: (
      <div>
        <img src="https://placeimg.com/450/480/any" className="img-responsive img-thumbnail img-timeline"/>
      </div>
    )
  },
  {
    type: 'Twitter',
    created: moment().subtract(2, 'days').subtract(3, 'hours').format(),
    icon: 'ion-social-twitter',
    iconColor: 'twitter',
    avatar: FAKE_USER_3.photos.avatar.small,
    avatarChild: FAKE_USER_4.photos.avatar.small,
    metaData: {uid: FAKE_USER_3.first_name},
    action: (<span><strong>{FAKE_USER_3.first_name}</strong> tweeted a reply to <strong>@{FAKE_USER_4.first_name}</strong></span>),
    details: (
      <Tweet tweet={FAKE_TWEETS[3]}/>
    )
  },
  {
    type: 'LinkedIn',
    created: moment().subtract(2, 'days').format(),
    icon: 'ion-social-linkedin',
    iconColor: 'linkedin',
    avatar: null,
    metaData: {uid: FAKE_USER_4.first_name},
    action: (<span><strong>{FAKE_USER_4.first_name}</strong> posted to linkedin</span>),
    details: (
        <p>&ldquo;The world is a dangerous place to live; not because of the people who are evil, but because of the people who don&rsquo;t do anything about it.&rdquo;</p>
    )
  },
  {
    type: 'Twitter',
    created: moment().subtract(7, 'hours').format(),
    icon: 'ion-social-twitter',
    iconColor: 'twitter',
    avatar: FAKE_USER_2.photos.avatar.small,
    metaData: {uid: FAKE_USER_2.first_name},
    action: (<span><strong>{FAKE_USER_2.first_name}</strong> retweeted</span>),
    details: (
      <Tweet tweet={FAKE_TWEETS[2]} showMedia={false}/>
    )
  },
  {
    type: 'Instagram',
    created: moment().subtract(3, 'hours').format(),
    icon: 'ion-social-instagram',
    iconColor: 'instagram',
    avatar: FAKE_USER_3.photos.avatar.small,
    metaData: {uid: FAKE_USER_3.first_name},
    action: (<span><strong>{FAKE_USER_3.first_name}</strong> posted three pictures</span>),
    details: (
      <div>
        <img src="https://placeimg.com/450/480/any" className="img-responsive img-thumbnail img-timeline"/>
        <img src="https://placeimg.com/450/480/nature" className="img-responsive img-thumbnail img-timeline"/>
        <img src="https://placeimg.com/800/400/any" className="img-responsive img-thumbnail img-timeline"/>
      </div>
    )
  },
  {
    type: 'Hackernews',
    created: moment().subtract(0.9, 'hours').format(),
    icon: 'ion-social-hackernews',
    iconColor: 'ycombinator',
    avatar: FAKE_USER_5.photos.avatar.small,
    metaData: {uid: FAKE_USER_5.first_name},
    action: (<span><strong>{FAKE_USER_5.first_name}</strong> posted a comment on HN</span>),
    details: (
      <p>&ldquo;You may not always have a comfortable life and you will not always be able to solve all of the world's problems at once but don't ever underestimate the importance you can have because history has shown us that courage can be contagious and hope can take on a life of its own.&rdquo;</p>
    )
  },
  {
    type: 'Dribbble',
    created: moment().subtract(1, 'minutes').format(),
    icon: 'ion-social-dribbble',
    iconColor: 'dribbble',
    avatar: FAKE_USER_1.photos.avatar.small,
    metaData: {uid: FAKE_USER_1.first_name},
    action: (<span><strong>{FAKE_USER_1.first_name}</strong> Rebounded your shot</span>),
    details: (
      <div>
        <img src="https://placeimg.com/800/400/any" className="img-responsive img-thumbnail img-timeline"/>
      </div>
    )
  }

]
