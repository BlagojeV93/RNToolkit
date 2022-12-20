import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {UserList} from './UserList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
};

export default App;
