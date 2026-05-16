<template>
  <el-config-provider>
    <Menu />
    <div class="space-between">
      <Title />
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import Menu from "./components/Menu.vue"
import Title from "./components/Home.vue"
import { ElConfigProvider } from "element-plus"
</script>
<style scoped>
.greek-title {
  font-family: 'GFS Jackson', serif;
  font-size: 2.5rem;
}
.space-between {
  margin-top: 24px; /* Ρυθμίζεις εδώ πόσο μεγάλο θέλεις το κενό */
}
</style>