import React, { useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)

  return (
    <React.Fragment>
      <p>
        {state.name}は{state.price}円です。
      </p>
      <button onClick={() => setState({...state, price: state.price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: state.price - 1})}>-1</button>
      <button onClick={() => setState(props)}>reset</button>
      <div>
        <input value={state.name} onChange={e => setState({...state, name: e.target.value})}></input>
      </div>
    </React.Fragment>
  );
}

// 
App.defaultProps = {
  name: '',
  price: 1000
}

export default App
