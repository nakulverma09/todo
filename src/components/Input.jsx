import React from 'react'
import { useState } from 'react';

const Input = ({taskHandler,task, handleSubmit}) => {

  return (
    <>
        <form className='flex justify-evenly items-center w-full' onSubmit={(e) => {handleSubmit(e)}} >
          <input type="text" value={task} placeholder='Enter a task' onChange={(e) => {taskHandler(e)}} className='w-4/5 m-2 rounded-lg p-2 border-2 border-blue-950'/>
          <button type='submit' className='bg-red-500 h-10 w-30 text-xs font-medium flex justify-center items-center p-2 rounded-lg border-2 border-black hover:bg-red-700'>Add Task</button>
        </form> 
    </>
    )
}

export default Input