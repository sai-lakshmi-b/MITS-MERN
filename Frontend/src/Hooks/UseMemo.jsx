import React, {useMemo,useState } from 'react'

const UseMemo = () => {
    const [count,setCount]=useState(0);
    const [number,setNumber]=useState(0);
    const cubeNum=()=>{
        console.log("calculation sone...");
        return Math.pow(number,3);
    }
    const result=useMemo(()=>{return  cubeNum(number)},[number]);
  return (
    <div>
      <h1>{count}</h1>
      <botton onClick={()=>setCount(count+1)}>count++</botton>
      <input type="number" onChange={(e)=>setNumber(e.target.value)}/>
      <p>Cube of the number is {result}</p>
    </div>
  )
}

export default UseMemo
