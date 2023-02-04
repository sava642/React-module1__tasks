import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
	return (
		<table class={css.transaction}>
			<thead>
				<tr className={css.list}>
					<th className={css.item}>Type</th>
					<th className={css.item}>Amount</th>
					<th className={css.item}>Currency</th>
				</tr>
			</thead>

			<tbody className={css.items}>
				{items.map(el => (
					<tr className={css.tr} key={el.id}>
						<td>{el.type}</td>
						<td>{el.amount}</td>
						<td>{el.currency}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
};



export default TransactionHistory;
