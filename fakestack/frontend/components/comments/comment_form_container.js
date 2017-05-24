import { connect } from 'react-redux';
import CommentForm from './comment_form';
import {publishComment} from '../../actions/comment_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) =>({
  currentUserProfile: state.currentUserProfile,
  viewedUserProfile: state.viewedUserProfile,
  parent: ownProps.parent
});

const mapDispatchToProps = (dispatch) => ({
  publishComment: (comment)=> dispatch(publishComment(comment))
});

export default connect(mapStateToProps,
               mapDispatchToProps)(CommentForm);
