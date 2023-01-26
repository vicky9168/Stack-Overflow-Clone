import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import decode from 'jwt-decode'
// import Button from "react-bootstrap/Button"
// import "bootstrap/dist/css/bootstap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../../assets/logo.png'
// import search from '../../assets/search.svg'
import Avatar from '../Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'
// import sure from './sure'

const Navbars = () => {
 var User = useSelector((state) => (state.currentUserReducer))
const dispatch=useDispatch()
const navigate=useNavigate();


// const checkUser = () =>{
//   if(err){
//    alert("Invalid Credintials")
//   }
// }

const handleLogout = () =>{
    dispatch({type:'LOGOUT'});
    navigate('/')
    dispatch(setCurrentUser(null))
}
     useEffect(() => { 
      const token =User?.token;
      if(token){
        const decodedToken = decode(token)
        if(decodedToken.exp * 1000 < new Date().getTime()){
          handleLogout()
        }
      }
      dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
     },[User?.token, dispatch])
  return (
    // <nav className='main-nav'>
    // <div className='navbar'>
    //   <Link to='/' className='nav-item nav-logo'>
    //   <img className='img' src={logo} alt='logo' />
    //   </Link>
    //   <Link to='/' className='nav-item nav-btn'>About</Link>
    //   <Link to='/' className='nav-item nav-btn'>Products</Link>
    //   <Link to='/' className='nav-item nav-btn'>For Teams</Link>
    //    <form>
    //     <input type="text" placeholder='Search...' />
    //   <img src={search} alt='search' width='18' className='search-icon' />
    //    </form>
    //    {User=== null ? 
    //    <Link to='/Auth' className='nav-item nav-links'>Login</Link> :
    //    <>
    //     <Avatar backgroundColor="#009dff" px='10px' py='7px' borderRadius='50%' color='white'><Link to={`/Users/${User?.result?._id}`} style={{color:"white",textDecoration:"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
    //     <button className='nav-item nav-links' onClick={handleLogout}>Log Out</button>
    //    </>
    //    }
    // </div>
    // </nav>
    <div >
    <Navbar bg="light" expand="lg" className='w'>
      <Container fluid>
        <Navbar.Brand href="/">
          {" "}
          <img className="img" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className='nav-item nav-btn'>About</Nav.Link>
            <Nav.Link href="/" className='nav-item nav-btn'>Products</Nav.Link>
            <Nav.Link href="/" className='nav-item nav-btn'>For Teams</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-primary">Search</Button> */}
         
           {User=== null ? 
     <Link to='/Auth' className='nav-item nav-links'>Login</Link> :
       <>
        <Avatar backgroundColor="#009dff" px='10px' py='18px' borderRadius='50%' color='white'><Link to={`/Users/${User?.result?._id}`} style={{color:"white",textDecoration:"none",textAlign:"center"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
        {/* <button className='nav-item nav-links' onClick={handleLogout}>Log Out</button> */}
        <Button variant="outline-primary" className='nav-item nav-links' onClick={handleLogout}>Log Out</Button>

        </>
        }
        </Form>
       </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars
