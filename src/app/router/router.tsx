import { createBrowserRouter } from "react-router-dom";
import Profil from "../pages/profil/Profil";
import WorkInProgress from "../pages/workInProgress/WorkInProgress";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Profil />,
    },
    {
      path: '/work-in-progress',
      element: <WorkInProgress />,
    },
  ])
  
  export default router