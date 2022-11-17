const modules = import.meta.glob('../views/*.vue')

export const autoRoutes = []
for (let key in modules) {
  autoRoutes.push({
    name: key,
    path: key.replace('../views/', '/').replace('.vue', '').toLowerCase(),
    component: modules[key]
  })
}

console.log(autoRoutes)
