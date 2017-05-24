import { connect } from 'react-redux';
import PostForm from './post_form';
import {publishPost} from '../../actions/post_actions';
import {withRouter} from 'react-router-dom';
const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile,
  viewedUserProfile: state.viewedUserProfile
});

const mapDispatchToProps = (dispatch) => ({
  publishPost: (post)=> dispatch(publishPost(post))
});

export default withRouter(connect(mapStateToProps,
               mapDispatchToProps)(PostForm));
