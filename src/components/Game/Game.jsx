import { useState, useEffect } from 'react';

import Header from 'components/Header/Header';
import Output from 'components/Output/Output';
import Board from 'components/Board/Board';
import Button from 'components/Button/Button';

const Game = () => {

    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6] // diagonal
    ];

    const inicialCells = [
        { id: 0, marker: '', bgColor: '#EEEEEE', wasClicked: false, isGameOn: true },
        { id: 1, marker: '', bgColor: '#EEEEEE', wasClicked: false, isGameOn: true },
        { id: 2, marker: '', bgColor: '#EEEEEE', wasClicked: false, isGameOn: true },
        { id: 3, marker: '', bgColor: '#EEEEEE', wasClicked: false, isGameOn: true },
        { id: 4, marker: '', bgColor: '#EEEEEE', wasClicked: false, isGameOn: true },
        { id: 5, marker: '', bgColor: '#EEEEEE', wasClicked: false, isGameOn: true },
        { id: 6, marker: '', bgColor: '#EEEEEE', wasClicked: false, isGameOn: true },
        { id: 7, marker: '', bgColor: '#EEEEEE', wasClicked: false, isGameOn: true },
        { id: 8, marker: '', bgColor: '#EEEEEE', wasClicked: false, isGameOn: true }];

    const [msg, setMsg] = useState('O JOGADOR X COMEÇA!');
    const [counter, setCounter] = useState(0);
    const [winner, setWinner] = useState('');

    const [cells, setCells] = useState(inicialCells);

    function onClickedCell(id) {
        setCells(cells.map(cell => {
            if (cell.id === id) {
                cell.marker = counter % 2 === 0 ? 'X' : 'O'
                cell.bgColor = cell.marker === 'X' ? '#829460' : '#674747'
                cell.wasClicked = !cell.wasClicked
            }
            return cell
        }))
        setWinner(verifyWinner(cells[id].marker))
        setCounter(counter + 1)
        markersCounter()
        console.log(cells)
    }

    const myMarker = (marker, arrayOfMarkers) => arrayOfMarkers.filter(item => item === marker).length

    function markersCounter() {
        const allCellsMarkers = cells.map(cell => cell.marker);
        const xMarker = myMarker('X', allCellsMarkers)
        const oMarker = myMarker('O', allCellsMarkers)
        const noneMarker = myMarker('', allCellsMarkers)
        if (xMarker > oMarker) {
            setMsg('VEZ DO JOGADOR O')
        } else {
            setMsg('VEZ DO JOGADOR X')
        }
        if (noneMarker === 0) {
            setMsg('EMPATE')
        }
        console.log(xMarker, oMarker, noneMarker)
    }

    useEffect(() => {
        if (winner) {
            setCells(cells.map(cell => {
                cell.isGameOn = false;
                return cell;
            }));
            setMsg(`VENCEDOR ${winner}`)
        }
    }, [winner])

    function verifyWinner(marker) {
        const filteredId = cells
            .filter(item => item.marker === marker)
            .map(cell => cell.id)
        if (winningConditions.some(wC =>
            filteredId.includes(wC[0]) &&
            filteredId.includes(wC[1]) &&
            filteredId.includes(wC[2]))) { return marker }
    }

    function onClickedButton() {
        setCells(inicialCells)
        setCounter(0)
        setMsg(('O JOGADOR X COMEÇA!'))
    }

    return (
        <>
            <Header />
            <Output msg={msg} />
            <Board cells={cells} onClickedCell={onClickedCell} />
            <Button onClickedButton={onClickedButton}></Button>
        </>
    )
}

export default Game