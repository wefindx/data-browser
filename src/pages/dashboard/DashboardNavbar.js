import React, { PureComponent } from 'react';
import { WIDGET_SEARCH, WIDGET_CLOCK } from './widgets';
import ToggleWindowBtn from './ToggleWIndowBtn';
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Icon,
  ButtonGroup,
  Classes,
  Alignment
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

export default class DashboardNavbar extends PureComponent {
  render() {
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
          <span className="dashboard_actions-label">Add window:</span>
          <ButtonGroup>
            <ToggleWindowBtn icon={IconNames.SEARCH} widget={WIDGET_SEARCH}>Search</ToggleWindowBtn>
            <ToggleWindowBtn icon={IconNames.TIME} widget={WIDGET_CLOCK}>Clock</ToggleWindowBtn>
          </ButtonGroup>
        </NavbarGroup>
      </Navbar>
    )
  }
}
