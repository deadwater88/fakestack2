import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Wall from './wall';
import {selectCurrentUserComments} from '../../utils/selectors';


const mapStateToProps = (state) =>({
  currentUser: state.currentUser,
  comments: selectCurrentUserComments(state)
});

const mapDispatchToProps = (dispatch) => ({
  logout: (user) => { dispatch(logout(user));},
});

export default connect(mapStateToProps,
               mapDispatchToProps)(Wall);
