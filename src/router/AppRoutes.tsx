import { BrowserRouter, Route, Routes,type RouteProps } from "react-router-dom"
import App from "../App"
import Home from "../pages";
import NotFound from "../pages/NotFound";

const routes=[
    {
        path:'/',
        Component:App,
    },
    {
        path:'/home',
        Component:Home,
    },
    {
        path:'*',
        Component:NotFound,
    },
] as const satisfies RouteProps[];
// as const オブジェクト内のプロパティがreadonlyになる
// satisfies 式が型にマッチするかをチェック


const AppRoutes =()=>{
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({path,Component},i)=> <Route key={i} path={path} element={<Component />} />)}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;