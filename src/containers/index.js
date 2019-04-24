import React from 'react';
import '../App.css';
import { FloatingActionButtons } from '../components/';
import { SpanningTable } from '../components/';
import { FontAwesome } from '../components/';
function App() {
  return (
    <div className="App">
      <FloatingActionButtons></FloatingActionButtons>
      <SpanningTable></SpanningTable>
      <FontAwesome></FontAwesome>
    </div>
  );
}

export default App;
