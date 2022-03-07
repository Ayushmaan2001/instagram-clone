import '../css/App.css';
import SignUp from './sign-up';
import Login from './login';
import Navbar from './navbar';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route element={<Login/>} path='/'></Route>
        <Route element={<SignUp />} path="/signup" exact></Route>
      </Routes>
    </>
  );
}

export default App;
