import React from 'react'

function Restart({setSecretNumber, generateUniqueDigits}) {
    const restartHandler=(e)=>{
        setSecretNumber(generateUniqueDigits())
    }

  return (
    <button onClick={restartHandler}>Restart</button>
  )
}

export default Restart