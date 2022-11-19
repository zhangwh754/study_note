const modules = import.meta.glob('../views/*.vue')

const keys = Object.keys(modules)

keys.sort((a, b) => {
  const p = Number(a.replace('../views/', '').split('-')[0])
  const n = Number(b.replace('../views/', '').split('-')[0])
  return p - n
})

export const autoRoutes = []
for (let key of keys) {
  autoRoutes.push({
    name: key,
    path: key.replace('../views/', '/').replace('.vue', '').toLowerCase(),
    component: modules[key]
  })
}
