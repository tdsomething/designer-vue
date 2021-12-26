<template>
  <router-view></router-view>
  <pre class="language-html">
    <code class="language-html">
      {{ sourceCode }}
    </code>
  </pre>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import Prism from 'prismjs'
import '@/assets/styles/prism.css'

const routeName: unknown = useRoute().name
const sourceCode = ref('')
onMounted(async () => {
  const code = (
    await import(
      /* @vite-ignore */ `../../packages/components/${routeName}/docs/ExampleCmp.vue?raw`
    )
  ).default
  sourceCode.value = code
  await nextTick()
  Prism.highlightAll()
})
</script>

<style lang="scss" scoped>
.language-html {
  margin: 0;
  padding: 0 15px;
}
</style>
