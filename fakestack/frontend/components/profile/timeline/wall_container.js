import { connect } from 'react-redux';
import Wall from './wall';
import {selectCurrentUserComments, selectWallPosts} from '../../../utils/selectors';
import {fetchPosts} from '../../../actions/post_actions';

const mapStateToProps = (state,ownProps) =>({
  currentUser: state.currentUser,
  comments: state.comments,
  posts: selectWallPosts(state, ownProps.location_id)
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (id) => dispatch(fetchPosts(id))
});

export default connect(mapStateToProps,
               mapDispatchToProps)(Wall);
