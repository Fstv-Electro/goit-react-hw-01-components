import css from './Statistics.module.css';
import propTypes from 'prop-types';

export const Statistic = ({ title, stats }) => {
    return (

        <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

    <ul className={css.stat_list}>
        {stats.map((stat, index) => (
            <li key={stat.id} className={css.item}>
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
            </li>
        ))}
  </ul>
</section>
    );
};

Statistic.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(propTypes.object).isRequired,
};