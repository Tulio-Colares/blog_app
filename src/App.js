import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Single from './pages/Single';
import Write from './pages/Write';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [{
      path: "/",
      element: <Home/>
    },
    {
      path: "/single",
      element: <Single/>
    },
    {
      path: "/write",
      element: <Write/>
    },
  ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
