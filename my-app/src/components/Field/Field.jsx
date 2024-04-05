import { FieldLayout } from './FieldLayout';
import { checkDraw, checkWin } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';

export const Field = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
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

		dispatch({
			type: 'setCurrentPlayer',
			payload: { newField, isGameEnded, isDraw, currentPlayer },
		});
	};

	return <FieldLayout field={state.field} btnClick={handleBtnClick} />;
};
