import { connect } from 'react-redux';
import Wall from './wall';
import {selectCurrentUserComments} from '../../../utils/selectors';


const mapStateToProps = (state) =>({
  currentUser: state.currentUser,
  comments: selectCurrentUserComments(state)
});

const mapDispatchToProps = (dispatch) => ({
  logout: null,
});

export default connect(mapStateToProps,
               mapDispatchToProps)(Wall);
