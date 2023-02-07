import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Container } from './FriendList.styled';


export const FriendList = ({ friends }) => {
    return (
        <Container class="friend-list">
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </Container>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
        })
    ),
};
