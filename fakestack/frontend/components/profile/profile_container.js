import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { uploadPic } from '../../actions/profiles_actions';
import Profile from './profile';


const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile
});

const mapDispatchToProps = (dispatch) => ({
  logout: (user) => { dispatch(logout(user));},
  uploadPic: (prop, userId) => { dispatch(uploadPic(prop, userId));}
});

export default connect(mapStateToProps,
               mapDispatchToProps)(Profile);
