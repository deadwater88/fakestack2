import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchCurrentUser } from '../../actions/profiles_actions';
import HeaderNav from './header_nav';


const mapStateToProps = (state) =>({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: (user) => { dispatch(logout(user));},
  fetchCurrentUser: (id) => { dispatch(fetchCurrentUser(id));}
});

export default connect(mapStateToProps,
               mapDispatchToProps)(HeaderNav);
