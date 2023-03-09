export const projectRoutes = {
    main: {path: '/'},
    login: {path: '/login',},
    account:{path:  '/account'},
    posts: {path: '/posts', dynamicPath: '/posts/:id'},
    notFound: {path: '*'}
}