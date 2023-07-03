import {Routes as RoutesSwitch, Route} from 'react-router-dom'
import Home from "../pages/Home";
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import Detail from '../pages/Detail';

const routes = {
    home: '/',
    search: '/search',
    following: '/following',
    detail: '/:category/:id',
    upload: '/upload',
    live: '/live',
};

const publicRoutes = [
    { path: routes.home, component: <Home/> },
    { path: routes.search, component: <Search/> },
    // { path: routes.following, component: Following },
     { path: routes.profile, component: <Profile/> },
     { path: routes.detail, component: <Detail/> },
    // { path: routes.upload, component: Upload, Layout: HeaderOnly },
    // { path: routes.live, component: Live },
];


export default function Routes(){
    return (
        <RoutesSwitch>
            {
                publicRoutes.map((route, i) => (
                    <Route key={i} exact path={route.path} element={route.component} />
                ))
            }
        </RoutesSwitch>
    );
}