import React from 'react';
import RomanConverter from './components/RomanConverter';
import { Provider, defaultTheme } from '@adobe/react-spectrum';

function App() {
  // Detect system color scheme
  const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  return (
    <Provider theme={defaultTheme} colorScheme={colorScheme}>
      <RomanConverter />
    </Provider>
  );
}

export default App;
