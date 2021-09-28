import PropTypes from 'prop-types';
import styles from './TransactinHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={styles.transactions}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(item => (
          <tr key={item.id}>
            <td className={styles.type}>{item.type}</td>
            <td className={styles.amount}>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};