import React, { useEffect, useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)

  // レンダリングのあとで実行される
  useEffect(() => {
    console.log('Effect')
  })

  useEffect(() => {
    console.log('最初だけEffect')
  }, [])

  useEffect(() => {
    console.log('nameEffect')
  }, [state.name])

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
