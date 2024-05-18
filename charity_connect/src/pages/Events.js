import React, { useEffect } from 'react'
import EventData from '../Events.json'

const Events = () => {
  useEffect(() => {
    console.log(EventData)
  },)
  
  return (
    <div className='m-10 flex flex-row flex-wrap justify-center'>
      {EventData.Events.map(data=>(
        <div key={data.id} className='w-2/12 flex flex-col items-center text-center border-2 border-gray-500 rounded m-3'>
          <img src={data.url} alt='Image' />  
          <p className='p-2  font-semibold'>{data.name}</p>
        </div>

      ))

      }
      
    </div>
  )
}

export default Events