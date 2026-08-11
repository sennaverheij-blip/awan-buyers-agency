import { createBrowserRouter } from 'react-router'
import Home from './pages/Home'
import PastResultsPage from './pages/PastResultsPage'
import AdminPage from './pages/AdminPage'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/past-results',
    Component: PastResultsPage,
  },
  {
    path: '/admin',
    Component: AdminPage,
  },
])
