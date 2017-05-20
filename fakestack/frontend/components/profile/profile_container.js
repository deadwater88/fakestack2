import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { uploadProfilePic } from '../../actions/profiles_actions';
import Profile from './profile';


const mapStateToProps = (state) =>({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: (user) => { dispatch(logout(user));},
  uploadProfilePic: (profile_img_url, userId) => { dispatch(uploadProfilePic(profile_img_url, userId));}
});

export default connect(mapStateToProps,
               mapDispatchToProps)(Profile);
