import React,{useMemo} from 'react'

const Header = () => {
    console.log("Header Randered");
  return (
    <div>Header</div>
  )
}

export default React.memo(Header)
