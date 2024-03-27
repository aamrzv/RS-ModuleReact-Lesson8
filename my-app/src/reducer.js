import { checkDraw, checkWin } from './utils';
// Инициализация поля
function initializeField() {
	return [
		{ id: '0', name: '', style_win: false },
		{ id: '1', name: '', style_win: false },
		{ id: '2', name: '', style_win: false },
		{ id: '3', name: '', style_win: false },
		{ id: '4', name: '', style_win: false },
		{ id: '5', name: '', style_win: false },
		{ id: '6', name: '', style_win: false },
		{ id: '7', name: '', style_win: false },
		{ id: '8', name: '', style_win: false },
	];
}

export const gameReducer = (state = { currentPlayer: 'X', field: initializeField(), isGameEnded: false, isDraw: false }, action) => {
	switch (action.type) {
		case 'HANDLE_BTN_CLICK':
			const { id } = action.payload;
			const newField = [...state.field];
			let moveIsMade = false;
			if (!state.field[id].name && !state.isGameEnded) {
				newField[id].name = state.currentPlayer;
				moveIsMade = true;
			}
			const newState = {
				...state,
				field: newField,
				isGameEnded: checkWin(newField) || checkDraw(newField),
				isDraw: checkDraw(newField),
				currentPlayer: moveIsMade & !checkWin(newField) ? (state.currentPlayer === 'X' ? 'O' : 'X') : state.currentPlayer,
			};
			return newState;
		case 'HANDLE_RESTART_CLICK':
			return {
				...state,
				currentPlayer: 'X',
				isGameEnded: false,
				isDraw: false,
				field: initializeField(),
			};
		default:
			return state;
	}
};
