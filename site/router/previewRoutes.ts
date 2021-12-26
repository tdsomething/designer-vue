import { cmpDescription } from '@/previewDescription'

export const preViewRoutes = cmpDescription.map((cmp) => {
  return {
    name: cmp.dirName,
    path: `${cmp.dirName}`,
    component: () => import(`../../packages/components/${cmp.dirName}/docs/basic.doc.md`)
  }
})
