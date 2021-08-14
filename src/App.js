import React, { useState, useEffect } from 'react';
import Cell from './components/Cell'
import './App.scss';
import { getHorizontalCombinations, getVerticalCombinations, getDiagonalCombinations } from './utilities/app';

function App() {

  const [boardSize, setBoardSize] = useState(3);
  const [values, setValues] = useState([]); // 0 - empty, 1 - x, 2 - o
  const [whoseTurn, setWhoseTurn] = useState(1) // 1 - player1, 2 - player2
  const [winner, setWinner] = useState(null)

  useEffect(() => {

    if (values.filter(v => v !== 0).length < 5) return
    const cellNumbersOfLastPlayerMarks = values
      .map((v, i) => v === whoseTurn ? i + 1 : null)
      .filter(v => v !== null)

    const combinations = getHorizontalCombinations(boardSize).concat(getVerticalCombinations(boardSize).concat(getDiagonalCombinations(boardSize)))
    let possibleCrossedCombinations = []
    for (const mark of cellNumbersOfLastPlayerMarks) {
      const newPossibleCrossedCombinations = combinations
        .filter((combo, index) => {

          return combo.join('').startsWith(mark)
        })

      possibleCrossedCombinations = possibleCrossedCombinations.concat(newPossibleCrossedCombinations)
    }
    const weHaveAWinner = possibleCrossedCombinations.some(combination => {

      return combination.every(cellNumber => cellNumbersOfLastPlayerMarks.includes(cellNumber))
    })

    if (weHaveAWinner) setWinner(whoseTurn)
  }, [values, setWinner])

  const createBoard = () => {
    const numberOfCells = boardSize * boardSize
    return Array(numberOfCells).fill(null, 0, numberOfCells).map((v, cellIndex) => {
      const onClick = () => {
        const placeMark = () => {
          setValues(values.map((cellValue, valueIndex) => {
            if (valueIndex === cellIndex) {
              return whoseTurn
            }
            return cellValue
          }
          ))

        }

        placeMark()
      }
      return <Cell key={cellIndex} onClick={onClick}>{values[cellIndex]}</Cell>
    })
  }

  useEffect(() => {
    const numberOfCells = boardSize * boardSize
    setValues(Array(numberOfCells).fill(0, 0, numberOfCells))
  }, [boardSize])

  useEffect(() => {
    setWhoseTurn(whoseTurn === 1 ? 2 : 1)
  }, [values])


  return (
    <div className="Container">
      <div className="Content">
        <div className="Turn">{`Turn: Player ${whoseTurn}`}</div>
        {winner && <div className="Winner">{`Winner: Player ${winner}!`}</div>}
        <div className="Board">
          {createBoard()}
        </div>
      </div>
    </div>
  );
}

export default App;
