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