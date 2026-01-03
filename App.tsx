import Screen1 from './src/Screen1';
import { InjectContainer, InversifyProvider } from './src/di/core';

function App() {
  return (
     <InversifyProvider container={InjectContainer}>
      <Screen1 />
    </InversifyProvider>
  );
}

export default App;
