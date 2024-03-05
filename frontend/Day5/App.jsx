import {Navigate,Route,Routes} from 'react-router-dom'
import {lazy} from 'react'
import LazyLayout from './components/LazyLayout'
import UserLayout from './pages/user/UserLayout'
// import Navbar from './pages/user/Navbar'
// import AdminLayout from '/pages/admin/AdminLayout'
const LazyLogin = lazy(()  => import('./pages/auth/Login'))
const LazyRegister = lazy(() => import('./pages/auth/Register'))
const LazyHome = lazy(() => import ('./pages/user/Home'))
const LazyUserDashboard = lazy(() => import('./pages/user/UserDashboard'))
const LazyAccount = lazy(() => import ('./pages/user/Account'))
const LazyDashboard = lazy(() => import ('./pages/admin/Dashboard'))
const LazyUserInfo = lazy(() => import ('./pages/admin/UserInfo'))
const UserRoutes = () => {
  return(
    <UserLayout>
    <Routes>
      <Route path = '/home' element={<LazyLayout component={LazyHome}/>}/>
      <Route path = '/account' element={<LazyLayout component={LazyAccount}/>}/>
      <Route path = '/userdashboard' element={<LazyLayout component={LazyUserDashboard}/>}/>
    </Routes> 
    </UserLayout>
  )
}

const AdminRoutes = () => {
  return(
    <AdminLayout>
    <Routes>
    <Route path='/dashboard' element={<LazyLayout component={LazyDashboard}/>}/>
    <Route path='/userinfo' element={<LazyLayout component={LazyUserInfo}/>}/>
    </Routes>
   </AdminLayout>
  )
}
function App() {

  return (
    
    <Routes>
      <Route exact path='/' element={<Navigate to='/react-app/login'/>}/>
      <Route path='/react-app/login' element={<LazyLayout component={LazyLogin}/>}/>
      <Route path='/react-app/register' element={<LazyLayout component={LazyRegister}/>}/>
      <Route path='/react-app/user/*' element={<UserRoutes />}/>
      <Route path='/react-app/admin/*' element={<AdminRoutes />}/>
    </Routes>
  )
}

export default App
