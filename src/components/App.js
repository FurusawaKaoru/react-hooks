import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'
import AppContext from '../contexts/AppContext'

import EventForm from './EventForm'
import Events from './Events'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App
