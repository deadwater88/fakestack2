import CollegeForm from "./college_form";
import { connect } from 'react-redux';
import { updateProfileProp } from '../../../../actions/profiles_actions';

const mapStateToProps = (state, ownProps) =>({
  currentUserProfile: state.currentUserProfile,
  viewedUserProfile: state.viewedUserProfile,
  schoolHistory: ownProps.schoolHistory,
  toggleEditMode: ownProps.toggleEditMode
});

const mapDispatchToProps = (dispatch) => ({
  updateProfileProp: (prop,url) => dispatch(updateProfileProp(prop, url))
});

export default connect(mapStateToProps,
               mapDispatchToProps)(CollegeForm);
