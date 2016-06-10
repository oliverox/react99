function rand(min, max, num) {
  var rtn = [];
  while (rtn.length < num) {
    rtn.push(Math.floor((Math.random() * (max - min)) + min));
  }
  if (num === 1) {
    return rtn[0];
  }
  return rtn;
}

var pies = [
  {
    metadata: {
      heading: 'Homepage',
      metricLabel: 'Bounce Rate',
      details: 'Daily',
      metric: '30',
      metricPrefix: '%'
    },
    options: {
      label: {
        show: false
      }
    },
    data: {
      columns: [
        ['data1'].concat(rand(70,200,1)),
        ['data2'].concat(rand(70,200,1)),
      ]
    }
  },
  {
    metadata: {
      heading: 'Homepage',
      metricLabel: 'Bounce Rate',
      details: 'Daily',
      metric: '30%'
    },
    options: {
      label: {
        show: false
      }
    },
    data: {
      columns: [
        ['data1'].concat(rand(70,200,1)),
        ['data2'].concat(rand(70,200,1)),
      ]
    }
  }
];

var lines = [
  {
    metadata: {
      heading: 'Homepage',
      metricLabel: 'New Visitors',
      details: 'Daily',
      metric: '30%',
      direction: 'down'
    },

    data: {
      columns: [
        ['New Visitors'].concat(rand(140,155,30)),
      ]
    }
  }
];

var bars = [
  {
    metadata: {
      heading: 'Homepage',
      metricLabel: 'Downloads',
      details: 'Daily',
      metric: '495',
      direction: 'up'
    },
    options: {
      width: {ratio: 1.00}
    },
    data: {
      columns: [
        ['Sign ups'].concat(rand(100,500,50))
      ]
    }
  },
  {
    metadata: {
      heading: 'Homepage',
      metricLabel: 'Signups',
      details: 'Daily',
      metric: '100',
      direction: 'up'

    },
    options: {
      width: {ratio: 1.00}
    },
    data: {
      columns: [
        ['Sign ups'].concat(rand(400,500,10))
      ]
    }
  }
];

var gauges = [
  {
    metadata: {
      heading: 'Homepage',
      metricLabel: 'Signups',
      details: 'Daily',
      metric: '100'
    },
    data: {
      columns: [['data',51.2]]
    }
  }
];

var sparklines = [
  {
    metadata: {
      heading: 'Homepage',
      metricLabel: 'Signups',
      details: 'Daily',
      metric: '100'
    },
    data: {
      columns: [
        ['data1'].concat(rand(5,10,7))
      ]
    }
  }
];

var scatters = [
  {
    metadata: {
      heading: 'Homepage',
      metricLabel: 'HTTP 200 Codes',
      details: 'Hourly',
      metric: '182',

    },
    options: {
      width: {ratio: 1.00}
    },
    data: {
      columns: [
        ["200's", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 2.6, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3  , 3.0, 3.8, 3.2, 3.7, 3.3],
        ["300's", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3  , 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3,  2.6, 3.0, 2.9, 2.9, 2.5, 2.8],
        ["400's", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0 , 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
        ["500's", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
      ]
    }
  }
];

module.exports = {
  rand: rand,
  pies: pies,
  lines: lines,
  bars: bars,
  sparklines: sparklines,
  gauges: gauges,
  scatters: scatters
};
