import FriendItem from "./FriendItem";
import css from './FriendItem.module.css'

const FriendList = ({
	friends }) => {
	return (
		<ul class={css.card}>
			{friends.map(el => (
				<FriendItem
					key={el.id}
					avatar={el.avatar}
					name={el.name}
					isOnline={el.isOnline}
				/>
			))}
		</ul>

	)

}
export default FriendList