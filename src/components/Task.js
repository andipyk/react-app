import React from 'react';
import CommandButtons from './CommandButtons'
export default ({task, toogleTask, deleteTask}) => {
  const style= { 
    textDecoration: task.done ? 'line-through' : 'none',
    color: task.done ? 'red': 'black'
  }
  return <li>
    <CommandButtons task={task} toogleTask={toogleTask} deleteTask={deleteTask} />
    <span  style={style}>{task.description}</span>
  </li>
}