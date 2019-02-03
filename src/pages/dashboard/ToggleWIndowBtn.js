import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';
import { openWindow, closeWindow } from './actions';

const ToggleWindowBtn = ({ icon, active, children, openWindow, closeWindow }) => (
  <Button icon={icon} active={active} onClick={active ? closeWindow : openWindow}>{children}</Button>
)

const mapStateToProps = ({ dashboard }, { widget}) => ({
  active: dashboard && (widget === dashboard || widget === dashboard.first || widget === dashboard.second)
})

const mapDispatchToProps = (dispatch, { widget }) => ({
  openWindow: () => dispatch(openWindow(widget)),
  closeWindow: () => dispatch(closeWindow(widget))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleWindowBtn);
