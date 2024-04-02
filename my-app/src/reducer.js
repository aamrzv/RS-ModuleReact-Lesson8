export const gameReducer = (state, action) => {
	switch (action.type) {
		case 'setCurrentPlayer':
			return {
				...state,
				field: action.payload.newField,
				isGameEnded: action.payload.isGameEnded,
				isDraw: action.payload.isDraw,
				currentPlayer: action.payload.currentPlayer,
			};
		case 'setRestartGame':
			return {
				...state,
				currentPlayer: 'X',
				isGameEnded: false,
				isDraw: false,
				field: action.payload.field,
			};
		default:
			return state;
	}
};
