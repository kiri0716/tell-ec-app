import {
  BrowserRouter,
  Route,
  Routes,
  type RouteProps,
} from "react-router-dom";

import NotFound from "./NotFound";
import Test from "../layouts/pages/TestPage/Test";
import HomePage from "../layouts/pages/HomePage";

const routes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/test",
    Component: Test,
  },
  {
    path: "*",
    Component: NotFound,
  },
] as const satisfies RouteProps[];
// as const オブジェクト内のプロパティがreadonlyになる
// satisfies 式が型にマッチするかをチェック

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Component }, i) => (
          <Route key={i} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
