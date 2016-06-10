var React = require('react/addons');
var moment = require('moment');

var FAKE_USERS = require('./users');

var blogPosts = [
  {
    title: 'React Native v0.4',
    author: FAKE_USERS[0],
    created: moment().subtract(5, 'days').format('X'),
    modified: moment().subtract(2, 'days').format('X'),
    slug: 'react-native',
    image: 'https://placeimg.com/900/600/tech',
    teaser: "It's been three weeks since we open sourced React Native and there's been some insane amount of activity already: over 12.5k stars, 1000 commits, 500 issues, 380 pull requests, and 100 contributors, plus 35 plugins and 1 app in the app store!",
    content: (
      <div>
        <p className="lead">It's been three weeks since we open sourced React Native and there's been some insane amount of activity already: over 12.5k stars, 1000 commits, 500 issues, 380 pull requests, and 100 contributors, plus <a href="http://react.parts/native-ios">35 plugins</a> and <a href="http://herman.asia/building-a-flashcard-app-with-react-native">1 app in the app store</a>! We were expecting some buzz around the project but this is way beyond anything we imagined. Thank you!</p>

        <p>I'd especially like to thank community members Brent Vatne and James Ide who have both already contributed meaningfully to the project and have been extremely helpful on IRC and with issues and pull requests</p>
        <h2>Changelog</h2>
        <p>The main focus of the past few weeks has been to make React Native the best possible experience for people outside of Facebook. Here's a high level summary of what's happened since we open sourced:</p>
        <ul>
          <li><strong>Error messages and documentation</strong>: We want React Native to be the absolute best developer experience for building mobile apps. We've added a lot of warnings, improved the documentation, and fixed many bugs. If you encounter anything, and I really mean anything, that is not expected or clear, please create an issue - we want to hear about it and fix it.</li>
          <li><strong>NPM modules compatibility</strong>: There are a lot of libraries on NPM that do not depend on node/browser internals that would be really useful in React Native, such as superagent, underscore, parse, and many others.  The packager is now a lot more faithful to node/browserify/webpack dependency resolution. If your favorite library doesn't work out of the box, please open up an issue.</li>
          <li><strong>Infrastructure</strong>: We are refactoring the internals of React Native to make it easier to plug in to existing iOS codebases, as well as improve performance by removing redundant views and shadow views, supporting multiple root views and manually registering classes to reduce startup time.</li>
          <li><strong>Components</strong>: The API for a lot of UI components and APIs, especially the ones we're not using heavily inside of Facebook, has dramatically improved thanks to many of your pull requests.</li>
          <li><strong>Tests</strong>: We ported JavaScript tests, iOS Snapshot tests, and End to End tests to Travis CI. We have broken GitHub master a couple of times (whoops!) when syncing and we hope that with this growing suite of tests it's going to become harder and harder to do so.</li>
          <li><strong>Patent Grant</strong>: Many of you had concerns and questions around the PATENTS file. We pushed <a href="https://code.facebook.com/posts/1639473982937255/updating-our-open-source-patent-grant/">a new version of the grant</a>.</li>
          <li><strong>Per commit history</strong>: In order to synchronize from Facebook to GitHub, we used to do one giant commit every few days. We improved our tooling and now have per commit history that maintains author information (both internal and external from pull requests), and we retroactively applied this to historical diffs to provide proper attribution.</li>
        </ul>
        <h2>Where are we going?</h2>
        <p>In addition to supporting pull requests, issues, and general improvements, we're also working hard on our internal React Native integrations and on React Native for Android.</p>
      </div>
    )
  },
  {
    title: 'Bootstrap 3.3.4 released',
    author: FAKE_USERS[1],
    created: moment().subtract(6, 'days').format('X'),
    modified: moment().subtract(6, 'days').format('X'),
    slug: 'bootstrap-released',
    image: 'https://placeimg.com/900/600/tech',
    teaser: "Bootstrap 3.3.4 is here! This release has been focused on bug fixes and documentation improvements. We’ve had over 325 commits from 29 contributors since our last release!",
    content: (
      <div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="//www.youtube.com/embed/_dx0qWHL7dc?rel=0" width="760" height="570" allowfullscreen=""></iframe>
          </div>

          <br/>

          <p>Bootstrap 3.3.4 is here! This release has been focused on bug fixes and documentation improvements. We’ve had over 325 commits from 29 contributors since our last release! Nice.</p>

          <p>Here are some of the highlights:</p>

          <ul>
            <li>Fixes for a few significant bugs in the Modal plugin.</li>
            <li>Fixes for a couple annoying bugs in the ScrollSpy plugin.</li>
            <li><a href="https://atmospherejs.com/twbs/bootstrap">Bootstrap is now also available as a Meteor package in the Atmosphere package index.</a></li>
            <li>Convenience aliases have been added for currency symbol Glyphicons based on their related 3-letter ISO currency codes. For example, <code>.glyphicon-rub</code> is a new alias for <code>.glyphicon-ruble</code>, the currency symbol for the Russian ruble (RUB).</li>
            <li>We have deployed <a href="http://bryanbraun.github.io/anchorjs/">AnchorJS</a> in our documentation to make it easier to link to specific sections within the docs.</li>
          </ul>

          <p>For a complete breakdown, <a href="https://github.com/twbs/bootstrap/releases/tag/v3.3.4">read the release changelog</a> or the <a href="https://github.com/twbs/bootstrap/issues?q=milestone%3Av3.3.4+is%3Aclosed">v3.3.4 milestone</a>.</p>

          <h2 id="what-happened-to-v333">What happened to v3.3.3?</h2>

          <p>Since our previous release was v3.3.2, you’re probably wondering why this release isn’t v3.3.3 instead. Basically, <a href="https://github.com/twbs/bootstrap-sass">the official Sass port of Bootstrap</a> had <a href="https://github.com/twbs/bootstrap-sass/commit/daeb43dcc7b0ab06328acaca0549ee68c039aaa6">a Sass-specific bug</a> in their v3.3.2 release, so they immediately issued a follow-up release to fix the bug. This bugfix release was initially numbered as v3.3.2+1. However, this 4-digit version number scheme has caused grief with some tools, so with the blessing of the Core Team, the Sass Team took this opportunity to switch to a more vanilla 3-digit SemVer numbering scheme. Thus, bootstrap-sass v3.3.2+1 was re-released as <a href="https://github.com/twbs/bootstrap-sass/releases/tag/v3.3.3">bootstrap-sass v3.3.3</a>, with only the version number changed compared to v3.3.2+1.</p>

          <p>To avoid confusion regarding which bootstrap-sass release(s) correspond to which upstream Bootstrap release, Bootstrap’s version numbering will henceforth skip over any bootstrap-sass patch release version numbers. Thus, the patch digit (i.e. the 3rd digit) of bootstrap-sass’s version number may be ahead of Bootstrap’s due to Sass-specific fixes, and the next Bootstrap release’s number will always be greater than the previous bootstrap-sass release’s number.</p>

          <h2 id="download-bootstrap">Download Bootstrap</h2>

          <p>Download the latest release—source code, compiled assets, and documentation—as a ZIP file directly from GitHub:</p>

          <p><a className="btn btn-success" href="https://github.com/twbs/bootstrap/archive/v3.3.4.zip">Download Bootstrap 3.3.4</a></p>

          <p>Hit the <a href="https://github.com/twbs/bootstrap">project repository</a> or <a href="https://github.com/twbs/bootstrap-sass">Sass repository</a> for more options. Also, remember <a href="https://www.npmjs.org/package/bootstrap">we’re available on npm</a>, too.</p>

          <h2 id="bootstrap-cdn">Bootstrap CDN</h2>

          <p>After reviewing the changelog, update your CDN links to point to the v3.3.4 files:</p>

          <p>&lt;3,</p>

          <p><a href="https://github.com/cvrebert">@cvrebert</a> &amp; <a href="https://github.com/orgs/twbs/people">team</a></p>

        </div>

    )
  },
  {
    title: 'Demo of Blog Components',
    author: FAKE_USERS[3],
    created: moment().subtract(8, 'days').format('X'),
    modified: moment().subtract(8, 'days').format('X'),
    slug: 'test-post',
    teaser: "This is a short teaser",
    content: (
      <div>
        Content
      </div>
    )
  }
];

module.exports = blogPosts;

