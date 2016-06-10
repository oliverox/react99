import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import c3 from 'c3';

// c3 doesn't support isomorphic apps
// Remove try catch block once this issue has been closed.
// https://github.com/masayuki0812/c3/issues/1074#issuecomment-84813612
// try {const c3 = require('c3');} catch(e){}

// React Bootstrap
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';

// Custom components
// import colors from '../colors';
import Rounder from '../../misc/rounder';

/**
 * Metric panel
 *
 * Display a single metric
 */
export default class MetricPanel extends React.Component {

  componentDidMount() {
    // if (this.isMounted() && this.getChartOptions()){
    if (this.getChartOptions()) {
      const chartOptions = this.getChartOptions();
      chartOptions.bindto = ReactDOM.findDOMNode(this.refs.chart);
      this.chart = c3.generate(chartOptions);
    }
  }

  componentWillUnmount() {
    let chart = this.chart;

    if (chart) {
      chart = chart.destroy();
    }
  }

  /**
   * Get Panel Style
   *
   * Since we are passing this.props.panelStyle direct to bootstrap,
   * remove white and accent as opstions.
   */
  getPanelStyle() {
    let panelStyle = this.props.panelStyle;

    // Do not pass white or accent to the bsStyle.
    if (panelStyle === 'white' || this.props.panelStyle === 'accent') {
      panelStyle = null;
    }

    return panelStyle;
  }

  getChartOptions() {
    if (!this.props.chart) {
      return null;
    }

    const chartOptions = {
      data: this.props.data,
      color: {
        pattern: [
          'rgba(255,255,255,1)',
          'rgba(255,255,255,0.2)',
          'rgba(255,255,255,0.4)',
          'rgba(255,255,255,0.6)',
          'rgba(255,255,255,0.8)',
        ],
      },
      axis: {
        x: { show: false },
        y: { show: false },
      },
      legend: { show: false },
      size: {
        height: 120,
      },
      point: {
        show: false,
      },
    };

    const chartType = this.props.chart.toLowerCase();
    chartOptions.data.type = chartType;

    if (this.props.chartOptions) {
      chartOptions[chartType] = this.props.chartOptions;
    }

    return chartOptions;
  }

  renderDetails(options) {
    const formatted = new Rounder(this.props.metric, { prefix: this.props.metricPrefix, suffix: this.props.metricSuffix });
    return (
      <span>
        <div className="the-metric" title={formatted.pretty()}>
          <span className="metric-prefix">{this.props.metricPrefix}</span>
          <span className="metric">{formatted.number()}</span>
          <span className="metric-suffix">{formatted.unit()}</span>
        </div>
        <div className="metric-label">{this.props.metricLabel} {options.icon}</div>
        <div className="metric-details">{this.props.details}</div>
      </span>
    );
  }

  renderSingleMetric(options) {
    const panelStyle = this.getPanelStyle();

    return (
      <Panel header={options.header} className={options.classNames} bsStyle={panelStyle} {...this.props}>
        {this.renderDetails(options)}
      </Panel>
    );
  }

  renderChart(options) {
    const panelStyle = this.getPanelStyle();

    return (
      <Panel header={options.header} className={options.classNames} bsStyle={panelStyle} {...this.props}>
        <Row>
          <Col xs={12}>
            {this.renderDetails(options)}
          </Col>
          <Col xs={12}>
            <div ref="chart"></div>
          </Col>

        </Row>
      </Panel>
    );
  }

  render() {
    const options = {};
    options.header = this.props.heading ? (<h3>{this.props.heading}</h3>) : null;

    switch (this.props.iconDirection) {
      case 'up':
        options.icon = 'ion-arrow-up-b';
        break;
      case 'down':
        options.icon = 'ion-arrow-down-b';
        break;
      case 'same':
        options.icon = 'ion-minus-round';
        break;
      default:
        options.icon = 'ion-arrow-up-b';
    }

    options.icon = options.icon ? <span className={`icon${this.props.iconDirection}`}><i className={options.icon}></i></span> : null;
    options.chart = this.props.chart && this.props.chart.toLowerCase();

    options.classNames = classnames({
      'metric-panel': true,
      'panel-accent': this.props.panelStyle === 'accent',
      'panel-white': this.props.panelStyle === 'white',
      'one-color': this.props.oneColor,
      'with-chart': !!options.chart,
    });

    if (options.chart) {
      return this.renderChart(options);
    }

    return this.renderSingleMetric(options);
  }
}

MetricPanel.propTypes = {
  data: React.PropTypes.object,
  accent: React.PropTypes.bool,
  oneColor: React.PropTypes.bool,
  heading: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
  ]),
  iconDirection: React.PropTypes.oneOf(['up', 'down', 'same']),
  metric: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  metricLabel: React.PropTypes.string,
  metricPrefix: React.PropTypes.string,
  metricSuffix: React.PropTypes.string,
  details: React.PropTypes.string,
  chart: React.PropTypes.string,
  chartOptions: React.PropTypes.object,
  panelStyle: React.PropTypes.string,
};

MetricPanel.defaultProps = {
  accent: false,
  oneColor: false,
  heading: null,
  iconDirection: null,
  metric: null,
  metricLabel: null,
  metricPrefix: null,
  details: null,
  chart: null,
  chartOptions: null,
};
