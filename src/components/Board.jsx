import React from 'react'
import Tile from './Tile'
import Strike from './Strike'


const Board = () => {
  return (
    <>
      <div className='board'>
        <Tile className="right_border bottom_border" />
        <Tile className="right_border bottom_border" />
        <Tile className="bottom_border" />
        <Tile className="right_border bottom_border" />
        <Tile className="right_border bottom_border" />
        <Tile className="bottom_border" />
        <Tile className="right_border" />
        <Tile className="right_border " />
        <Tile />
        <Strike />
      </div>
    </>
  )
}

export default Board