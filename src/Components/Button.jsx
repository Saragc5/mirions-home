import React from 'react'


function Button({ text }) {
  return (
    <div >
    <button className='buttonClass'>
    { text }
    </button>
    </div>
  )
}

export default Button