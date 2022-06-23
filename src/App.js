import "./App.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "antd/dist/antd.css";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { Admintemplate } from "./templates/Admintemplate/Admintemplate";
import Home from './pages/Home/Home';
import Dashboard from './pages/Admin/Dashboard';
import AllCourse from './pages/Course/AllCourse';
import Customer from './pages/Admin/Customer';
import AddUser from './pages/Admin/AddUser';
import Courses from './pages/Admin/Courses';
import AddCourses from './pages/Admin/AddCourses';
import EditUser from './pages/Admin/EditUser';
import EditCourse from './pages/Admin/EditCourse';
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import Profile from "./pages/Profile/Profile";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <HomeTemplate path='/' component={Home} />
        <HomeTemplate path='/allcourse' component={AllCourse} />
        <HomeTemplate path="/coursedetail/:id" component={CourseDetail} />
        <HomeTemplate path="/profile" component={Profile} />
        <Admintemplate path='/admin' component={Dashboard} />
        <Admintemplate path='/admin/customers' component={Customer} />
        <Admintemplate path='/admin/adduser' component={AddUser} />
        <Admintemplate path='/admin/editUser/:taiKhoan' component={EditUser} />
        <Admintemplate path='/admin/courses' component={Courses} />
        <Admintemplate path='/admin/addcourses' component={AddCourses} />
        <Admintemplate path='/admin/editcourses/:maKhoaHoc' component={EditCourse} />
      </div>
    </Router>
  );
}

export default App;
