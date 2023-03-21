import React, { Fragment, useState } from 'react';

import style from './Cell.module.scss';

const Cell = ({ id, marker, bgColor, onClickedCell, wasClicked, isGameOn }) => {

    return (
        <div 
            className={style.cell}
            style={{backgroundColor: bgColor}}
            onClick={() => {
                if(!wasClicked && isGameOn) {
                    onClickedCell(id);
                }
            }}

        >    
            <h1>{marker}</h1>
        </div>
    )
}

export default Cell