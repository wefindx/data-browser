import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import { MenuProvider, Menu, MenuItem, Submenu, MenuFilter } from 'react-ultimate-contextmenu'
import { Icon } from '@blueprintjs/core';
import { widgets } from './widgets';
import { updateWindows } from './actions';
import { widgetIsOpened, openWidget } from './utils';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';
import './css/mosaic-thin-theme.css';
import './css/dashboard.css';

class Dashboard extends PureComponent {
  onSelectWidget(widget) {
    if (!widgetIsOpened(widget, this.props.dashboard)) {
      this.props.updateWindows(openWidget(widget, this.props.dashboard));
    }
  }

  render() {
    return (
      <div className="dashboard">
        <MenuProvider className="dashboard_content">
          <Mosaic
            className="mosaic-blueprint-theme mosaic-thin-theme"
            renderTile={(id, path) => typeof this.props.dashboard === 'string'
              ? widgets[id].component(path, this.props, this.state)
              : <MosaicWindow path={path} title={widgets[id].title} {...this.props} {...this.state}>
                {widgets[id].component(path, this.props, this.state)}
              </MosaicWindow>
            }
            value={this.props.dashboard}
            onChange={this.props.updateWindows}
          ></Mosaic>
          <Menu>
            <Submenu label="Open widget...">
              <MenuFilter available={Object.keys(widgets).length > 10} />
              {Object.keys(widgets).map(widget => (
                <MenuItem
                  leftIcon={<Icon icon={widgets[widget].icon} />}
                  key={widget}
                  onClick={() => this.onSelectWidget(widget)}
                >
                  {widgets[widget].title}
                </MenuItem>
              ))}
            </Submenu>
          </Menu>
        </MenuProvider>
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
