import { useState } from 'react'
import Board from './Board'



const Player_X = "X";
const Player_O = "O"

const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null))
  const [playerTurn, setPlayerTurn] = useState(Player_X)

  const handleTileClick = (index) => {

    // checks if the element at the specified index in the tiles array is not null. If the condition is true, the return statement will be executed, and the function will exit immediately without executing any further code.
    if (tiles[index] !== null) {
      return
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);

    if (playerTurn === Player_X) {
      setPlayerTurn(Player_O)
    } else {
      setPlayerTurn(Player_X)
    }


  }

  return (
    <>
      <h4>TicTacToe</h4>
      <Board tiles={tiles} onTileClick={handleTileClick} playerTurn={playerTurn} />
    </>
  )
}

export default TicTacToe