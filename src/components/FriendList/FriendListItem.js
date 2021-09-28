import PropTypes from 'prop-types';


function FriendListItem({avatar, name, isOnline}) {
    // const isOnline = true;
    return(
        <>
            <span class="status">
                {isOnline ?'online':'offline'}
            </span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}

export default FriendListItem;