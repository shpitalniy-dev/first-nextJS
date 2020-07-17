import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './saga/rootSaga';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const configureStore = (preloadedState, { isServer, req = null }) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    bindMiddleware([sagaMiddleware])
  );
  
  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }

  return store;
};

export default configureStore;