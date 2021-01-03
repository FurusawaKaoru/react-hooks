import React, { useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'
import AppContext from '../contexts/AppContext'

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'

const App = () => {
  const appStateJson = localStorage.getItem('appWithRedux')
  const initialState = appStateJson ? JSON.parse(appStateJson) : {
    events: [],
    operationLogs: []
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('appWithRedux', JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
}

export default App
