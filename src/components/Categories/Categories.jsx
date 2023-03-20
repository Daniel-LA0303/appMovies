import React from 'react'

const Categories = ({cat}) => {
  return (
    <div className='mr-2 my-1 bg-gray-500 py-2 px-4 rounded-xl'>
        <p className=' text-sm cursor-pointer'>{cat.name}</p>
    </div>
  )
}

export default Categories