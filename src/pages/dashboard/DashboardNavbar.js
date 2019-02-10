import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Icon,
  Popover,
  Menu,
  MenuItem,
  Button,
  Classes,
  Alignment
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { widgets } from './widgets';
import { widgetIsOpened, openWidget } from './utils';
import { updateWindows } from './actions';

class DashboardNavbar extends PureComponent {
  onSelectWidget(widget) {
    if (!widgetIsOpened(widget, this.props.dashboard)) {
      this.props.updateWindows(openWidget(widget, this.props.dashboard));
    }
  }

  render() {
    const widgetsMenu = (
      <Menu>
        {Object.keys(widgets).map(widget => (
          <MenuItem
            key={widget}
            icon={widgets[widget].icon}
            text={widgets[widget].title}
            onClick={() => this.onSelectWidget(widget)}
          ></MenuItem>
        ))}
      </Menu>
    )

    return (
      <Navbar className={Classes.DARK}>
        <NavbarGroup>
          <Icon
            className="dashboard_icon"
            icon={IconNames.DASHBOARD}
            iconSize={Icon.SIZE_LARGE}
          ></Icon>
          <NavbarHeading>Dashboard</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Popover content={widgetsMenu}>
            <Button icon={IconNames.INSERT}>Open widget...</Button>
          </Popover>
        </NavbarGroup>
      </Navbar>
    )
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
)(DashboardNavbar);
