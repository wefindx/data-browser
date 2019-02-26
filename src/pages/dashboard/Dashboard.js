import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Mosaic } from 'react-mosaic-component';
import { Menu, Submenu, Item, IconFont, MenuProvider } from 'react-contexify';
import { Icon } from '@blueprintjs/core';
import { widgets } from './widgets';
import { updateWindows } from './actions';
import { widgetIsOpened, openWidget } from './utils';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';
import 'react-contexify/dist/ReactContexify.min.css';
import './css/mosaic-thin-theme.css';
import './css/dashboard.css';
import './css/menu.css';

class Dashboard extends PureComponent {
  widgetsMenu = (
    <Menu id="widgets-menu" className="menu">
      <Submenu label="Open widget...">
        {Object.keys(widgets).map(widget => (
          <Item
            className="menu_item"
            key={widget}
            onClick={() => this.onSelectWidget(widget)}
          >
            <Icon icon={widgets[widget].icon} className="menu_icon" />
            {widgets[widget].title}
          </Item>
        ))}
      </Submenu>
    </Menu>
  );

  onSelectWidget(widget) {
    if (!widgetIsOpened(widget, this.props.dashboard)) {
      this.props.updateWindows(openWidget(widget, this.props.dashboard));
    }
  }

  render() {
    return (
      <div className="dashboard">
        <MenuProvider id="widgets-menu" className="dashboard_content">
          <Mosaic
            className="mosaic-blueprint-theme mosaic-thin-theme"
            renderTile={(id, path) => widgets[id].component(path, this.props, this.state)}
            value={this.props.dashboard}
            onChange={this.props.updateWindows}
          ></Mosaic>
        </MenuProvider>
        {this.widgetsMenu}
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
