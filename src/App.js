import './App.scss';
import Home from './pages/Home';
import Search from './pages/Search';
import {BrowserRouter} from 'react-router-dom'
import Routes from './config/routes';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <BrowserRouter>
      <div className='app'>
          <Navbar/>
          <Routes/>
      </div>
    </BrowserRouter>  
  );
}

export default App;
