import { createBrowserRouter } from "react-router-dom";
import Main from "src/presentations/views/Main";
import Detail from "src/presentations/views/Detail";
import Complete from "src/presentations/views/Complete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/complete/:id",
    element: <Complete />,
  },
]);

export default router;
