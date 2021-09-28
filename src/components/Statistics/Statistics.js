import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({stats}) {
  return (
    <ul className={styles.list}>
      {stats.map(item => (
      <li 
        key={item.id}
        style={{ backgroundColor: getColor() }}
        className={styles.item}>
       <span className={styles.label}>{item.label}</span>
       <span className={styles.percentage}>{item.percentage}%</span>
      </li>
      ))}
    </ul>
  );
}

function getColor() {
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
};


Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
}


  