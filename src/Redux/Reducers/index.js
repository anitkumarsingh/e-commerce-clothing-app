import { combineReducers } from 'redux';
import cartReducers from './Cart/cartReducer';
import userReducer from './User/userReducer';



export default combineReducers({
  user:userReducer,
  toggleCart:cartReducers
})