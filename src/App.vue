<template>
  <el-config-provider>
    <Menu @menu-change="changeView" />
    
    <div :class="['space-between', { 'theater-wide': currentView === 'theater' }]">
      
      <div v-if="currentView === 'home'" class="page-container">
        <Title />
        
        <div class="home-agrini-section">
          <h2 class="section-title">Αγρίμι</h2>
          <Agrini @redirect-to-theater="handleRedirect" />
        </div>
        
        <h2 class="section-title">Πρόσφατα Άρθρα</h2>
        
        <div class="home-full-articles-list">
          <ArticleCard 
            v-for="item in myArticles" 
            :key="item.id" 
            :article="item"
            :isFullView="true"
            viewMode="home"
          />
        </div>
      </div>

      <div v-if="currentView === 'articles'" class="page-container articles-container">
        
        <div v-if="!selectedArticle">
          <h1 class="greek-title">Όλα τα Άρθρα</h1>
          <ArticleCard 
            v-for="item in myArticles" 
            :key="item.id" 
            :article="item" 
            viewMode="list"
            @select="selectedArticle = item" 
          />
        </div>

        <div v-else-if="selectedArticle">
          <ArticleCard 
            :article="selectedArticle" 
            :isFullView="true" 
            @back="selectedArticle = null" 
          />
        </div>

      </div>

      <div v-if="currentView === 'tributes'" class="page-container">
        <h1 class="greek-title">Αγρίμι</h1>
        <Agrini @redirect-to-theater="handleRedirect" />
      </div>

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

// Εισαγωγή του νέου component Agrini
import Agrini from './components/Agrini.vue'

import { articlesData } from './data/articles'
import { theatricoData } from './data/theatrico'

const currentView = ref('home')
const selectedArticle = ref<any>(null)

const changeView = (viewName: string) => {
  currentView.value = viewName
  selectedArticle.value = null 
}

// ─── ΝΕΑ ΣΥΝΑΡΤΗΣΗ Η ΑΠΟΙΑ ΕΛΕΓΧΕΙ ΤΗΝ ΑΝΑΚΑΤΕΥΘΥΝΣΗ ───
const handleRedirect = () => {
  currentView.value = 'theater'
  selectedArticle.value = null
}

const myArticles = ref(articlesData)
const myTheatrics = ref(theatricoData)
</script>

<style scoped>
/* Το desktop ΟΦΙC παίρνει τη βυζαντινή γραμματοσειρά */
.logo-item {
  font-family: 'GFS Jackson', serif !important;
  font-size: 32px !important; 
  font-weight: bold;
  cursor: pointer;
}

/* Το mobile ΟΦΙC παίρνει τη βυζαντινή γραμματοσειρά */
.mobile-logo {
  font-family: 'GFS Jackson', serif !important;
  font-size: 30px !important;
  font-weight: bold;
  cursor: pointer;
}

/* Τα υπόλοιπα στοιχεία του μενού παραμένουν με την κανονική γραμματοσειρά */
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

.section-title {
  font-family: 'GFS Jackson', serif;
  font-size: 1.8rem;
  color: #2c3e50;
  text-align: left;
  margin-top: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 8px;
}

/* Κενό ανάμεσα στα ολόκληρα άρθρα της αρχικής σελίδας */
.home-full-articles-list > :deep(.article-full-view) {
  margin-bottom: 40px;
}

/* Περιθώριο για το Agrini στην αρχική σελίδα */
.home-agrini-section {
  margin-top: 20px;
  margin-bottom: 40px;
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