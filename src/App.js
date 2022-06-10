import './App.css';
import Footer from './Component/Footer/Footer';
import About from './Component/Page/About/About';
import Contact from './Component/Page/Contact/Contact';
import Home from './Component/Page/Home/Home';
import Project from './Component/Page/Projects/Project';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Component/Page/HomePage/Homepage';
import Resume from './Component/Page/Resume/Resume';

function App() {
  return (
    <div >
      <Home></Home>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/project' element={<Project></Project>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
      </Routes>
      <Footer></Footer>





    </div>
  );
}

export default App;
