import {BrowserRouter as Router} from 'react-router-dom'

import './App.css';
import Navbars from './components/Navbar/Navbars';
import AllRoutes from './AllRoutes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers} from './actions/users'

function App() {
  const dispatch=useDispatch()

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
