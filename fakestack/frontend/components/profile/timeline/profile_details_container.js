import { connect } from 'react-redux';
import ProfileDetails from './profile_details';
import { updateProp } from '../../../actions/profiles_actions';


const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile
});

const mapDispatchToProps = (dispatch) => ({
  updateProp: (prop, userId) => {dispatch(updateProp(prop, userId));}
});

export default connect(mapStateToProps,
               mapDispatchToProps)(ProfileDetails);
