import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import AuthForm from './auth_form'


const mapStateToProps = (state) =>({
  currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  login: (user) => { dispatch(login(user))},
  signup: (user) => dispatch(login(user))
})

export default connect(mapStateToProps,
               mapDispatchToProps)(AuthForm)
