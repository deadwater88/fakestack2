import FriendItem from './friend_item';
import {fetchViewedProfile, unFriend} from '../../../actions/profiles_actions';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile,
  viewedUserProfile: state.viewedUserProfile,
  relevant_users: state.relevant_users
});

const mapDispatchToProps = (dispatch) => ({
  unFriend: (viewedId) => { dispatch(unFriend(viewedId));}
});

export default connect(mapStateToProps,
               mapDispatchToProps)(FriendItem);
