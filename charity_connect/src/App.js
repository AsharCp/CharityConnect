import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Events from './pages/Events';
import History from './pages/History';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
       <Routes>
          <Route path='/' Component={Home} />
          <Route path='donate' Component={Donate} />
          <Route path='events' Component={Events} />
          <Route path='history' Component={History} />
       </Routes>
    </BrowserRouter>

    
  );
}

export default App;
