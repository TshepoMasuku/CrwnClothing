import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import { rootReducer } from './root-reducer';


// Custom Middleware
// eslint-disable-next-line
const customMiddleware = () => (store) => (next) => (action) => {
  if(!action.type) {
    return next(action);
  }
  console.log("Action Type: ", action.type);
  console.log("Action Payload: ", action.payload);
  console.log("Current State :>> ", store.getState());
  next(action);
  console.log("Next State :>> ", store.getState());
};

// const middlewares = [logger, thunk];
const middlewares = [process.env.NODE_ENV === "development" && logger, thunk].filter(Boolean);

const composedEnhancers = process.env.NODE_ENV === "development" ? 
  composeWithDevTools(applyMiddleware(...middlewares)) : compose(applyMiddleware(...middlewares));

// export const store = createStore( rootReducer, this-is-a-state-parameter, composedEnhancers );
// export const store = createStore( rootReducer, undefined, composedEnhancers );

// redux-persist implementation
const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['user'],
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore( persistedReducer, undefined, composedEnhancers );

export const persistedStore = persistStore(store);
