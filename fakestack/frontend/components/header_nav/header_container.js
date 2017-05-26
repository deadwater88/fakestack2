import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchCurrentUser, fetchRelevantUsers } from '../../actions/profiles_actions';
import {selectAllRelevantUsers } from '../../reducers/selectors.js';
import HeaderNav from './header_nav';


const mapStateToProps = (state) =>({
  currentUser: state.session.currentUser,
  currentUserProfile: state.currentUserProfile,
  arrayRelevantUsers: selectAllRelevantUsers(state),
  relevantUsers: state.relevantUsers
});

const mapDispatchToProps = (dispatch) => ({
  logout: (user) => { dispatch(logout(user));},
  fetchCurrentUser: (id) => { dispatch(fetchCurrentUser(id));},
  fetchRelevantUsers: (id)=> { dispatch(fetchRelevantUsers(id));}
});

export default connect(mapStateToProps,
               mapDispatchToProps)(HeaderNav);
