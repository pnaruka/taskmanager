import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks } from './redux_store/actions'

const App = () => {
  const myState = useSelector((state)=>state.loadTasks);
  const dispatch = useDispatch();

  const fetchTasks = async()=>{
    const res = await axios.get('/tasks')
                .then((r)=> r.data)
                .catch((err)=>{console.log(err);});
    dispatch(getTasks(res));
    console.log(myState);
  }

  return (
    <div>
      <input type='button' onClick={fetchTasks} value="Get" />
    </div>
  )
}

export default App