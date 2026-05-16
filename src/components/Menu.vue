<template>
  <!-- 1. ΜΕΝΟΥ ΓΙΑ ΥΠΟΛΟΓΙΣΤΕΣ (Φαίνεται μόνο σε μεγάλες οθόνες) -->
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo desktop-menu"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0" class="logo-item">ΟΦΙC</el-menu-item>

    <div class="right-menu">
      <el-menu-item index="2-1">Άρθρα</el-menu-item>
      <el-menu-item index="2-2">Αφιερώματα</el-menu-item>
      <el-menu-item index="2-3">Δημοσίευση</el-menu-item>
    </div>
  </el-menu>

  <!-- 2. ΜΕΝΟΥ ΓΙΑ ΚΙΝΗΤΑ (Φαίνεται μόνο σε μικρές οθόνες) -->
  <div class="mobile-menu-bar mobile-only">
    <div class="mobile-logo">ΟΦΙC</div>
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
      <el-menu-item index="2-1">Άρθρα</el-menu-item>
      <el-menu-item index="2-2">Αφιερώματα</el-menu-item>
      <el-menu-item index="2-3">Δημοσίευση</el-menu-item>
    </el-menu>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('0')
const drawer = ref(false) // Ελέγχει αν είναι ανοιχτό το μενού στο κινητό

const handleSelect = (key: string, keyPath: string[]) => {
  console.log('selected:', key, keyPath)
}

// Κλείνει το drawer όταν ο χρήστης επιλέγει κάτι στο κινητό
const handleMobileSelect = (key: string, keyPath: string[]) => {
  handleSelect(key, keyPath)
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

/* Σωστή στόχευση για το Logo αντί για το index="0" που μπορεί να μπερδέψει */
.logo-item {
  font-family: 'GFS Jackson', serif !important;
  font-size: 28px !important; 
  font-weight: bold;
}

:deep(.el-sub-menu__title) {
  font-size: 20px !important; 
}

/* --- MOBILE MENU BAR (Η μπάρα που φαίνεται μόνο στο κινητό) --- */
.mobile-menu-bar {
  display: none; /* Κρυφό από προεπιλογή (υπολογιστές) */
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
}

.burger-btn {
  font-size: 28px;
  color: #000000;
}

/* Στυλ για το κάθετο μενού μέσα στο Drawer του κινητού */
:deep(.el-drawer__body) .el-menu-item {
  font-size: 20px;
  height: 55px;
}

/* --- MEDIA QUERIES (Το μαγικό κομμάτι για την εναλλαγή οθονών) --- */

/* Για οθόνες μικρότερες από 768px (Κινητά) */
@media (max-width: 767px) {
  .desktop-menu {
    display: none !important; /* Κρύβει το μεγάλο οριζόντιο μενού */
  }
  
  .mobile-menu-bar {
    display: flex !important; /* Εμφανίζει τη μπάρα με το burger */
  }
}
</style>