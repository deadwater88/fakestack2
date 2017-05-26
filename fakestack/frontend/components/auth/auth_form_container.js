import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import AuthForm from './auth_form';
import { fetchRelevantUsers, fetchViewedProfile, fetchCurrentUser } from '../../actions/profiles_actions'

const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile,
  sessionErrors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => { dispatch(login(user));},
  signup: (user) => dispatch(signup(user)),
  fetchViewedProfile: (userId) => dispatch(fetchViewedProfile(userId)),
  fetchRelevantUsers: (id)=>  dispatch(fetchRelevantUsers(id)),
  fetchCurrentUser: (id)=> dispatch(fetchCurrentUser(id))
});

export default connect(mapStateToProps,
               mapDispatchToProps)(AuthForm);
