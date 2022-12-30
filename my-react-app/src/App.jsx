import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateUser from './User/CreateUser';
import Footer from './Footer';
function App() {
  return (
    <Router>
      <div className='mainpage'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createUser' element={<CreateUser />} />
      </Routes>
      <Footer/>
    </Router>



  );
}

export default App;
