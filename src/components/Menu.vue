<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo desktop-menu"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="home" class="logo-item">ΟΦΙC</el-menu-item>

    <div class="right-menu">
      <el-menu-item index="articles">Άρθρα</el-menu-item>
      <el-menu-item index="tributes">Αφιερώματα</el-menu-item>
      <el-menu-item index="theater">Θεατρικά</el-menu-item> 
    </div>
  </el-menu>

  <div class="mobile-menu-bar mobile-only">
    <div class="mobile-logo" @click="handleSelect('home')">ΟΦΙC</div>
    <el-button class="burger-btn" @click="drawer = true" link>
      <span class="burger-icon">☰</span>
    </el-button>
  </div>

  <el-drawer
    v-model="drawer"
    title="Πλοήγηση"
    direction="rtl"
    size="75%"
    custom-class="mobile-drawer"
  >
    <el-menu
      :default-active="activeIndex"
      mode="vertical"
      @select="handleMobileSelect"
    >
      <el-menu-item index="articles">Άρθρα</el-menu-item>
      <el-menu-item index="tributes">Αφιερώματα</el-menu-item>
      <el-menu-item index="theater">Θεατρικά</el-menu-item>
    </el-menu>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('home')
const drawer = ref(false)

const emit = defineEmits(['menu-change'])

const handleSelect = (key: string) => {
  activeIndex.value = key
  emit('menu-change', key) 
}

const handleMobileSelect = (key: string) => {
  handleSelect(key)
  drawer.value = false 
}
</script>

<style scoped>
.el-menu-demo {
  display: flex;
  align-items: center;
  --el-menu-item-font-size: 25px; 
  --el-menu-item-height: 70px;    
  --el-menu-sub-item-height: 60px; 
}
.right-menu {
  margin-left: auto;
  display: flex;
  align-items: center;
}
.logo-item {
  font-family: 'GFS Jackson', serif !important;
  font-size: 28px !important; 
  font-weight: bold;
  cursor: pointer;
}
:deep(.el-sub-menu__title) {
  font-size: 20px !important; 
}
.mobile-menu-bar {
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  border-bottom: 1px solid var(--el-border-color-light);
  background-color: #ffffff;
}
.mobile-logo {
  font-family: 'GFS Jackson', serif;
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
}
.burger-btn {
  font-size: 28px;
  color: #000000;
}
:deep(.el-drawer__body) .el-menu-item {
  font-size: 20px;
  height: 55px;
}
@media (max-width: 767px) {
  .desktop-menu {
    display: none !important;
  }
  .mobile-menu-bar {
    display: flex !important;
  }
}
</style>