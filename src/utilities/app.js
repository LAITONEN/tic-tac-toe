export const getHorizontalCombinations = (boardSize) => {

  let horizontalCombinations = Array.from(Array(boardSize)).map(v => [])
  let firstNumberInCombination = 1

  for (let i = 0; i < boardSize; i++) {
    firstNumberInCombination = 1 + boardSize * i
    for (let numberToAdd = firstNumberInCombination; numberToAdd < firstNumberInCombination + boardSize; numberToAdd++) {
      horizontalCombinations[i].push(numberToAdd)
    }
  }

  return horizontalCombinations
}

export const getVerticalCombinations = (boardSize) => {

  let verticalCombinations = Array.from(Array(boardSize)).map(v => [])

  let firstNumberInCombination = 1

  for (let i = 0; i < boardSize; i++) {
    firstNumberInCombination = 1 + i

    let numberToAdd = firstNumberInCombination
    for (let ii = 0; ii < boardSize; ii++) {
      verticalCombinations[i].push(numberToAdd)
      numberToAdd = numberToAdd + boardSize
    }
  }

  return verticalCombinations
}

export const getDiagonalCombinations = (boardSize) => {

  let diagonalCombinations = Array.from(Array(2)).map(v => [])

  let firstNumberInCombination = 1

  for (let i = 0; i < 2; i++) {

    let numberToAdd = i === 0 ? 1 : boardSize
    for (let ii = 0; ii < boardSize; ii++) {

      diagonalCombinations[i].push(numberToAdd)

      numberToAdd = firstNumberInCombination === 1 ? numberToAdd + boardSize + 1 : numberToAdd + boardSize - 1
    }
    firstNumberInCombination = boardSize
  }

  return diagonalCombinations
}