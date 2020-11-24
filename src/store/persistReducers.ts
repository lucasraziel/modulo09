import storage from 'redux-persist/lib/storage';
import {Reducer} from 'redux'
import { persistReducer } from 'redux-persist';
const persist = (reducers:any ):Reducer => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};

export default persist;
