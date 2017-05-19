import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import AuthForm from './auth_form';


const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile,
  sessionErrors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => { dispatch(login(user));},
  signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps,
               mapDispatchToProps)(AuthForm);
