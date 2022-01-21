import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import Contactus from './components/Contactus'
import Technologies from './components/Technologies'
import Html from './components/Html'
import Javascript from './components/Javascript'
import Products from './components/Products'




function App() {
  return (
    <div >

      {/* navbar */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* link for home */}
              <li className="nav-item">
                <NavLink className="nav-link" to="">Home</NavLink>
              </li>
              {/* link for users */}
              <li className="nav-item">
                <NavLink className="nav-link" to="users">Users</NavLink>
              </li>
              {/* link for contactus */}
              <li className="nav-item">
                <NavLink className="nav-link" to="contactus">Contactus</NavLink>
              </li>
               {/* link for contactus */}
               <li className="nav-item">
                <NavLink className="nav-link" to="products">Products</NavLink>
              </li>
              {/* link for technologies */}
              <li className="nav-item">
                <NavLink className="nav-link" to="technologies">Technologies</NavLink>
              </li>

            </ul>

          </div>
        </div>
      </nav>


      {/* Create routes for components */}
      <Routes>
        {/* route for home */}
        <Route path="" element={<Home />} />
        {/* router for users */}
        <Route path="users" element={<Users />} />
        {/* route for contactus */}
        <Route path='contactus' element={<Contactus />} />
         {/* route for contactus */}
         <Route path='products' element={<Products />} />
        {/* route for technologies */}
        <Route path='technologies' element={<Technologies />} >
          {/* nested route for html */}
          <Route path="html" element={<Html />} />
          {/* dealing with emprty path in nested routes */}
          <Route path="" element={<Navigate replace to="javascript" />} />

          {/* nested route for javascript */}
          <Route path="javascript" element={<Javascript />} />
        </Route>

      </Routes>

    </div>
  );
}

export default App;
