
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Country } from './Pages/Country';
import { Contact } from './Pages/Contact';
import { AppLayout } from './Components/Layout/AppLayout';  // Make sure to import this
import './index.css';
import { ErrorPage } from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,  
    errorElement: <ErrorPage/>,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'country',
        element: <Country />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
