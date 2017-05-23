import { connect } from 'react-redux';
import ProfileDetails from './profile_details';
import { updateProp } from '../../../actions/profiles_actions';
import { withRouter } from 'react-router';
import {fetchViewedProfile} from '../../../actions/profiles_actions';


const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile,
  viewedUserProfile: state.veiwedUserProfile
});

const mapDispatchToProps = (dispatch) => ({
  updateProp: (prop, userId) => {dispatch(updateProp(prop, userId));},
  fetchViewedProfile: (userId) => {dispatch(fetchViewedProfile(userId));}
});

export default withRouter(connect(mapStateToProps,
               mapDispatchToProps)(ProfileDetails));
