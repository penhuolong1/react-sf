import Loadable from 'react-loadable';
import Loading from '@/components/loading'

const Home = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/home'), loading: Loading});
const Page404 = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/error/404.jsx'), loading: Loading});
const Page403 = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/error/403.jsx'), loading: Loading});


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  { path: "/home", component: Home },
  { path: "/404", component: Page404 },
  { path: "/403", component: Page403 }
]
