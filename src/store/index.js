import { createStore,  applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootSaga from './saga'
import rootReducer from './reducers'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware  = createSagaMiddleware();

const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { store , persistor }