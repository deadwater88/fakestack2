import { connect } from 'react-redux';
import PostItem from './post_item';
import {withRouter} from 'react-router-dom';
import {publishPost, deletePost} from '../../actions/post_actions';

import {selectAuthor} from '../../utils/selectors';


const mapStateToProps = (state, ownProps) =>({
  currentUserProfile: state.currentUserProfile,
  viewedUserProfile: state.viewedUserProfile,
  post: ownProps.post,
  relevantUsers: state.relevantUsers,
  comments: state.comments,
  current_user: state.currentUserProfile.id === state.viewedUserProfile.id
});

const mapDispatchToProps = (dispatch) => ({
  publishPost: (post)=> dispatch(publishPost(post)),
  deletePost: (post)=> dispatch(deletePost(post))
});

export default withRouter(connect(mapStateToProps,
               mapDispatchToProps)(PostItem));
