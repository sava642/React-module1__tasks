import css from './FriendItem.module.css'

import PropTypes from 'prop-types';

const FriendItem = ({
	avatar,
	name,
	isOnline,
}) => {
	return (
		<li class={css.id}>
			<span class={isOnline ? css.statusOnline : css.statusOffline}>{isOnline}</span>
			<img class={css.avatar} src={avatar} alt="User avatar" width="48" />
			<p class={css.name}>{name}</p>
		</li>
	)
};

FriendItem.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	isOnline: PropTypes.bool,
}

export default FriendItem;
