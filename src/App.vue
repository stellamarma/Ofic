<template>
  <el-config-provider>
    <Menu @menu-change="changeView" />
    
    <div :class="['space-between', { 'theater-wide': currentView === 'theater' }]">
      
      <!-- ΑΡΧΙΚΗ ΣΕΛΙΔΑ -->
      <div v-if="currentView === 'home'" class="page-container">
        <Title />
      </div>

      <!-- ΜΕΝΟΥ: ΑΡΘΡΑ -->
      <div v-if="currentView === 'articles'" class="page-container articles-container">
        
        <!-- Λίστα Όλων των Άρθρων -->
        <div v-if="!selectedArticle">
          <h1 class="greek-title">Όλα τα Άρθρα</h1>
          <ArticleCard 
            v-for="item in myArticles" 
            :key="item.id" 
            :article="item" 
            @select="selectedArticle = item" 
          />
        </div>

        <!-- Πλήρης Προβολή Επιλεγμένου Άρθρου -->
        <div v-else-if="selectedArticle">
          <ArticleCard 
            :article="selectedArticle" 
            :isFullView="true" 
            :hideContent="false" 
            @back="selectedArticle = null" 
          />
        </div>

      </div>

      <!-- ΑΦΙΕΡΩΜΑΤΑ (ΑΓΡΙΜΙ) -->
      <div v-if="currentView === 'tributes'" class="page-container">
        <h1 class="greek-title">Αγρίμι</h1>
        <Agrini @redirect-to-theater="handleRedirect" />
      </div>

      <!-- ΘΕΑΤΡΟ -->
      <div v-if="currentView === 'theater'" class="page-container">
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
import TheatricalShow from './components/TheatricalShow.vue'
import Agrini from './components/Agrini.vue'

import { articlesData } from './data/articles'
import { theatricoData } from './data/theatrico'

const currentView = ref('home')
const selectedArticle = ref<any>(null)

const changeView = (viewName: string) => {
  currentView.value = viewName
  selectedArticle.value = null 
}

const handleRedirect = () => {
  currentView.value = 'theater'
  selectedArticle.value = null
}

const myArticles = ref(articlesData)
const myTheatrics = ref(theatricoData)
</script>

<style scoped>
.logo-item {
  font-family: 'GFS Jackson', serif !important;
  font-size: 32px !important; 
  font-weight: bold;
  cursor: pointer;
}

.mobile-logo {
  font-family: 'GFS Jackson', serif !important;
  font-size: 30px !important;
  font-weight: bold;
  cursor: pointer;
}

.el-menu-item, :deep(.el-sub-menu__title) {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
}

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
  transition: max-width 0.3s ease; 
}

.space-between.theater-wide {
  max-width: 1200px;
}

.page-container {
  animation: fadeIn 0.4s ease-out;
}

.placeholder-text {
  color: #7f8c8d;
  font-size: 1.1rem;
  font-style: italic;
  text-align: left;
}

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

h1, p, h2 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
}
</style>