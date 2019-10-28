import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'

import Route from './routes'

import { Provider } from 'react-redux'
import { store , persistor } from './store'

export default function App(){
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Route />
            </PersistGate>
        </Provider>
    )
}
