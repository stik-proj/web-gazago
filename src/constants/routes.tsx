import { createBrowserRouter } from "react-router-dom";
import Main from "src/presentations/views/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default router;
