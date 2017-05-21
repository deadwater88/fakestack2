import EditProfile from "./edit_profile";
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile
});

const mapDispatchToProps = (dispatch) => ({
  logout: (user) => { dispatch(logout(user));},
});

export default connect(mapStateToProps,
               mapDispatchToProps)(EditProfile);
