import React from 'react'

import FilterOne from './FilterOne'


const Filter = ({shows}) => {
  return (
    <div className='py-3 '>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <FilterOne />
      </div>

        
      </div>
    </div>
  )
}

export default Filter