import styles from './FieldLayout.module.css';

export const FieldLayout = ({ field, btnClick }) => {
	return (
		<div className={styles.Block}>
			{field.map(({ id, name, style_win }) => (
				<span className={style_win ? styles.bntWin : styles.bnt} key={id} onClick={() => btnClick(id)}>
					{name}
				</span>
			))}
		</div>
	);
};
