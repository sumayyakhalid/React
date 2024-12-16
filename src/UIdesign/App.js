import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Callcomponents from "./Callcomponents.jsx";
import Men from "./Men.jsx";
import Women from "./Women.jsx";
import Login from "./Login.jsx";
import { useEffect } from "react";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Blog from "./Blog.jsx";
function UiDesignApp() {
  const [isAuthenticated, setAuth] = useState(
    localStorage.getItem("isAuthenticated") ? true : false
  );
  const handleSetIsAuth =(authValue)=>{
    setAuth(authValue)
  }
  // const [isAuthenticated, setAuth] = useState(false)
  const login = () => {
    setAuth(true);
    localStorage.setItem("isAuthenticated", true); // Save authentication status in localStorage
  };
  const logout = () => {
    setAuth(false);
    localStorage.setItem("isAuthenticated", false); // Save authentication status in localStorage
  };

  return (
    <div className="App">
     

      <Router>
        <Routes>
          <Route path="/" element={<Login login={login} />}></Route>
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} handleSetIsAuthenticated={handleSetIsAuth} />}>
            <Route
              path="/callcomponent"
              element={
                <Callcomponents
                  isAuthenticated={isAuthenticated}
                  logout={logout}
                />
              }
            >
              <Route path="men" element={<Men />}>
                {" "}
              </Route>
              <Route path="women" element={<Women />}></Route>
            </Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default UiDesignApp;