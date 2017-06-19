import CollegeForm from "./college_form";
import { connect } from 'react-redux';
import { updateProfileProp } from '../../../../actions/profiles_actions';

const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile,
  viewedUserProfile: state.viewedUserProfile
});

const mapDispatchToProps = (dispatch) => ({
  updateProfileProp: (prop,url) => dispatch(updateProfileProp(prop, url))
});

export default connect(mapStateToProps,
               mapDispatchToProps)(CollegeForm);
