import "./App.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "antd/dist/antd.css";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { Admintemplate } from "./templates/Admintemplate/Admintemplate";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import AllCourse from "./pages/Course/AllCourse";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import Profile from "./pages/Profile/Profile";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <HomeTemplate path="/" component={Home} />
        <HomeTemplate path="/allcourse" component={AllCourse} />
        <HomeTemplate path="/coursedetail/:id" component={CourseDetail} />

        <HomeTemplate path="/profile" component={Profile} />
        <Admintemplate path="/admin" component={Admin} />
      </div>
    </Router>
  );
}

export default App;
