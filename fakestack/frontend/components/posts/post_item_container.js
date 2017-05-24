import { connect } from 'react-redux';
import PostItem from './post_item';
import {withRouter} from 'react-router-dom';
import {publishPost} from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) =>({
  currentUserProfile: state.currentUserProfile,
  viewedUserProfile: state.viewedUserProfile,
  post: ownProps.post,
  relevantUsers: state.relevantUsers
});

const mapDispatchToProps = (dispatch) => ({
  publishPost: (post)=> dispatch(publishPost(post))
});

export default withRouter(connect(mapStateToProps,
               mapDispatchToProps)(PostItem));
