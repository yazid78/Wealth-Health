import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.tsx'
import ListEmployee from './components/Employee.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path: "/employee",
    element: <ListEmployee />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider >
)