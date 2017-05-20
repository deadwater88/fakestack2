import { connect } from 'react-redux';
import { uploadProfilePic } from '../../actions/profiles_actions';
import ProfilePicture from './profile_picture';


const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile
});

const mapDispatchToProps = (dispatch) => ({
  uploadProfilePic: (profile_img_url, userId) => { dispatch(uploadProfilePic(profile_img_url, userId));},
});

export default connect(mapStateToProps,
               mapDispatchToProps)(ProfilePicture);
