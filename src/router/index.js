import Vue from 'vue'
import Router from 'vue-router'

import home from 'src/components/home'
import blogs from 'src/components/blogs'
import blog from 'src/components/blog'
import lab from 'src/components/lab'
import about from 'src/components/about'
import login from 'src/components/login'
import manager from 'src/components/manager'
import dashboard from 'src/components/dashboard'
import blogList from 'src/components/blogList'
import setting from 'src/components/setting'
import blogCreate from 'src/components/blogCreate'
import blogEdit from 'src/components/blogEdit'

Vue.use(Router)

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
