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
      <el-menu-item index="tributes">Αγρίμι</el-menu-item>
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
      <el-menu-item index="tributes">Αγρίμι</el-menu-item>
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
@font-face {
  font-family: 'GFS Jackson';
  src: url('/font.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.el-menu-demo {
  display: flex;
  align-items: center;
  --el-menu-item-font-size: 25px; 
  --el-menu-item-height: 70px;    
  --el-menu-sub-item-height: 60px; 
}

/* 1. Εδώ ΕΞΑΝΑΓΚΑΖΟΥΜΕ το δεξί μενού να έχει ΚΑΝΟΝΙΚΗ γραμματοσειρά */
.right-menu, 
.right-menu .el-menu-item {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
}

.right-menu {
  margin-left: auto;
  display: flex;
  align-items: center;
}

/* 2. Εφαρμογή ΜΟΝΟ στο desktop λογότυπο ΟΦΙC */
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

/* 3. Εφαρμογή ΜΟΝΟ στο mobile λογότυπο ΟΦΙC */
.mobile-logo {
  font-family: 'GFS Jackson', serif !important;
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
}

/* 4. Εξαναγκασμός κανονικής γραμματοσειράς και για το μενού μέσα στο Mobile Drawer */
:deep(.el-drawer__body) .el-menu-item {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  font-size: 20px;
  height: 55px;
}

.burger-btn {
  font-size: 28px;
  color: #000000;
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