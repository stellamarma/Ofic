<template>
  <!-- 1. ΜΕΝΟΥ ΓΙΑ ΥΠΟΛΟΓΙΣΤΕΣ (Φαίνεται μόνο σε μεγάλες οθόνες) -->
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
      <el-menu-item index="publish">Θεατρικά</el-menu-item>
    </div>
  </el-menu>

  <!-- 2. ΜΕΝΟΥ ΓΙΑ ΚΙΝΗΤΑ (Φαίνεται μόνο σε μικρές οθόνες) -->
  <div class="mobile-menu-bar mobile-only">
    <div class="mobile-logo" @click="handleSelect('home')">ΟΦΙC</div>
    <!-- Κουμπί Burger για άνοιγμα του μενού -->
    <el-button class="burger-btn" @click="drawer = true" link>
      <span class="burger-icon">☰</span>
    </el-button>
  </div>

  <!-- Το πλαϊνό παράθυρο (Drawer) που ανοίγει στο κινητό -->
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

// Ορίζουμε το emit για να στέλνουμε την επιλογή στο App.vue
const emit = defineEmits(['menu-change'])

const handleSelect = (key: string) => {
  activeIndex.value = key
  emit('menu-change', key) // Ενημερώνει το App.vue ποια σελίδα να δείξει
}

const handleMobileSelect = (key: string) => {
  handleSelect(key)
  drawer.value = false 
}
</script>

<style scoped>
/* --- ΚΟΙΝΑ STYLES & DESKTOP --- */
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

/* --- MOBILE MENU BAR (Η μπάρα για το κινητό) --- */
.mobile-menu-bar {
  display: none; /* Κρυφό σε desktop */
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

/* Στυλ για το μενού μέσα στο Drawer του κινητού */
:deep(.el-drawer__body) .el-menu-item {
  font-size: 20px;
  height: 55px;
}

/* --- MEDIA QUERIES για την εναλλαγή οθονών --- */
@media (max-width: 767px) {
  .desktop-menu {
    display: none !important; /* Κρύβει το μεγάλο μενού */
  }
  
  .mobile-menu-bar {
    display: flex !important; /* Εμφανίζει το burger μενού */
  }
}
</style>