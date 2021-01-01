import React, { useState } from 'react'

const App = props => {

  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }

  return (
    <React.Fragment>
      <p>
        {name}は{price}円です。
      </p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={() => setPrice(reset)}>reset</button>
      <div>
        <input value={name} onChange={e => setName(e.target.value)}></input>
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
