import AboutEducationForm from "./about_education_form";
import { connect } from 'react-redux';
import { updateProp } from '../../../actions/profiles_actions';


const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile,
  viewedUserProfile: state.viewedUserProfile
});

const mapDispatchToProps = (dispatch) => ({
  updateProp: (prop,userId) => dispatch(updateProp(prop, userId))
});

export default connect(mapStateToProps,
               mapDispatchToProps)(AboutEducationForm);
