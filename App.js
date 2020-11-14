import React from 'react';
import AppNavigator from "./navigation/AppNavigator";
import RootStore from'./stores/rootStore'
import {Provider} from 'mobx-react'

export default function App() {
  return (
      <Provider store={new RootStore}>
    <AppNavigator/>
      </Provider>
  );
}

