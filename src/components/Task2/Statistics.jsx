import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import setBg from './randomColor';


const Statistics = ({
	stats,
	title,
}) => {

	return (
		<section className={css.card}>
			{title && <h2 className={css.title}>{title}</h2>}

			<ul className={css.list}>
				{stats.map(({ id, label, percentage }) => (

					<li className={css.item} style={{ backgroundColor: setBg() }}
						key={id}>
						<span className={css.label}>{label}</span>
						<span className={css.percentage}>{percentage + '%'}</span>
					</li>
				)
				)}


			</ul>
		</section >
	)
};

Statistics.protoTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			label: PropTypes.string,
			percentage: PropTypes.number,
		})
	)
};
export default Statistics;
