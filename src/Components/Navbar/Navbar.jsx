import React from 'react'
import { Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success p-3">
  <div className="container-fluid">
    <Link className="navbar-brand" to="">Table Form</Link>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">Home</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link active" to="/Forms">Forms</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link active" to="/Contact">Contact</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link active" to="/Table">Table</NavLink>
        </li>

        </ul>
    </div>
    </div>           
</nav>
    </>
    )
}

export default Navbar;