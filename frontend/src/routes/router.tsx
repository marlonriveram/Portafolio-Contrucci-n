import { createBrowserRouter} from "react-router";
import { Home } from "../page/home";
import { ViewProjects } from "../page/viewProjects";
import { ProjectDetail } from "../page/projectDetail";
import { Login } from "../page/login";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/projects",
    element: <ViewProjects/>,
  },
    {
    path: "/project/detail/:id",
    element: <ProjectDetail/>,
  },
     {
    path: "/login",
    element: <Login/>,
  },
]);