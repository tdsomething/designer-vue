<template>
  <div class="v-home__wrapper">
    <aside class="v-home__aside">v-home__aside</aside>
    <section class="v-home__right">
      <CodePreview></CodePreview>
    </section>
  </div>
</template>

<script setup lang="ts">
import CodePreview from './CodePreview.vue'
</script>

<style lang="scss" scoped>
.v-home__wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  .v-home__aside {
    width: 300px;
  }
  .v-home__right {
    flex: 1;
  }
}
</style>
