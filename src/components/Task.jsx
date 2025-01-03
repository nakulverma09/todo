import React from 'react'

const Task = ({TaskKey, data, deleteData, editData}) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const d = new Date();
  let day = days[d.getDay()];
  let month = months[d.getMonth()];
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let date = d.getDate();

  return (
        <div className='w-full h-14 bg-gray-300 flex justify-between items-center text-xl p-3 rounded-md my-2'>
          <div>
            <p>{data}</p>
            <span className='text-xs text-gray-500'>{day}, {month} {date} at {hours}:{minutes}</span>
          </div>
          <div>
            <button onClick={(e) => editData(e)} className='bg-blue-300 w-20 h-8 rounded-md text-base m-1 border-2 border-black'>Edit</button>
            <button id={TaskKey} onClick={(e)=> deleteData(e)} className='bg-blue-300 w-20 h-8 rounded-md text-base m-1 border-2 border-black'>Delete</button>
          </div>
        </div>
    )
}

export default Task