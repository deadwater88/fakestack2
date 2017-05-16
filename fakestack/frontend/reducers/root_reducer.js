import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CurrentUserReducer from './current_user_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  currentUser: CurrentUserReducer
});

export default rootReducer;
