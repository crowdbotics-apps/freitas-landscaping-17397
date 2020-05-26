import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn252271Reducer from '../features/SignIn252271/redux/reducers'
import SignUp252270Reducer from '../features/SignUp252270/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn252271: SignIn252271Reducer,
SignUp252270: SignUp252270Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});