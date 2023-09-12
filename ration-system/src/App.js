import './App.css';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import LoginRetailer from './LoginRetailer';
import Customer from './Customer';

function App() {
  return (
    <div className="App">
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/retailer_login' element={<LoginRetailer/>} />
        <Route path='/customer_page' element={<Customer/>} />
      </Routes>
    </div>
  );
}

export default App;
