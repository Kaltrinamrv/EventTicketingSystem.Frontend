import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/UI/Header'
import Create from './pages/Create';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import AccountPage from './pages/AccountPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Thankyou from './pages/Thankyou';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />

    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/SearchPage",
      element: <SearchPage />
    },
    {
      path: "/about",
      element: <AccountPage />
    },
    {
      path: "/Thankyou",
      element: <Thankyou />

    },
    {
      path: "/create",
      element: <Create />
    },
    {
      path: "/header",
      element: <Header />
    }
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App
