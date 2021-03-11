export default ({ store, app: { router } }) => {
  router.beforeEach((to, from, next) => {
    // Force trailing slash on URLs
    if (to.path && to.path.substring(to.path.length - 1) !== '/') {
      next({ path: to.path + '/' })
    } else {
      next()
    }
  })
}
