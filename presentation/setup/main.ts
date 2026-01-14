import { defineAppSetup } from '@slidev/types'
import { createBootstrap } from 'bootstrap-vue-next'

import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

export default defineAppSetup(({ app }) => {
  app.use(createBootstrap())
})