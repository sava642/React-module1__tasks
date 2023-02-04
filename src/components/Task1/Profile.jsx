import PropTypes from 'prop-types';
import defaultImage from './default.jpeg'
import { Card, Description, Avatar, UserName, Tag, Location, Stats, List, Label, Views } from './Profile.styled'

const Profile = ({
	username,
	tag,
	location,
	avatar = defaultImage,
	stats,
}) => {
	return (
		<Card>
			<Description>
				<Avatar
					src={avatar}
					alt="User avatar"
				/>
				<UserName >{username}</UserName>
				<Tag>{tag}</Tag>
				<Location>{location}</Location>
			</Description>

			<Stats>
				<List>
					<Label >Folowers</Label>
					<Views>{stats.followers}</Views>
				</List>
				<List>
					<Label>Views</Label>
					<Views>{stats.views}</Views>
				</List>
				<List>
					<Label>Listkes</Label>
					<Views>{stats.likes}</Views>
				</List>
			</Stats>
		</Card>
	)
}

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.shape({
		followers: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
	}),
};
export default Profile

