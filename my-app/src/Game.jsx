import { initializeField } from './utils';
import { GameLayout } from './components/GameLayout';
import { useSelector, useDispatch } from 'react-redux';

export const Game = () => {
	const dispatch = useDispatch();
	const handleRestartClick = () => {
		const field = initializeField();
		console.log(field);
		dispatch({ type: 'setRestartGame', payload: { field } });
	};
	return (
		<div>
			<GameLayout state={useSelector((state) => state)} handleRestartClick={handleRestartClick} />
		</div>
	);
};
