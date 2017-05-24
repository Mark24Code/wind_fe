import Vue from 'vue';
import Router from 'vue-router';

// import home from '@/pages/home';
// import blogs from '@/pages/blogs';
// import blog from '@/pages/blog';
// import about from '@/pages/about';
// import login from '@/pages/login';
// import manager from '@/pages/manager';
// import dashboard from '@/pages/dashboard';
// import blogList from '@/pages/blogList';
// import setting from '@/pages/setting';
// import blogCreate from '@/pages/blogCreate';
// import blogEdit from '@/pages/blogEdit';

// import lab from '@/pages/lab';
//     import Sudoku from '@/pages/labSubs/Sudoku';
//     import MemoryGame from '@/pages/labSubs/MemoryGame';
//     import VedioPlayer from '@/pages/labSubs/VedioPlayer';
//     import Todo from '@/pages/labSubs/Todo';
const home = r => require.ensure([], () => r(require('@/pages/home')), 'main');
const blogs = r => require.ensure([], () => r(require('@/pages/blogs')), 'blogs');
const blog = r => require.ensure([], () => r(require('@/pages/blog')), 'blogs');
const about = r => require.ensure([], () => r(require('@/pages/about')), 'main');
const login = r => require.ensure([], () => r(require('@/pages/login')), 'main');
const manager = r => require.ensure([], () => r(require('@/pages/manager')), 'manager');
const dashboard = r => require.ensure([], () => r(require('@/pages/dashboard')), 'manager');
const blogList = r => require.ensure([], () => r(require('@/pages/blogList')), 'manager');
const setting = r => require.ensure([], () => r(require('@/pages/setting')), 'manager');
const blogCreate = r => require.ensure([], () => r(require('@/pages/blogCreate')), 'manager');
const blogEdit = r => require.ensure([], () => r(require('@/pages/blogEdit')), 'manager');

const lab = r => require.ensure([], () => r(require('@/pages/lab')), 'lab');
const Sudoku = r => require.ensure([], () => r(require('@/pages/labSubs/Sudoku')), 'lab');
const MemoryGame = r => require.ensure([], () => r(require('@/pages/labSubs/MemoryGame')), 'lab');
const VedioPlayer = r => require.ensure([], () => r(require('@/pages/labSubs/VedioPlayer')), 'lab');
const Todo = r => require.ensure([], () => r(require('@/pages/labSubs/Todo')), 'lab');

Vue.use(Router);

let routes = [{
    path: '/',
    redirect: { name: 'home' }
}, {
    path: '/home',
    name: 'home',
    component: home
}, {
    path: '/blogs',
    name: 'blogs',
    component: blogs
}, {
    path: '/blog/:blog_id',
    name: 'blog',
    component: blog
}, {
    path: '/lab',
    name: 'lab',
    component: lab
}, {
    path: '/about',
    name: 'about',
    component: about
}, {
    path: '/login',
    name: 'login',
    component: login
}, {
    path: '/manager',
    name: 'manager',
    component: manager,
    redirect: { name: 'dashboard' },
    children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: dashboard
    }, {
        path: 'blogList',
        name: 'blogList',
        component: blogList
    }, {
        path: 'blogCreate',
        name: 'blogCreate',
        component: blogCreate
    }, {
        path: 'blogEdit/:blog_id',
        name: 'blogEdit',
        component: blogEdit
    }, {
        path: 'setting',
        name: 'setting',
        component: setting
    }]
},{
    name:'lab_sudoku',
    path:'/lab_sudoku',
    component:Sudoku
},{
    name:'lab_memory_game',
    path:'/lab_memory_game',
    component:MemoryGame
},{
    name:'lab_vedioplayer',
    path:'/lab_vedioplayer',
    component:VedioPlayer
},{
    name:'lab_todo',
    path:'/lab_todo',
    component:Todo
}]


let router = new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes
})

// router.beforeEach((to, from, next) => {
//     let token = localStorage.getItem('token')
//     let is_login = !(!!(token == ""))
// })

export default router
