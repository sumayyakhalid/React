// import logo from "./logo.svg";
// import { useState } from "react";
// import "./index.css";
// import "./App.css";
// import ToDoList from "./ToDoList.jsx";
// import ToDoItem from "./ToDoItem.jsx";
// import Api from "./Api.jsx";
// import { ThemeProvider } from "./Blog/themeProvider.jsx";
// import TodoList from "./ToDoList.jsx";
// import Blog from "./Blog/Blog.jsx";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import BlogDesp from "./Blog/BlogDesp.jsx";
// import Home from "./UIdesign/Home.jsx";
// import About from "./UIdesign/About.jsx";
// import Contact from "./UIdesign/Contact.jsx";
// import Callcomponents from "./UIdesign/Callcomponents.jsx";
// import Men from "./UIdesign/Men.jsx";
// import Women from "./UIdesign/Women.jsx";
// import Login from "./UIdesign/Login.jsx";
// import { useEffect } from "react";
// import ProtectedRoute from "./UIdesign/ProtectedRoute.jsx";
// function App() {
//   const [isAuthenticated, setAuth] = useState(
//     localStorage.getItem("isAuthenticated") ? true : false
//   );
//   const handleSetIsAuth =(authValue)=>{
//     setAuth(authValue)
//   }
//   // const [isAuthenticated, setAuth] = useState(false)
//   const login = () => {
//     setAuth(true);
//     localStorage.setItem("isAuthenticated", true); // Save authentication status in localStorage
//   };
//   const logout = () => {
//     setAuth(false);
//     localStorage.setItem("isAuthenticated", false); // Save authentication status in localStorage
//   };

//   return (
//     <div className="App">
//       {/* <Api/> */}
//       {/* <ThemeProvider>   
//        <ToDoItem/>
//     </ThemeProvider> */}
//       {/* <Blog/> */}

//       <Router>
//         <Routes>
//           {/* <Route path="/blog" element={<Blog/>}></Route>
//           <Route path="/blog/:id" element={<BlogDesp/>}></Route> */}

//           <Route path="/" element={<Login login={login} />}></Route>
//           <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} handleSetIsAuthenticated={handleSetIsAuth} />}>
//             <Route
//               path="/callcomponent"
//               element={
//                 <Callcomponents
//                   isAuthenticated={isAuthenticated}
//                   logout={logout}
//                 />
//               }
//             >
//               <Route path="men" element={<Men />}>
//                 {" "}
//               </Route>
//               <Route path="women" element={<Women />}></Route>
//             </Route>
//             <Route path="/contact" element={<Contact />}></Route>
//             <Route path="/about" element={<About />}></Route>
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import UiDesignApp from './UIdesign/App'
import NoMemo from './UIdesign/NoMemo'
import Memo from './UIdesign/Memo' 
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import ThemeSwitcher from './UIdesign/ThemeSwitcher';

const App = () => {
   // Get the current theme from Redux store
   const theme = useSelector((state) => state.theme.theme);
   
   // Define the light and dark themes using Material-UI's createTheme function
   const lightTheme = createTheme({
    
     palette: {
       mode: 'light',
     },
   });
 
   const darkTheme = createTheme({
     palette: {
       mode: 'dark',
     },
   });
 
   // Use the theme selected from Redux (light or dark)
   const currentTheme = theme === 'light' ? lightTheme : darkTheme;
 
  return (
    <div>
      <ThemeProvider theme={currentTheme}>
      <CssBaseline /> {/* Ensures that global styles (like background color) are applied */}
      <div>
        <UiDesignApp/>
      </div>
    </ThemeProvider>
    </div>
  )
}

export default App
