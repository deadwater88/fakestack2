import { connect } from 'react-redux';
import CommentItem from './comment_item';
import {withRouter} from 'react-router-dom';
import {publishComment} from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) =>({
  currentUserProfile: state.currentUserProfile,
  viewedUserProfile: state.viewedUserProfile,
  comment: ownProps.comment,
  relevantUsers: state.relevantUsers,
  idx: ownProps.idx
});

const mapDispatchToProps = (dispatch) => ({
  publishComment: (post)=> dispatch(publishComment(post))
});

export default withRouter(connect(mapStateToProps,
               mapDispatchToProps)(CommentItem));
