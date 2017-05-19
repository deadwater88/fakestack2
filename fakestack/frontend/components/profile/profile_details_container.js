import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ProfileDetails from './profile_details';


const mapStateToProps = (state) =>({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: (user) => { dispatch(logout(user));},
});

export default connect(mapStateToProps,
               mapDispatchToProps)(ProfileDetails);
