import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  // MEMO: prevCountという前の値を引数として受け取ることができる
  const increment2 = () => setCount(prevCount => prevCount + 1)
  const decrement2 = () => setCount(prevCount => prevCount - 1)

  const reset = () =>  setCount(0)

  const double = () => setCount(prevCount => prevCount * 2)

  return (
    <React.Fragment>
      <div>
        count: {count}
      </div>

      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>

      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>

      <div>
        <button onClick={reset}>reset</button>
      </div>

      <div>
        <button onClick={double}>x2</button>
      </div>
    </React.Fragment>
  );
}

export default App
