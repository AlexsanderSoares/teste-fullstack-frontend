import {FaSearch} from 'react-icons/fa';
import './App.css';
import {Link, useLocation} from 'react-router-dom';


function App(props) {

  const location = useLocation();

  return (
    <div className="App">
        <div className='menu'>
            <Link to="/" className={`button ${location.pathname === '/' ? "current_page" : ""}`}>
              <FaSearch size={15}/> 
              <span>/estados</span>
            </Link>
            <Link to="/populacao/sp" className={`button ${location.pathname === '/populacao/sp' ? "current_page" : ""}`}>
              <FaSearch size={15}/> 
              <span>/populacao/sp</span>
            </Link>
            <Link to="/v2/estados" className={`button ${location.pathname === '/v2/estados' ? "current_page" : ""}`}>
              <FaSearch size={15}/> 
              <span>/v2/estados</span>
            </Link>
        </div>
        <div className='container'>
          <header className='header'>
              
          </header>
          <main className='main'>
              {props.children}
          </main>
          <footer className='footer'>
              
          </footer>
        </div>
    </div>
  );
}

export default App;
