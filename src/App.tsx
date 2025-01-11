import { FC } from 'react'
import { Page, PageList } from './components'
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ApiProvider } from './context'
import { AppBar, Toolbar, Typography, Button, TextField, Box } from '@mui/material'
import { useAuth } from './hooks'

const Menu: FC = () => {
  const { user, login, logout } = useAuth();
  return (<AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        CMS
      </Typography>
      <Button>
        <NavLink to="/pages">Pages</NavLink>
      </Button>
      <Box>
        {user === null && (<>
          <TextField label="Username" />
          <TextField label="Password" />
          <Button color="inherit" onClick={() => login("", "")}>Login</Button>
        </>)}
        {user !== null && (<>
          <Button color="inherit" onClick={() => logout()}>Logout</Button>
        </>)}
      </Box>
    </Toolbar>
  </AppBar>);
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

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <ApiProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </ApiProvider>
  )
}

export default App;
function useStyles() {
  throw new Error('Function not implemented.')
}

