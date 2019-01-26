import React from 'react';
import ReactDOM from 'react-dom';
import { Tabbar, Tab } from 'react-onsenui';

import HomePage from './HomePage';
import SettingsPage from './SettingsPage';
import DetailPage from './DetailPage';
import AccountPage from './AccountPage';

export default class App extends React.Component {
  renderTabs = () => {
    return [
      {
        content: <HomePage />,
        tab: <Tab label='Home' icon='md-home' />
      },
      {
        content: <DetailPage />,
        tab: <Tab label='Detail' icon='md-settings' />
      },
      {
        content: <SettingsPage />,
        tab: <Tab label='Settings' icon='md-settings' />
      },
      {
        content: <AccountPage />,
        tab: <Tab label='Account' icon='md-settings' />
      }
    ]
  }

  render() {
    return (
      <Tabbar initialIndex={0} renderTabs={this.renderTabs} />
    );
  }
}