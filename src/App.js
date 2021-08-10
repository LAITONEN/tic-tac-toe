import React, { useState } from 'react';
import Cell from './components/Cell'
import './App.css';

function App() {

  const [boardSize, setBoardSize] = useState(3);

  return (
    <div className="App">
      {createBoard(boardSize)}
    </div>
  );
}

const createBoard = (size) => {
  const numberOfCells = size * size
  return Array(numberOfCells).fill(null, 0, numberOfCells).map((v) => <Cell>x</Cell>)
}

export default App;
