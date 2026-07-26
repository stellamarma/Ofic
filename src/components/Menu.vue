<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo desktop-menu"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="home" class="logo-item">
      <span>ΟΦΙC</span>

      <!-- Container για το κείμενο "Visitors" και τον μετρητή δίπλα-δίπλα -->
      <div class="counter-container">
        <span class="visitors-text">Visitors:</span>
        <a href="https://www.counter12.com" target="_blank" rel="noopener" @click.stop>
          <img src="https://www.counter12.com/img-1Y4w19wWW4acBA9C-15.gif" border="0" alt="web counter free" />
        </a>
      </div>
    </el-menu-item>

    <div class="right-menu">
      <el-menu-item index="articles">Ιατρικά</el-menu-item>
      <el-menu-item index="tributes">Φιλοσοφικά</el-menu-item>
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
      <el-menu-item index="articles">Ιατρικά</el-menu-item>
      <el-menu-item index="tributes">Φιλοσοφικά</el-menu-item>
      <el-menu-item index="theater">Θεατρικά</el-menu-item>
    </el-menu>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

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

// Δυναμική φόρτωση του script για να αποφευχθεί το error στο Vue
onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://www.counter12.com/ad.js?id=1Y4w19wWW4acBA9C'
  script.async = true
  document.body.appendChild(script)
})
</script>

<style scoped>
@font-face {
  font-family: 'GFS Jackson';
  src: url('/font.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

/* --- ΑΛΛΑΓΗ ΧΡΩΜΑΤΟΣ ΓΙΑ ELEMENT PLUS --- */
.el-menu-demo {
  display: flex;
  align-items: center;
  --el-menu-item-font-size: 25px; 
  --el-menu-item-height: 70px;    
  --el-menu-sub-item-height: 60px; 
  background-color: var(--brand-color) !important;
}

.el-menu-demo .el-menu-item {
  background-color: transparent !important;
}

.mobile-menu-bar {
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  border-bottom: 1px solid var(--el-border-color-light);
  background-color: var(--brand-color) !important;
}

:deep(.el-drawer) {
  background-color: var(--brand-color) !important;
}
:deep(.el-drawer) .el-menu {
  background-color: transparent !important;
}
:deep(.el-drawer) .el-menu-item {
  background-color: transparent !important;
}

/* Δεξί μενού με κανονική γραμματοσειρά */
.right-menu, 
.right-menu .el-menu-item {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
}

.right-menu {
  margin-left: auto;
  display: flex;
  align-items: center;
}

/* Desktop λογότυπο ΟΦΙC */
.logo-item {
  font-family: 'GFS Jackson', serif !important;
  font-size: 28px !important; 
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
}

/* Container για το κείμενο Visitors & τον μετρητή */
.counter-container {
  display: inline-flex;
  align-items: center; /* Ακριβής ευθυγράμμιση στον οριζόντιο άξονα */
  gap: 6px; /* Απόσταση ανάμεσα στο 'Visitors:' και στην εικόνα */
  margin-left: 15px; /* Απόσταση από το 'ΟΦΙC' */
}

/* Στυλ για τη λέξη Visitors */
.visitors-text {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  font-size: 14px;
  font-weight: normal;
  color: #333333;
  line-height: 1;
}

/* Ευθυγράμμιση της εικόνας του μετρητή */
.counter-container img {
  display: block;
  vertical-align: middle;
}

:deep(.el-sub-menu__title) {
  font-size: 20px !important; 
}

/* Mobile λογότυπο ΟΦΙC */
.mobile-logo {
  font-family: 'GFS Jackson', serif !important;
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
}

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