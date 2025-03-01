import React from 'react'
import './ShowCount.css'

function ShowCount({ count }) {
  return (
    <div className='count-display'>
      <h2>
        You clicked here {count} time{count !== 1 ? 's' : ''}
      </h2>
    </div>
  )
}

export default ShowCount
