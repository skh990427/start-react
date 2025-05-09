import './styles.css';
import {useState} from "react";

interface SquareProps {
    value: number;
    onSquareClick: () => void;
}

function Square({value, onSquareClick} : SquareProps) {
    return <button className="square" onClick={onSquareClick}>{value}</button>
}

export default function Board() {
    // eslint-disable-next-line
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner" + winner;
    } else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }

    function handleClick(i:number) {
        if (squares[i] || calculateWinner(squares)) { // 이미 값이 있으면 함수 조기종료
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    )
};

function calculateWinner(squares : number[]) {
    const list = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < list.length; i++) {
        const [a, b, c] = list[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
