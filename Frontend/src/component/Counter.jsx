import React ,{useState}    from 'react'

const Counter = () => {
    const[count,setCount]=useState(2)
    const handleDecrement=()=>{
      setCount(count-1)
    }
  return (
    <div>
        <h1>{count} </h1>
        <button onClick={()=>{setCount(count+2)}}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
        </div>
  )
}

export default Counter
