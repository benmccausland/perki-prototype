// App.jsx — router / navigation state
import React, { useState } from 'react';

export default function App() {
  const [screen, setScreen] = useState('home');

  return (
    <div>
      {/* Screens will render here based on `screen` state */}
      <p>Current screen: {screen}</p>
    </div>
  );
}
