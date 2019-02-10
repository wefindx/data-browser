import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Mosaic } from 'react-mosaic-component';
import DashboardNavbar from './DashboardNavbar';
import { widgets } from './widgets';
import { updateWindows } from './actions';
import './Dashboard.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';

class Dashboard extends PureComponent {
  render() {
    return (
      <div className="dashboard">
        <DashboardNavbar></DashboardNavbar>
        <div className="dashboard_content">
          <Mosaic
            renderTile={(id, path) => widgets[id].component(path, this.props, this.state)}
            value={this.props.dashboard}
            onChange={this.props.updateWindows}
          ></Mosaic>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ dashboard }, ownProps) => ({
  dashboard,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateWindows: (dashboard) => dispatch(updateWindows(dashboard))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
