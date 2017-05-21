import { connect } from 'react-redux';
import ProfileDetails from './profile_details';


const mapStateToProps = (state) =>({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: (user) => null
});

export default connect(mapStateToProps,
               mapDispatchToProps)(ProfileDetails);
