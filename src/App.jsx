import { useContext, useState } from 'react'
import './App.css'
import Task from './components/Task'
import Input from './components/Input'
import TaskList from './components/TaskList'
import Heading from './components/Heading'
import { contextData } from './context/Context'

function App() {
  
  const { task, data, taskHandler, handleSubmit, deleteData, editData } = useContext(contextData)

  return (
    <>
    <div className='h-screen w-screen flex justify-center items-center bg-black'>
      <div className='h-3/4 w-4/5 overflow-hidden rounded-lg border-2 border-blue-950 flex flex-col justify-between items-center p-2'>
        <div className='bg-gray-200 w-full h-36 flex flex-col justify-evenly items-center rounded-md'>
          {/* todo heading */}
          <Heading/>
          {/* input task */}
          <Input taskHandler={taskHandler} task={task} handleSubmit={handleSubmit}/>
        </div>
        
        <TaskList data={data} deleteData={deleteData} editData={editData}/>
        </div>
      </div>
    </> 
  )
}

export default App
