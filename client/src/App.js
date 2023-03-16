import {BrowserRouter as Router} from 'react-router-dom'

import './App.css';
import Navbars from './components/Navbar/Navbars';
import AllRoutes from './AllRoutes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers} from './actions/users'

function App() {
  const dispatch=useDispatch()//Dispatching actions in Redux is the fundamental method of updating a Redux store's state
//The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect(() => {
 dispatch(fetchAllQuestions())
 dispatch(fetchAllUsers())
}, [dispatch])

  return (
    <div className="App">
    <Router>
     {/* <h1>Stack Overflow Clone</h1> */}
     <Navbars />
     <AllRoutes />
     </Router>
    </div>
  );
}

export default App;
