import { FC } from 'react'
import './App.css'
import { Page, PageList } from './components'
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from 'react-router'

const Menu: FC = () => {
  return (<div>
    <NavLink to="/pages">List</NavLink>
  </div>);
}

const Template: FC = () => {
  return (<>
    <Menu />
    <Outlet />
  </>);
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "pages",
        element: <PageList />,
        children: [
          {
            path: ":id",
            element: <Page />
          }
        ]
      }
    ]
  }
])

const App: FC = () => {
  return (
    <RouterProvider router={routes} />
  )
}

export default App;
