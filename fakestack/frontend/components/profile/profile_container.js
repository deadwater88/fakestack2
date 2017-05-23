import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { uploadPic } from '../../actions/profiles_actions';
import Profile from './profile';
import {fetchViewedProfile} from '../../actions/profiles_actions';

const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile,
  viewedUserProfile: state.viewedUserProfile
});

const mapDispatchToProps = (dispatch) => ({
  logout: (user) => { dispatch(logout(user));},
  uploadPic: (prop, userId) => { dispatch(uploadPic(prop, userId));},
  fetchViewedProfile: (userId) => {dispatch(fetchViewedProfile(userId));}
});

export default connect(mapStateToProps,
               mapDispatchToProps)(Profile);
