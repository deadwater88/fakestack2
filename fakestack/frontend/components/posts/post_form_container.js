import { connect } from 'react-redux';
import PostForm from './post_form';


const mapStateToProps = (state) =>({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps,
               mapDispatchToProps)(PostForm);
