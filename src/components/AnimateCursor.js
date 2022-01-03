import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

export default function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.8}
        outerScale={2}
      />
    </div>
  );
}
