var React = require('react/addons');
var moment = require('moment');

var items = [
  {
    id: '7f32de18-f73b-4afc-b6af-b3f5e74ea02f',
    title: 'Meet w/ Leonardo Bonacci',
    allDay: false,
    start: moment().format(),
    end: moment().add(1, 'hours').format(),
    description: 'Black then white are all I see in my infancy. Red and yellow then came to be, reaching out to me. lets me see.',
    categories: [
      {
        name: 'Work',
        slug: 'work'
      }
    ]
  },
  {
    id: '7f32de18-f73b-4afc-b6af-b3f5e74ea02f',
    title: 'Brainstorming session',
    allDay: false,
    start: moment().startOf('day').add(1, 'days').add(3, 'hours').format(),
    end: moment().startOf('day').add(1, 'days').add(5, 'hours').format(),
    description: null,
    categories: [
      {
        name: 'Work',
        slug: 'work'
      }
    ]
  },
  {
    id: 'f7a25a30-2fb9-46dc-adfc-b1569c8e17bf',
    title: 'React Q&A',
    allDay: false,
    start: moment().startOf('day').add(1, 'days').add(0, 'hours').format(),
    end: moment().startOf('day').add(1, 'days').add(1, 'hours').format(),
    description: 'Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.',
    categories: [
      {
        name: 'Personal',
        slug: 'personal'
      }
    ]
  },
  {
    id: 'ec0eb5e7-5d1a-4513-86e0-7ede022451a2',
    title: 'Volunteer at UCSF',
    allDay: false,
    start: moment().startOf('day').add(2, 'days').add(16, 'hours').format(),
    end: moment().startOf('day').add(2, 'days').add(17, 'hours').format(),
    description: 'Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.',
    categories: [
      {
        name: 'Personal',
        slug: 'personal'
      }
    ]
  },
  {
    id: '6e4ce515-b370-40ab-820a-f326d1906d8e',
    title: 'Black Hat Briefings',
    allDay: false,
    start: moment().startOf('day').add(3, 'days').add(6, 'hours').format(),
    end: moment().startOf('day').add(3, 'days').add(8, 'hours').format(),
    description: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    categories: [
      {
        name: 'Work',
        slug: 'work'
      }
    ]
  },
  {
    id: '51b5164d-559c-4937-a48a-406ac7036e5a',
    title: 'Node Meetup',
    allDay: false,
    start: moment().startOf('day').add(5, 'days').format(),
    end: moment().startOf('day').add(5, 'days').add(2, 'hours').format(),
    description: 'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: [
      {
        name: 'Personal',
        slug: 'personal'
      }
    ]
  },
  {
    id: '51b5164d-559c-4937-a48a-406ac7036e5a',
    title: 'Launch Party',
    allDay: false,
    start: moment().startOf('day').add(8, 'days').add(3, 'hours').format(),
    end: moment().startOf('day').add(8, 'days').add(6, 'hours').format(),
    description: 'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: [
      {
        name: 'Work',
        slug: 'work'
      }
    ]
  }
];

module.exports = items;
