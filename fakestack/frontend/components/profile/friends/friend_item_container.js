import FriendItem from './friend_item';
import {fetchViewedProfile, unFriend, createFriending, acceptFriending} from '../../../actions/profiles_actions';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) =>({
  currentUserProfile: state.currentUserProfile,
  viewedUserProfile: state.viewedUserProfile,
  relevant_users: state.relevant_users,
  friend: ownProps.friend
});

const mapDispatchToProps = (dispatch) => ({
  unFriend: (viewedId) => { dispatch(unFriend(viewedId));},
  createFriending: (viewedId) => {dispatch(createFriending(viewedId));},
  acceptFriending: (viewedId) => {dispatch(acceptFriending(viewedId));}
});

export default connect(mapStateToProps,
               mapDispatchToProps)(FriendItem);
