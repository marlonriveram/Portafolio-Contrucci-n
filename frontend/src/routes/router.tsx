import { createBrowserRouter } from "react-router";
import { Home } from "../page/home";
import { ViewProjects } from "../page/viewProjects";
import { ProjectDetail } from "../page/projectDetail";
import { Login } from "../page/login";
import { MainLayout } from "../components/mainLayout/MainLayout";
import { PanelAdmin } from "../page/PanelAdmin";
import { Protected } from "../components/protectedRoute/Protected";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects",
        element: <ViewProjects />,
      },
      {
        path: "/project/detail/:id",
        element: <ProjectDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:"/panel-admin",
        element:<Protected> <PanelAdmin/> </Protected>
      }
    ]
  },


]);