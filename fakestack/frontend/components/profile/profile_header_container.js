import { logout } from '../../actions/session_actions';
import { uploadPic } from '../../actions/profiles_actions';
import ProfileHeader from './profile_header';
import {fetchViewedProfile} from '../../actions/profiles_actions';
import {createFriending, acceptFriending} from '../../actions/profiles_actions';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile,
  viewedUserProfile: state.viewedUserProfile
});

const mapDispatchToProps = (dispatch) => ({
  logout: (user) => { dispatch(logout(user));},
  uploadPic: (prop, userId) => { dispatch(uploadPic(prop, userId));},
  fetchViewedProfile: (userId) => {dispatch(fetchViewedProfile(userId));},
  createFriending: (viewedId) => {dispatch(createFriending(viewedId));},
  acceptFriending: (viewedId) => {dispatch(acceptFriending(viewedId));}
});

export default withRouter(connect(mapStateToProps,
               mapDispatchToProps)(ProfileHeader));
