import NewsFeed from "./newsfeed";
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {fetchPosts} from '../../actions/post_actions'
import {fetchRelevantUsers} from '../../actions/profiles_actions';
import {selectAllRelevantUsers, selectFeedPosts} from '../../utils/selectors'

const mapStateToProps = (state) =>({
  currentUserProfile: state.session.currentUser,
  relevantUsersArray: selectAllRelevantUsers(state),
  posts: selectFeedPosts(state),
  comments: state.comments
});

const mapDispatchToProps = (dispatch) => ({
  logout: (user) => dispatch(logout(user)),
  fetchPosts: (userId) => dispatch(fetchPosts(userId, "feed")),
  fetchRelevantUsers: (userId) => dispatch(fetchRelevantUsers(userId))
});

export default connect(mapStateToProps,
               mapDispatchToProps)(NewsFeed);
