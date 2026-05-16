<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <!-- Left -->
    <el-menu-item index="0">
      ΟΦΙC
    </el-menu-item>

    <!-- Right group -->
    <div class="right-menu">
      <el-menu-item index="2-1">Άρθρα</el-menu-item>
      <el-menu-item index="2-2">Αφιερώματα</el-menu-item>
      <el-menu-item index="2-3">Δημοσίευση</el-menu-item>

    </div>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('0')

const handleSelect = (key: string, keyPath: string[]) => {
  console.log('selected:', key, keyPath)
}
</script>

<style scoped>
.el-menu-demo {
  display: flex;
  align-items: center;
  
  /* 1. Αλλαγή μεγέθους μέσω Element Plus CSS Variables */
  --el-menu-item-font-size: 25px; /* Μεγαλώνει τη γραμματοσειρά (προεπιλογή: 14px) */
  --el-menu-item-height: 70px;    /* Μεγαλώνει το ύψος της μπάρας αν θέλεις (προεπιλογή: 56px) */
  --el-menu-sub-item-height: 60px; /* Ύψος για τα sub-items μέσα στο Workspace */
}

/* Σπρώχνει το group δεξιά */
.right-menu {
  margin-left: auto;
  display: flex;
  align-items: center;
  /* Αφαιρούμε το gap αν χαλάει τη στοίχιση του μενού, 
     καθώς το el-menu διαχειρίζεται μόνο του τα margins */
}

/* 2. Αν θέλεις συγκεκριμένα το "ΟΦΙC" να είναι ακόμα πιο μεγάλο ή με διαφορετική γραμματοσειρά */
.el-menu-item[index="0"] {
  font-family: 'GFS Jackson', serif;
  font-size: 28px; /* Ξεχωριστό μέγεθος μόνο για το Logo */
  font-weight: bold;
}

/* 3. Deep selector για να σιγουρέψουμε ότι το μέγεθος θα εφαρμοστεί 
      και στο "Workspace" (που είναι sub-menu) */
:deep(.el-sub-menu__title) {
  font-size: 20px !important; /* Ίδιο μέγεθος με τα υπόλοιπα menu items */
}

/* Η κλάση σου για το center (αν τη χρησιμοποιείς κάπου αλλού) */
.gfs-big-center {
  font-family: 'GFS Jackson', serif;
  text-align: center;
  font-size: 48px;
  display: block;
  color: #000000;
  font-weight: bold;
}
</style>