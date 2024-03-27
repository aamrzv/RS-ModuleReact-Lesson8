import { InformationLayout } from './InformationLayout';
import React from 'react';
import { useState } from 'react';
import { store } from '../../store';

export const Information = () => {
	const [state, setState] = useState(store.getState());
	store.subscribe(() => {
		setState(store.getState());
	});
	console.log(state);
	const info = () => {
		if (state.isGameEnded & !state.isDraw) {
			return `Победа: ${state.currentPlayer} 🏆`;
		} else if (state.isDraw) {
			return 'Ничья 😖';
		} else {
			return state.currentPlayer;
		}
	};

	const playerTurn = () => {
		if (state.isGameEnded || state.isDraw) {
			return '';
		} else {
			return 'Ход игрока:';
		}
	};
	return <InformationLayout playerTurn={playerTurn} info={info} />;
};
