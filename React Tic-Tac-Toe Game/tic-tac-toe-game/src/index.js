import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import 'index.css';

function Square(props) {
	return (
		<button className='square' onClick={() => props.onClick()}>
			{props.value}
		</button>
	);
}

function Board(props) {
	function renderSquare(i, row, col) {
		return (
			<Square
				value={props.squares[i]}
				onClick={() => props.onClick(i, row, col)}
			/>
		);
	}

	//const status = 'Next player: ' + (xIsNext ? 'X' : 'O');

	return (
		<div>
			<div className='board-row'>
				{renderSquare(0, 1, 1)}
				{renderSquare(1, 2, 1)}
				{renderSquare(2, 3, 1)}
			</div>
			<div className='board-row'>
				{renderSquare(3, 1, 2)}
				{renderSquare(4, 2, 2)}
				{renderSquare(5, 3, 2)}
			</div>
			<div className='board-row'>
				{renderSquare(6, 1, 3)}
				{renderSquare(7, 2, 3)}
				{renderSquare(8, 3, 3)}
			</div>
		</div>
	);
}

function Game() {
	const [history, setHistory] = useState([{ squares: Array(11).fill(null) }]);
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setXIsNext] = useState(true);

	const current = history[stepNumber];
	const winner = calculateWinner(current.squares);

	const moves = history.map((step, move) => {
		const desc = move
			? `Go to move #${move} (${history[move].squares[9]},${history[move].squares[10]})`
			: 'Go to game start';
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{desc}</button>
			</li>
		);
	});

	let status;
	if (winner) {
		status = 'Winner: ' + winner;
	} else {
		status = 'Next player: ' + (xIsNext ? 'X' : 'O');
	}

	const handleClick = (i, row, col) => {
		const currentHistory = history.slice(0, stepNumber + 1);
		const currentStep = currentHistory[currentHistory.length - 1];
		const squares = currentStep.squares.slice();
		if (calculateWinner(squares) || squares[i]) return;

		squares[i] = xIsNext ? 'X' : 'O';

		squares[9] = row;
		squares[10] = col;

		setHistory(currentHistory.concat([{ squares: squares }]));
		setStepNumber(currentHistory.length);
		setXIsNext(prevState => !prevState);
	};

	const jumpTo = step => {
		setStepNumber(step);
		setXIsNext(step % 2 === 0);
	};

	return (
		<div className='game'>
			<div className='game-board'>
				<Board squares={current.squares} onClick={handleClick} />
			</div>
			<div className='game-info'>
				<div>{status}</div>
				<ol>{moves}</ol>
			</div>
		</div>
	);
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}
