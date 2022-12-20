import React from 'react';
import {
  SafeAreaView,
  useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import ToolkitTS from './Projects/Toolkit&TS/App'
import TodoApp from './Projects/ToDoApp/App'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ToolkitTS />
    </SafeAreaView>
  );
};

export default App;
