import EditPlacesForm from "./edit_places_form";
import { connect } from 'react-redux';
import { updateProp } from '../../../actions/profiles_actions';


console.log(EditPlacesForm);
const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile
});

const mapDispatchToProps = (dispatch) => ({
  updateProp: (prop,userId) => dispatch(updateProp(prop, userId))
});

export default connect(mapStateToProps,
               mapDispatchToProps)(EditPlacesForm);
