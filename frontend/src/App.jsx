import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import Navbar from './Components/User/Navbar'
import Login from './Components/User/Login'
import Profile from './Components/User/Profile'
import ViewCourses from './Components/User/ViewCourses'
import LearnMore from './Components/User/LearnMore'

import EnquiryPage from './Components/User/EnquiryPage'
import ANavbar from './Components/Admin/ANavbar'
import ViewEnquiry from './Components/User/ViewEnquiry'
import AddCourse from './Components/Admin/AddCourse'
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route exact path="/"element={<Navigate to="/login"/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/nav"element={<Navbar/>}/>
        <Route path="/profile"element={<Profile/>}/>
        <Route path='/view-courses'element={<ViewCourses/>}/>
        <Route path='/add-enquiry'element={<EnquiryPage/>}/>
        <Route path='/learn-more'element={<LearnMore/>}/>
        <Route path='/anav'element={<ANavbar/>}/>
        <Route path='/view-enquiry'element={<ViewEnquiry/>}/>
        <Route path='/add-course' element={<AddCourse/>}/>
        {/* <Route path="/view-courses"element={<ViewCourses/>}/>
        <Route path="/add-enquiry" element={<EnquiryPage/>} /> */}
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
