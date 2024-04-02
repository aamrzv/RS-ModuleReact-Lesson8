import { FieldLayout } from './FieldLayout';
import { useState } from 'react';
import { store } from '../../store';
import { checkDraw, checkWin } from '../../utils';

export const Field = () => {
	const [state, setState] = useState(store.getState());
	store.subscribe(() => {
		setState(store.getState());
	});
	const handleBtnClick = (id) => {
		const newField = [...state.field];
		let moveIsMade = false;
		if (!state.field[id].name && !state.isGameEnded) {
			newField[id].name = state.currentPlayer;
			moveIsMade = true;
		}

		const isGameEnded = checkWin(newField) || checkDraw(newField);
		const isDraw = checkDraw(newField);
		const currentPlayer = moveIsMade & !checkWin(newField) ? (state.currentPlayer === 'X' ? 'O' : 'X') : state.currentPlayer;

		store.dispatch({
			type: 'setCurrentPlayer',
			payload: { newField, isGameEnded, isDraw, currentPlayer },
		});
	};

	return <FieldLayout field={state.field} btnClick={handleBtnClick} />;
};
