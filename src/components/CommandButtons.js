import React from 'react';

export default ({task, toogleTask, deleteTask}) => {
  const handleToogleClick = () => { toogleTask(task)}
  const handleDeleteClick = () => { deleteTask(task)}
  return <>
    <button onClick={handleToogleClick}>Toogle</button>
    <button onClick={handleDeleteClick}>Delete</button>

  </>
}