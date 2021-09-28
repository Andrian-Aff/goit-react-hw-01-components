import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({friends}) {
    return (
    <ul className={styles.list}>
        {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
            <FriendListItem 
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            />
        </li>
        ))}
    </ul>
    );
}

FriendList.propTypes = {
    friend: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
    })),
}

// вариант без одного компонента
// export default function FriendList({ friends }) {
//     return (
//       <ul className={styles.list}>
//         {friends.map(item => (
//           <li className={styles.item} key={item.id}>
//             <span className={item.isOnline ? styles.online : styles.ofline}>
//               {item.isOnline}
//             </span>
//             <img
//               className={styles.avatar}
//               src={item.avatar}
//               alt={item.name}
//               width="48"
//             />
//             <p className={styles.name}>{item.name}</p>
//           </li>
//         ))}
//       </ul>
//     );
//   }
