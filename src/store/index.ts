import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';


const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor && console.tron.createSagaMonitor()
    : undefined;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

interface Auth {
  loading: boolean;
  signed: boolean;
  token: string;
}

interface Profile {
  name: string;
  avatar: string;
}

interface User {
  profile: Profile
}

export interface RootState {
  auth: Auth;
  user: User;
}

export { store, persistor };
