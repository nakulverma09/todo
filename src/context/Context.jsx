import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
// Create the context
export const contextData = createContext();

// Context Provider Component
const Context = ({ children }) => {
  const [task, settask] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('tasks');
    if (storedData) {
      setData(JSON.parse(storedData)); // Load data from local storage
    }
  }, []);

  const taskHandler = (e) => {
    settask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setData((prevData) => {
        const newData = [task, ...prevData];
        localStorage.setItem('tasks', JSON.stringify(newData)); // Save to local storage
        return newData;
      });
      settask("");
    }
  };

  const deleteData = (e) => {
    const nodeToDelete = e.target.parentNode.parentNode.parentNode.id;
    if (nodeToDelete) {
      setData((prevData) => {
        const newData = prevData.filter((item, index) => index !== parseInt(nodeToDelete));
        localStorage.setItem('tasks', JSON.stringify(newData)); // Save to local storage
        return newData;
      });
    }
  };

  const editData = (e) => {
    const nodeToEdit = e.target.parentNode.parentNode.parentNode.id;
    if (nodeToEdit) {
      const taskToEdit = data[parseInt(nodeToEdit)];
      settask(taskToEdit);
      setData((prevData) => {
        const newData = prevData.filter((item, index) => index !== parseInt(nodeToEdit));
        localStorage.setItem('tasks', JSON.stringify(newData)); // Save to local storage
        return newData;
      });
    }
  };

  return (
    <contextData.Provider value={{ task, data, taskHandler, handleSubmit, deleteData, editData }}>
      {children}
    </contextData.Provider>
  );
};

export default Context;