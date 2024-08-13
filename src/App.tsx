import React from 'react';
import Map from './components/Map';

const App: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <h1>Internet Transportation Simulation</h1>
      <Map />
    </div>
  );
};

export default App;
