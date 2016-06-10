import React from 'react';
import ReactDOM from 'react-dom';
// import Reactgrid from 'reactgrid';
import _ from 'underscore';
import moment from 'moment';
import colorbrewer from 'colorbrewer';
import c3 from 'c3';

// c3 doesn't support isomorphic apps
// Remove try catch block once this issue has been closed.
// https://github.com/masayuki0812/c3/issues/1074#issuecomment-84813612
// try {const c3 = require('c3');} catch(e){}

// Fake data
import FAKE_DATA_CHARTS from '../../__FAKEDATA/charts';
import FAKE_DATA_USERS from '../../__FAKEDATA/users';

// React Bootstrap
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
// import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

// Custom Components
import MetricPanel from '../widgets/metric-panel';
// import PageHeader from '../components/bootstrap/page-header.jsx';
// import colors from '../components/colors';

/**
 * Component: Dashboard
 *
 * Display the dashboard
 */
export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      actors: [],
    };
    this.updateChartType = this.updateChartType.bind(this);
  }

  componentDidMount() {
    this.updateActors();
    this.createCharts();
  }

  componentWillUpdate(nextProps, nextState) {
    // if (this.isMounted() && this.ageChart && nextState.actors !== this.state.actors){
    if (this.ageChart && nextState.actors !== this.state.actors) {
      const ageData = this.ageData();
      const self = this;
      this.ageChart.unload({
        done: () => {
          self.ageChart.load({
            columns: ageData,
          });
        },
      });
    }
  }

  componentWillUnmount() {
    this.destroyCharts();
  }

  createCharts() {
    const ageData = this.ageData();

    this.mainChart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.mainChart),
      color: {
        pattern: colorbrewer.GnBu[6],
      },
      data: {
        columns: [
          ['data1', 30, 20, 50, 40, 60, 50],
          ['data2', 200, 130, 90, 240, 130, 220],
          ['data3', 300, 200, 160, 400, 250, 250],
          ['data4', 200, 130, 90, 240, 130, 220],
          ['data5', 130, 120, 150, 140, 160, 150],
          ['data6', 90, 70, 20, 50, 60, 120],
        ],
        type: 'bar',
        types: {
          data3: 'spline',
          data4: 'line',
          data6: 'area',
        },
        groups: [
          ['data1', 'data2'],
        ],
      },
    });

    this.mainChart.hide(['data3', 'data4', 'data6']);

    this.ageChart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.ageChart),
      color: {
        pattern: colorbrewer.GnBu[6],
      },
      data: {
        columns: ageData,
        type: 'pie',
        labels: false,
      },
      axis: {
        x: { show: false },
        y: { show: false },
      },
    });
  }

  destroyCharts() {
    this.mainChart = this.mainChart && this.mainChart.destroy();
    this.ageChart = this.ageChart && this.ageChart.destroy();
  }

  ageData() {
    const ages = _.countBy(this.state.actors, (value) => {
      const dob = moment(value.date_of_birth, 'YYYY-MM-DD');
      const years = moment().diff(dob, 'years');
      let out = 'groupD';

      if (years < 25) {
        out = 'groupA';
      } else if (years >= 25 && years < 45) {
        out = 'groupB';
      } else if (years >= 45 && years < 55) {
        out = 'groupC';
      }
      return out;
    });

    ages.groupA = ages.groupA || 0;
    ages.groupB = ages.groupB || 0;
    ages.groupC = ages.groupC || 0;
    ages.groupD = ages.groupD || 0;

    return [
      ['< 25', ages.groupA],
      ['25 - 45', ages.groupB],
      ['45 - 55', ages.groupC],
      ['55+', ages.groupD],
    ];
  }

  updateChartType(type) {
    if (this.ageChart) {
      this.ageChart.transform(type);
    }
  }

  updateActors() {
    this.setState({
      actors: _.sortBy(_.sample(FAKE_DATA_USERS, 10), 'id'),
    });
  }

  render() {
    // const columns = [
    //   {
    //     label: 'ID',
    //     name: 'id',
    //     cell: 'integer',
    //   },
    //   {
    //     label: 'Name',
    //     name: 'name',
    //     cell: 'string',
    //   },
    //   {
    //     label: 'Gender',
    //     name: 'gender',
    //     cell: 'string',
    //   },
      // {
      //   label: 'Age',
      //   cell: React.createClass(Reactgrid.Cells.Cell.extend({
      //     render: () => {
      //       const model = this.props.model; // eslint-disable-line
      //       const date = moment(model.date_of_birth, 'YYYY-MM-DD').fromNow(true);
      //       return (<td className={this.props.className}>{date} old</td>); // eslint-disable-line
      //     },
      //   })),
      // },
    // ];

    // const actors = this.state.actors;
    // const pieOne = FAKE_DATA_CHARTS.pies[0];
    // const gaugeOne = FAKE_DATA_CHARTS.gauges[0];
    // const pieTwo = FAKE_DATA_CHARTS.pies[1];
    const lineOne = FAKE_DATA_CHARTS.lines[0];
    const barOne = FAKE_DATA_CHARTS.bars[0];
    // const areaSplineOne = FAKE_DATA_CHARTS.bars[1];
    // const sparklineOne = FAKE_DATA_CHARTS.sparklines[0];
    const scatterOne = FAKE_DATA_CHARTS.scatters[0];
    const fluid = true;

    return (
      <Grid id="page-home" className="section" {...this.props} fluid={fluid}>
        <Row>
          <Col sm={12}>
            <div ref="mainChart"></div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={3} md={2}>
            <MetricPanel
              metric="2542173"
              metricLabel="Visits"
              iconDirection="up"
              details="Today"
            />
          </Col>
          <Col xs={6} sm={3} md={2}>
            <MetricPanel
              metric="2109"
              metricLabel="Share"
              iconDirection="down"
              details="Facebook"
            />
          </Col>
          <Col xs={6} sm={3} md={2}>
            <MetricPanel
              metric="84598.50"
              metricPrefix="$"
              metricLabel="Total Sales"
              iconDirection="same"
              details="Weeky"
            />
          </Col>
          <Col xs={6} sm={3} md={2}>
            <MetricPanel
              metric="10"
              metricSuffix="%"
              metricLabel="Conversions"
              iconDirection="up"
              details="Yesterday"
            />
          </Col>

          <Col xs={6} sm={3} md={2}>
            <MetricPanel
              metric="7570000"
              metricLabel="Signups"
              iconDirection="down"
              details="Monthly"
            />
          </Col>

          <Col xs={6} sm={3} md={2}>
            <MetricPanel
              metric="1.33"
              metricLabel="ROI"
              iconDirection="same"
              details="All Time"
            />
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <Well>
              {/* <PageHeader sm={12} mainHeader>
                <h3>Social Media <small>SHARES</small></h3>
              </PageHeader> */}

              <Col sm={12}>
                <h4>Facebook <small className="pull-right">24k</small></h4>
                <ProgressBar now={68} className="progress-bar-sm progress-bar-accent" />

                <h4>Instagram <small className="pull-right">12k</small></h4>
                <ProgressBar bsStyle="success" now={44} className="progress-bar-sm" />

                <h4>Twitter <small className="pull-right">9k</small></h4>
                <ProgressBar bsStyle="info" now={38} className="progress-bar-sm" />

                <h4>Tumblr <small className="pull-right">5k</small></h4>
                <ProgressBar bsStyle="warning" now={32} className="progress-bar-sm" />

                <h4>Reddit <small className="pull-right">1k</small></h4>
                <ProgressBar bsStyle="warning" now={20} className="progress-bar-sm" />

                <h4>Digg <small className="pull-right">10</small></h4>
                <ProgressBar bsStyle="warning" now={5} className="progress-bar-sm" />

              </Col>
            </Well>
          </Col>

          <Col sm={8}>
            <Col sm={6}>
              <MetricPanel
                oneColor
                chart="line"
                heading="minna.com"
                panelStyle="success"
                metric={barOne.metadata.metric}
                metricLabel={barOne.metadata.metricLabel}
                details={barOne.metadata.details}
                data={barOne.data}
                options={barOne.options}
                iconDirection={barOne.metadata.direction}
              />
            </Col>

            <Col sm={6}>
              <MetricPanel
                oneColor
                chart="area"
                heading="minna.com"
                bsStyle="danger"
                metric={lineOne.metadata.metric}
                metricLabel={lineOne.metadata.metricLabel}
                details={lineOne.metadata.details}
                data={lineOne.data}
                options={lineOne.options}
                iconDirection={lineOne.metadata.direction}
              />
            </Col>
            <Col sm={12}>
              <MetricPanel
                oneColor
                chart="scatter"
                heading="API Requests"
                panelStyle="primary"
                metric={scatterOne.metadata.metric}
                metricLabel={scatterOne.metadata.metricLabel}
                details={scatterOne.metadata.details}
                data={scatterOne.data}
                options={scatterOne.options}
                iconDirection="up"
              />
            </Col>
          </Col>

        </Row>

        <Row>
          <Col sm={6} >
            <h2>Ages
              <small>
                <span className="pull-right">
                  <Button bsStyle="link" bsSize="large" onClick={this.updateChartType.call('pie')}><i className="ion-ios-pie-outline" title="Change to pie chart" ></i></Button>

                  <Button bsStyle="link" bsSize="large" onClick={this.updateChartType.call('donut')}><i className="ion-ios-circle-outline" title="Change to donut chart" ></i></Button>

                  <Button bsStyle="link" bsSize="large" onClick={this.updateChartType.call('bar')}><i className="ion-stats-bars" title="Change to bar chart" ></i></Button>

                  <Button bsStyle="link" bsSize="large" onClick={this.updateActors}><i className="ion-ios-refresh-outline" title="Reload data" ></i></Button>
                </span>
              </small>
            </h2>
            <div ref="ageChart"></div>
          </Col>

          {/* <Col sm={6}>
            <Reactgrid.Table columns={columns} collection={actors} className="table table-striped" />
          </Col> */}
        </Row>
      </Grid>
    );
  }
}
