import React from 'react';
import { MosaicWindow } from 'react-mosaic-component';
import { IconNames } from '@blueprintjs/icons';
import Search from '../../components/search/Search';
import GithubUSer from '../../components/github-user/GithubUser';
import Clock from '../../components/clock/Clock';

/**
 * Widget types
 */
export const WIDGET_SEARCH = 'WIDGET_SEARCH';
export const WIDGET_GITHUB_USER = 'WIDGET_GITHUB_USER';
export const WIDGET_CLOCK = 'WIDGET_CLOCK';

/**
 * Widget components
 */
export const widgets = {
  [WIDGET_SEARCH]: {
    icon: IconNames.SEARCH,
    title: 'Search',
    component: (path, { location, history }) => (
      <MosaicWindow path={path} title="Search" location={location} history={history}>
        <Search location={location} history={history}></Search>
      </MosaicWindow>
    )
  },
  [WIDGET_GITHUB_USER]: {
    icon: IconNames.USER,
    title: 'GitHub User',
    component: (path, { location, history }) => (
      <MosaicWindow path={path} title="GitHub User" location={location} history={history}>
        <GithubUSer location={location} history={history}></GithubUSer>
      </MosaicWindow>
    )
  },
  [WIDGET_CLOCK]: {
    icon: IconNames.TIME,
    title: 'Clock',
    component: (path) => (
      <MosaicWindow path={path} title="Clock">
        <Clock></Clock>
      </MosaicWindow>
    )
  }
};
