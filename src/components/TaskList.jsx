import React from 'react'
import Task from './Task'

const TaskList = ({data, deleteData, editData}) => {
  return (
    <div className='w-full h-full scrollbar-hide scroll-smooth overflow-y-auto'>
      {
        data.map((d, index)=>{
          return <li id={index} key={index} className='list-none'>
            <Task TaskKey={index} data={d} deleteData={deleteData} editData={editData}/>
          </li>
        })
      }
    </div>  
)
}

export default TaskList