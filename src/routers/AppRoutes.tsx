import { BrowserRouter, Route, Routes, type RouteProps } from "react-router-dom"
import App from "../features/StartPage/App"
import NotFound from "./NotFound";

const routes = [
    {
        path: '/',
        Component: App,
    },
    {
        path: '*',
        Component: NotFound,
    },
] as const satisfies RouteProps[];
// as const オブジェクト内のプロパティがreadonlyになる
// satisfies 式が型にマッチするかをチェック


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ path, Component }, i) => <Route key={i} path={path} element={<Component />} />)}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;