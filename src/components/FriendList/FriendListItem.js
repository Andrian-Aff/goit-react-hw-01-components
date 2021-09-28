import PropTypes from 'prop-types';
import styles from './FriendList.module.css';


function FriendListItem({avatar, name, isOnline}) {
    return(
        <>
            <span className={isOnline ? styles.online : styles.ofline}> 
              {isOnline}
            </span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}

export default FriendListItem;