import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import defaultImage from './defaultImage.png';

export default function Profile({
  userImg = defaultImage,
  userName,
  userTag,
  userlocation,
  userStats,
}) {
  // const { userImg = defaultImage, userName, userTag, userlocation, userStats } = props;
  //console.log(props)
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={userImg}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className={styles.name}>{userName}</p>
        <p className={styles.tag}>@{userTag}</p>
        <p className={styles.location}>{userlocation}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{userStats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{userStats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{userStats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  userImg: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  userlocation: PropTypes.string.isRequired,
  userStats: PropTypes.object.isRequired,
};