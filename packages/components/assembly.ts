import { App, Plugin } from 'vue'
import * as components from './components'

export const KdPlugin: Plugin = {
  install(app: App) {
    Object.keys(components).map((key) => components[key as keyof typeof components].install?.(app))
  }
}
