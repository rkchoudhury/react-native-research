import Screen1 from './src/Screen1';
import { InversifyProvider } from './src/di/core';
import { InjectContainer } from './src/di/injectContainer';

function App() {
  return (
     <InversifyProvider container={InjectContainer}>
      <Screen1 />
    </InversifyProvider>
  );
}

export default App;
