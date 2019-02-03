import React from 'react';
import { MosaicWindow } from 'react-mosaic-component';
import Search from '../../components/search/Search';
import Clock from '../../components/clock/Clock';

/**
 * Widget types
 */
export const WIDGET_SEARCH = 'WIDGET_SEARCH';
export const WIDGET_CLOCK = 'WIDGET_CLOCK';

/**
 * Widget components
 */
export const widgets = {
  [WIDGET_SEARCH]: (path, { location, history }) => (
    <MosaicWindow path={path} title="Search" location={location} history={history}>
      <Search location={location} history={history}></Search>
    </MosaicWindow>
  ),
  [WIDGET_CLOCK]: (path) => (
    <MosaicWindow path={path} title="Clock">
      <Clock></Clock>
    </MosaicWindow>
  )
};
