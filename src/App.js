import logo from './logo.svg';
import './App.css';
import { Route, Router } from 'react-router-dom';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='user/add' element={<AddUser></AddUser>} ></Route>
      </Router>
    </div>
  );
}

export default App;
