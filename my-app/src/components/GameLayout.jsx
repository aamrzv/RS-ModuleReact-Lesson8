import styles from './GameLayout.module.css';
import { Information } from './Information/Information';
import { Field } from './Field/Field';

export const GameLayout = ({ state, handleRestartClick }) => {
	return (
		<div className={styles.conteiner}>
			<button className={state.isGameEnded || state.isDraw ? `${styles.btn} ${styles.btnAn}` : styles.btn} onClick={() => handleRestartClick()}>
				Начать заново
			</button>
			<Information />
			<Field />
		</div>
	);
};
