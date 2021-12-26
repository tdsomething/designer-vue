import { App, Plugin } from 'vue'
import Input from './src/index.vue'

Input.install = (app: App) => {
  app.component(Input.name, Input)
}

export default Input as typeof Input & Plugin
