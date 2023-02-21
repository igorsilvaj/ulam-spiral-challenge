import React from 'react';
import Canvas from './Canvas/Canvas';
import CanvasControl from './Canvas/CanvasControl';

export default function App() {
  return (
    <div className="App">
      <CanvasControl />
      <Canvas />
    </div>
  );
}
