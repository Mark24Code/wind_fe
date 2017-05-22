import Vue from 'vue';
import Router from 'vue-router';

import home from '@/pages/home';
import blogs from '@/pages/blogs';
import blog from '@/pages/blog';
import lab from '@/pages/lab';
import about from '@/pages/about';
import login from '@/pages/login';
import manager from '@/pages/manager';
import dashboard from '@/pages/dashboard';
import blogList from '@/pages/blogList';
import setting from '@/pages/setting';
import blogCreate from '@/pages/blogCreate';
import blogEdit from '@/pages/blogEdit';

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
