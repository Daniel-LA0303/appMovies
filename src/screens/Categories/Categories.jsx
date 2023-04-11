import React from 'react'
import useGlobal from '../../hooks/useGlobal';
import TabsCats from '../../components/Tabs/TabsCats';

const Categories = () => {



  return (
    <>
      <div className='w-full md:w-8/12'>
        <div className='mx-2 sm:mx-5  mt-3'>
          <TabsCats />
        </div> 
      </div>
    </>
  )
}

export default Categories