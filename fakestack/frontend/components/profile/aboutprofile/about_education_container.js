import AboutEducationForm from "./about_education_form";
import { connect } from 'react-redux';
import { updateProp } from '../../../actions/profiles_actions';
import values from 'lodash/values';

const educationHeader = (schoolHistory) => {
  let header = [];
  let endYear = schoolHistory.end_date.year;
  let concentration = schoolHistory.concentration;
  let location = schoolHistory.location;
  if (schoolHistory['graduated'] && endYear ) {
    header.push(`class of ${endYear}`);
  }
  if (concentration) {
    header.push(concentration);
  }
  if (location) {
    header.push(location);
  }
  return header.join(" \u00B7 ");

};

const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile,
  viewedUserProfile: state.viewedUserProfile,
  schoolHistories: values(state.viewedUserProfile.schoolhistories)
});

const mapDispatchToProps = (dispatch) => ({
  updateProp: (prop,userId) => dispatch(updateProp(prop, userId)),
  educationHeader: (history) => educationHeader(history)
});

export default connect(mapStateToProps,
               mapDispatchToProps)(AboutEducationForm);
