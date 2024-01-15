import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';
import Auth from '../Auth';
const Navbar = () => {
    Auth();
    const navigate = useNavigate();
    const Logout = () =>{
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        navigate('/login')
    }
  return (
    <div className="container">
        <header
            className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
                <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                <b>Task Management System</b>
                </Link>
            </div>    
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
                <li><Link to="/task" className="nav-link px-2 link-secondary">Task</Link></li>
                <li><Link to="/task-new" className="nav-link px-2 link-secondary">New</Link></li>
            </ul>    
            <div className="col-md-3 text-end">
                <Link to="/profile" className="btn btn-outline-primary me-2">Profile</Link>
                <button onClick={Logout} type="button" className="btn btn-primary me-2">Logout</button>
            </div>
        </header>
    </div>
  )
}

export default Navbar