import { InformationLayout } from './InformationLayout';
import React from 'react';
import { useSelector } from 'react-redux';

export const Information = () => {
	const state = useSelector((state) => state);
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
