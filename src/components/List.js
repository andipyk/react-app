import React, { useState, useEffect } from 'react';
import useFetch from "../hooks/useFetch";
import Task from './Task';
import Filter from './Filter';
import NewTask from './NewTask'

export default () => {

  const tasksApi =  useFetch(
    "https://5cfabdcbf26e8c00146d0b0e.mockapi.io/tasks"
  );
 
  useEffect(() => {
    const init = async () => {
      tasksApi.get().then(data => setList(data))
    }
    init()
  },[])

  const [list, setList] = useState([])
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('');

  const addTask = () => {
    if (!newTask) return;
    setLoading(true);
    tasksApi
      .post({
        description: newTask,
        createdAt: new Date().toISOString(),
        done: false,
        updatedAt: ""
      })
      .then(data => {
        const newList = [...list, data].sort((a, b) =>
          a.createdAt < b.createdAt ? 1 : -1
        );
        setList(newList);
        setNewTask("");
        setLoading(false);
      });
  };
  const deleteTask  = task => {
      const { id } = task;
      setLoading(true);
      tasksApi.del(id).then(data => {
        const newList = list
        .filter(l => l.id !== data.id)
        .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
      setList(newList);
      setLoading(false);
      })
  }
  const toogleTask = task => {
    const { id, done } = task;
    setLoading(true);
    tasksApi.put(id, { done: !done, updatedAt: new Date().toISOString()})
    .then(data => {
        const newList = list
          .map(l => {
            if (l.id === id) {
              l.done = data.done;
              l.updatedAt = data.updatedAt;
            }
            return l;
          })
          .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
        setList(newList);
        setNewTask("");
        setLoading(false);
      });
  };  

  return (
    <div>
      <h1>Tasks</h1>
      <hr />
      { loading && <h2>Loading ... </h2>}
      {!loading && <div>
        <div><Filter filter={filter} setFilter={setFilter} /></div>
        <div>
        <NewTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} />

        </div>
        <div><ul>
        {list
          .filter(task => !filter || task.description.toLowerCase().includes(filter.toLowerCase()))
          .map(task => <Task key={task.id} task={task} toogleTask={toogleTask} deleteTask={deleteTask}/>)}
      </ul></div></div>
      }
    </div>
  )
}