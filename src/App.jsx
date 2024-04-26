import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/UI/Header'
import Create from './pages/Create';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/SearchPage",
      element: <SearchPage />
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
