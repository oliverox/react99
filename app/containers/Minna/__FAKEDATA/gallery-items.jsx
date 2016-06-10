var React = require('react/addons');
var Button = require('react-bootstrap/lib/Button');
var FAKE_USERS = require('./users');


var FAKE_USER_1 = FAKE_USERS[6];
var FAKE_USER_2 = FAKE_USERS[7];
var FAKE_USER_3 = FAKE_USERS[8];
var FAKE_USER_4 = FAKE_USERS[1];
var FAKE_USER_5 = FAKE_USERS[10];

module.exports = [
  {
    id: 1,
    img: FAKE_USER_5.photos.avatar.large,
    header: 'People',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
        auctor. Aenean eu leo quam. Etiam porta sem malesuada magna mollis
        euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur
        et. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit.
        Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent
         commodo cursus magna, vel scelerisque nisl consectetur et.</p>

        <p>Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
        vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Curabitur blandit tempus porttitor.</p>

        <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam
        eget risus varius blandit sit amet non magna. Nullam quis risus eget
        urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor
        fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Sed posuere consectetur est at lobortis.</p>

        <p>Curabitur blandit tempus porttitor. Sed posuere consectetur est at
        lobortis. Maecenas faucibus mollis interdum. Etiam porta sem malesuada
        magna mollis euismod. Morbi leo risus, porta ac consectetur ac,
        vestibulum at eros.</p>

        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  },
  {
    id: 2,
    img: 'https://placeimg.com/600/300/tech',
    header: 'Technology',
    body: 'A bare string'
  },
  {
    id: 3,
    img: 'https://placeimg.com/500/500/nature',
    header: 'Nature',
    body: null
  },
  {
    id: 4,
    img: 'https://placeimg.com/500/500/animals',
    header: 'Animals',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
      </div>
    )
  },
  {
    id: 5,
    img: 'https://placeimg.com/500/500/arch',
    header: null,
    body: null
  }
  ,{
    id: 6,
    img: 'https://placeimg.com/640/640/people',
    header: null,
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
      </div>
    )
  },
  {
    id: 7,
    img: 'https://placeimg.com/640/340/tech',
    header: 'Technology',
    body: (
        <p>Vivamus sagittis lacus vel augue laoreet rutrum.</p>
    )
  },
  {
    id: 8,
    img: 'https://placeimg.com/540/540/nature',
    header: 'Nature',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  },
  {
    id: 9,
    img: 'https://placeimg.com/540/540/animals',
    header: 'Animals',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  },
  {
    id: 10,
    img: 'https://placeimg.com/545/500/arch',
    header: 'Architecture',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  }
  ,{
    id: 11,
    img: FAKE_USER_1.photos.avatar.large,
    header: 'People',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  },
  {
    id: 12,
    img: 'https://placeimg.com/480/380/tech',
    header: 'Technology',
    body: (
        <p>Vivamus sagittis lacus vel augue laoreet rutrum.</p>
    )
  },
  {
    id: 13,
    img: 'https://placeimg.com/580/600/nature',
    header: 'Nature',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  },
  {
    id: 14,
    img: 'https://placeimg.com/680/520/animals',
    header: 'Animals',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  },
  {
    id: 15,
    img: 'https://placeimg.com/520/500/arch',
    header: 'Architecture',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  }
  ,{
    id: 16,
    img: FAKE_USER_2.photos.avatar.large,
    header: 'People',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  },
  {
    id: 17,
    img: 'https://placeimg.com/480/380/tech',
    header: 'Technology',
    body: (
        <p>Vivamus sagittis lacus vel augue laoreet rutrum.</p>
    )
  },
  {
    id: 18,
    img: 'https://placeimg.com/480/600/nature',
    header: 'Nature',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  },
  {
    id: 19,
    img: 'https://placeimg.com/480/520/animals',
    header: 'Animals',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  },
  {
    id: 20,
    img: 'https://placeimg.com/420/700/arch',
    header: 'Architecture',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  }
  ,{
    id: 21,
    img: FAKE_USER_3.photos.avatar.large,
    header: 'People',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  },
  {
    id: 22,
    img: 'https://placeimg.com/630/330/tech',
    header: 'Technology',
    body: (
        <p>Vivamus sagittis lacus vel augue laoreet rutrum.</p>
    )
  },
  {
    id: 23,
    img: 'https://placeimg.com/530/630/nature',
    header: 'Nature',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  },
  {
    id: 24,
    img: 'https://placeimg.com/630/530/animals',
    header: 'Animals',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  },
  {
    id: 25,
    img: 'https://placeimg.com/530/500/arch',
    header: 'Architecture',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  }
  ,{
    id: 26,
    img: FAKE_USER_4.photos.avatar.large,
    header: 'People',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  },
  {
    id: 27,
    img: 'https://placeimg.com/480/330/tech',
    header: 'Technology',
    body: (
        <p>Vivamus sagittis lacus vel augue laoreet rutrum.</p>
    )
  },
  {
    id: 28,
    img: 'https://placeimg.com/480/630/nature',
    header: 'Nature',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  },
  {
    id: 29,
    img: 'https://placeimg.com/430/520/animals',
    header: 'Animals',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  },
  {
    id: 30,
    img: 'https://placeimg.com/430/530/arch',
    header: 'Architecture',
    body: (
      <div>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam.</p>
        <Button bsSize="xsmall" className="outline outline-subtle">Read Article</Button>
      </div>
    )
  }
];
