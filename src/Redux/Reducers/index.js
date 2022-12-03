import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage  from 'redux-persist/lib/storage';
import cartReducers from './Cart/cartReducer';
import directoryReducer  from './Directory';
import { getCollectionReducer } from './Shop';
import userReducer from './User/userReducer';

const persistConfig ={
  key:'root',
  storage,
  whitelist:['toggleCart']
}

const rootReducer = combineReducers({
	user: userReducer,
	toggleCart: cartReducers,
  directoryLists:directoryReducer,
  shop:getCollectionReducer
});

export default persistReducer(persistConfig,rootReducer)