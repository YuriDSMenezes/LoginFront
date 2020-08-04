import { persistStore } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'
import persistReducer from './persistReducer'

import rootSaga from './modules/rootSaga'
import rootReducer from './modules/rootReducer'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistReducer(
    rootReducer),
  applyMiddleware(sagaMiddleware)
)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }