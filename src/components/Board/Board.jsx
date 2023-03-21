import React from 'react'
import { useState } from 'react';

import Cell from './Cell/Cell'

import style from './Board.module.scss'

const Board = ({ cells, onClickedCell }) => {
  return (
    <div>
      <div className={style.board}>
        {cells.map(cell =>
          <Cell
            key={cell.id}
            id={cell.id}
            marker={cell.marker}
            bgColor={cell.bgColor}
            onClickedCell={onClickedCell}
            wasClicked={cell.wasClicked}
            isGameOn={cell.isGameOn}
          />)}
      </div>
    </div>
  )
}

export default Board