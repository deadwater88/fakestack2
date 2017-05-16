import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import HeaderNav from './header_nav';


const mapStateToProps = (state) =>({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: (user) => { dispatch(logout(user));},
});

export default connect(mapStateToProps,
               mapDispatchToProps)(HeaderNav);
