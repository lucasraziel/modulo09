import { createStore, compose, applyMiddleware, Reducer, Middleware } from 'redux';

export default (reducers:Reducer, middlewares: Middleware[]) => {
  const enhancer =
    process.env.NODE_ENV === 'development' && console.tron.createEnhancer
      ? compose(
          console.tron.createEnhancer(),
          applyMiddleware(...middlewares)
        )
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
