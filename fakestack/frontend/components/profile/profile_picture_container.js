import { connect } from 'react-redux';
import { uploadPic } from '../../actions/profiles_actions';
import ProfilePicture from './profile_picture';


const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile,
  viewedUserProfile: state.viewedUserProfile
});

const mapDispatchToProps = (dispatch) => ({
  uploadProfilePic: (profile_img_url, userId) => { dispatch(uploadPic(profile_img_url, userId));},
});

export default connect(mapStateToProps,
               mapDispatchToProps)(ProfilePicture);
