import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Login from '../components/login/login';
import Services from '../components/services/services';
import Aboutus from '../components/aboutus/aboutus';


function App(){

  return (
    <Router>
    <div className='App'>
       <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
        <div className='container'>
          <Link className='navbar-brand' to={'/login'}>
            TRAVELOPIA
          </Link>
          <div className='collapse navbar-collapse'id='navbarTogglerDemo02'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to={'/login'}>Login</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={'/services'}>Services</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={'/aboutus'}>About Us</Link>
              </li>
            </ul>

          </div>
        </div>
       </nav>
       <div className='auth-wrapper'>
        <div className='auth-inner'>
          <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route  exact path='/services'element={<Services/>}/>
            <Route exact path='/aboutus'element={<Aboutus/>}/>
            
          </Routes>
        </div>
       </div>
    </div>
    </Router>
  );
}
export default App;