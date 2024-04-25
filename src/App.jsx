import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/UI/Header'
import Create from './pages/Create';
import Home from './pages/Home';

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/create",
    element: <Create />
  },
  {
    path:"/header",
    element:<Header/>
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