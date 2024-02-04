import Tile from './Tile'
import Strike from './Strike'



const Board = ({ tiles, onTileClick, playerTurn, strikeClass }) => {


  return (
    <>
      <div className='board'>
        <Tile onClick={() => onTileClick(0)} value={tiles[0]} className="right_border bottom_border" playerTurn={playerTurn} />
        <Tile onClick={() => onTileClick(1)} value={tiles[1]} className="right_border bottom_border" playerTurn={playerTurn} />
        <Tile onClick={() => onTileClick(2)} value={tiles[2]} className="bottom_border" playerTurn={playerTurn} />
        <Tile onClick={() => onTileClick(3)} value={tiles[3]} className="right_border bottom_border" playerTurn={playerTurn} />
        <Tile onClick={() => onTileClick(4)} value={tiles[4]} className="right_border bottom_border" playerTurn={playerTurn} />
        <Tile onClick={() => onTileClick(5)} value={tiles[5]} className="bottom_border" playerTurn={playerTurn} />
        <Tile onClick={() => onTileClick(6)} value={tiles[6]} className="right_border" playerTurn={playerTurn} />
        <Tile onClick={() => onTileClick(7)} value={tiles[7]} className="right_border " playerTurn={playerTurn} />
        <Tile onClick={() => onTileClick(8)} value={tiles[8]} playerTurn={playerTurn} />
        <Strike strikeClass={strikeClass} />
      </div>
    </>
  )
}

export default Board