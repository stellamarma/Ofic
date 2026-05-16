<template>
  <el-config-provider>
    <!-- Το κεντρικό μενού εμφανίζεται ΜΟΝΟ ΜΙΑ ΦΟΡΑ στην κορυφή της σελίδας -->
    <Menu @menu-change="changeView" />
    
    <div class="space-between">
      
      <!-- ΑΡΧΙΚΗ ΣΕΛΙΔΑ: Εμφανίζεται μόνο αν το currentView είναι 'home' -->
      <div v-if="currentView === 'home'" class="page-container">
        <Title />
      </div>

      <!-- ΣΕΛΙΔΑ ΑΡΘΡΩΝ: Εμφανίζεται μόνο αν το currentView είναι 'articles' -->
      <div v-if="currentView === 'articles'" class="page-container articles-container">
        
        <!-- ΚΑΤΑΣΤΑΣΗ 1: Αν ΔΕΝ έχει επιλεγεί άρθρο, δείξε τη λίστα με τα κουτάκια -->
        <div v-if="!selectedArticle">
          <h1 class="greek-title">Όλα τα Άρθρα</h1>
          <ArticleCard 
            v-for="item in myArticles" 
            :key="item.id" 
            :article="item" 
            @select="selectedArticle = item" 
          />
        </div>

        <!-- ΚΑΤΑΣΤΑΣΗ 2: Αν ΥΠΑΡΧΕΙ επιλεγμένο άρθρο, δείξε ΜΟΝΟ αυτό σε Full View -->
        <div v-else>
          <ArticleCard 
            :article="selectedArticle" 
            :isFullView="true" 
            @back="selectedArticle = null" 
          />
        </div>

      </div>

      <!-- ΣΕΛΙΔΑ ΑΦΙΕΡΩΜΑΤΩΝ: Εμφανίζεται μόνο αν το currentView είναι 'tributes' -->
      <div v-if="currentView === 'tributes'" class="page-container">
        <h1 class="greek-title">Αφιερώματα</h1>
        <p class="placeholder-text">Το περιεχόμενο για τα αφιερώματα θα προστεθεί σύντομα...</p>
      </div>

      <!-- ΣΕΛΙΔΑ ΔΗΜΟΣΙΕΥΣΗΣ: Εμφανίζεται μόνο αν το currentView είναι 'publish' -->
      <div v-if="currentView === 'publish'" class="page-container">
        <h1 class="greek-title">Δημοσίευση</h1>
        <p class="placeholder-text">Φόρμα υποβολής νέου άρθρου...</p>
      </div>

      <!-- ΣΕΛΙΔΑ ΘΕΑΤΡΙΚΩΝ (για το κινητό): Εμφανίζεται αν το currentView είναι 'theater' -->
      <div v-if="currentView === 'theater'" class="page-container">
        <h1 class="greek-title">Θεατρικά</h1>
        <p class="placeholder-text">Το περιεχόμενο για τα θεατρικά...</p>
      </div>

    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menu from "./components/Menu.vue"
import Title from "./components/Home.vue"
import ArticleCard from "./components/ArticleCard.vue"
import { ElConfigProvider } from "element-plus"

// ΕΔΩ ΚΑΝΟΥΜΕ IMPORT ΤΑ ΑΡΘΡΑ ΜΑΣ
import { articlesData } from './data/articles' // Σιγουρέψου για το σωστό path του αρχείου

const currentView = ref('home')
const selectedArticle = ref<any>(null)

const changeView = (viewName: string) => {
  currentView.value = viewName
  selectedArticle.value = null // Μηδενίζουμε το επιλεγμένο άρθρο όταν αλλάζουμε σελίδα
}

// Περνάμε τα δεδομένα του αρχείου στη reactive μεταβλητή της Vue
const myArticles = ref(articlesData)
</script>

<style scoped>
.greek-title {
  font-family: 'GFS Jackson', serif;
  font-size: 2.5rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: #2c3e50;
  text-align: left;
}

.space-between {
  margin-top: 24px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}

.page-container {
  /* Smooth εμφάνιση κάθε φορά που αλλάζει η σελίδα */
  animation: fadeIn 0.4s ease-out;
}

.placeholder-text {
  color: #7f8c8d;
  font-size: 1.1rem;
  font-style: italic;
  text-align: left;
}

/* Εφέ Animation για την εναλλαγή των σελίδων */
@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(8px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}
</style>