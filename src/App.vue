<template>
  <el-config-provider>
    <Menu @menu-change="changeView" />
    
    <div :class="['space-between', { 'theater-wide': currentView === 'theater' }]">
      
      <div v-if="currentView === 'home'" class="page-container">
        <Title />
      </div>

      <div v-if="currentView === 'articles'" class="page-container articles-container">
        
        <div v-if="!selectedArticle">
          <h1 class="greek-title">Όλα τα Άρθρα</h1>
          <ArticleCard 
            v-for="item in myArticles" 
            :key="item.id" 
            :article="item" 
            @select="selectedArticle = item" 
          />
        </div>

        <div v-else>
          <ArticleCard 
            :article="selectedArticle" 
            :isFullView="true" 
            @back="selectedArticle = null" 
          />
        </div>

      </div>

      <div v-if="currentView === 'tributes'" class="page-container">
        <h1 class="greek-title">Αφιερώματα</h1>
        <p class="placeholder-text">Το περιεχόμενο για τα αφιερώματα θα προστεθεί σύντομα...</p>
      </div>

      <div v-if="currentView === 'theater'" class="page-container">
        <!-- Προσθήκη v-if για να σιγουρέψουμε ότι το myTheatrics[0] δεν είναι undefined -->
        <TheatricalShow v-if="myTheatrics[0]" :show="myTheatrics[0]" />
        <p v-else class="placeholder-text">Δεν βρέθηκαν θεατρικές παραστάσεις...</p>
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

// 1. Σωστό import του νέου component
import TheatricalShow from './components/TheatricalShow.vue'

// 2. ΕΔΩ ΚΑΝΟΥΜΕ IMPORT ΤΑ ΔΕΔΟΜΕΝΑ ΜΑΣ ΑΠΟ ΤΑ ΞΕΧΩΡΙΣΤΑ ΑΡΧΕΙΑ
import { articlesData } from './data/articles'
import { theatricoData } from './data/theatrico' // Εισαγωγή από το νέο σου αρχείο

const currentView = ref('home')
const selectedArticle = ref<any>(null)

const changeView = (viewName: string) => {
  currentView.value = viewName
  selectedArticle.value = null // Μηδενίζουμε το επιλεγμένο άρθρο όταν αλλάζουμε σελίδα
}

// Περνάμε τα δεδομένα των αρχείων στις reactive μεταβλητές της Vue
const myArticles = ref(articlesData)
const myTheatrics = ref(theatricoData)
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
  max-width: 800px; /* Βασικό πλάτος για την αρχική και τα άρθρα */
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  transition: max-width 0.3s ease; /* Ομαλή αλλαγή μεγέθους όταν αλλάζει η σελίδα */
}

/* Όταν βλέπουμε τα θεατρικά, μεγαλώνουμε το container για να απλώσουν σωστά οι εικόνες A1 */
.space-between.theater-wide {
  max-width: 1200px;
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