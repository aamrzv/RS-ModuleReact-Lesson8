import { createStore } from 'redux';
import { gameReducer } from './reducer';
import { initializeField } from './utils';

const initialState = {
	currentPlayer: 'X',
	field: initializeField(),
	isGameEnded: false,
	isDraw: false,
};

// Создаем Redux store
export const store = createStore(gameReducer, initialState);
