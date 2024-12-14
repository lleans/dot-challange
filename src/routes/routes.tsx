import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home/page";
import AuthForm from "@/pages/auth/page";
import Quiz from "@/pages/quiz/page";
import Result from "@/pages/result/page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <AuthForm />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);
