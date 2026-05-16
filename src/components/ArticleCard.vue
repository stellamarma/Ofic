<template>
  <div v-if="isFullView" class="article-full-view">
    
    <el-button class="back-btn" @click="$emit('back')" link>
      ← Επιστροφή στα άρθρα
    </el-button>

    <div class="full-article-header">
      <span class="article-category">{{ article.category }}</span>
      <h1 class="full-article-title">{{ article.title }}</h1>
      
      <div class="article-meta">
        <span><strong>Γράφει ο/η:</strong> {{ article.author }}</span>
        <span><strong>Ημερομηνία:</strong> {{ article.date }}</span>
      </div>
    </div>
    
    <hr class="separator" />

    <div v-if="article.images && article.images.length > 0" class="article-slideshow-container">
      <el-carousel 
        :interval="5000" 
        arrow="always" 
        height="850px" 
        indicator-position="outside"
        class="custom-carousel"
      >
        <el-carousel-item v-for="(imgUrl, index) in article.images" :key="index">
          <div class="slide-wrapper">
            <img :src="imgUrl" class="slide-image" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="full-article-body">
      <p class="article-text">{{ article.content }}</p>
    </div>
  </div>

  <div 
    v-else
    class="article-card" 
    @click="$emit('select')"
  >
    <div class="article-header">
      <span class="article-category">{{ article.category }}</span>
      <h2 class="article-title">{{ article.title }}</h2>
    </div>
    <div class="article-footer">
      <small>Διαβάστε το άρθρο →</small>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  article: {
    type: Object,
    required: true
  },
  isFullView: {
    type: Boolean,
    default: false
  }
})

defineEmits(['select', 'back'])
</script>

<style scoped>
/* ==========================================================================
   --- ΓΕΝΙΚΟ ΣΤΥΛ ΠΛΗΡΟΥΣ ΠΡΟΒΟΛΗΣ ---
   ========================================================================== */
.article-full-view {
  text-align: left;
  background: #ffffff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.4s ease-out;
  max-width: 1200px; /* Ανοίξαμε το πλάτος για να υποστηρίξει το μεγάλο ύψος */
  margin: 0 auto;
  height: auto; 
  overflow: visible;
}

.back-btn {
  font-size: 1.1rem !important;
  color: #3498db !important;
  margin-bottom: 20px;
}

.full-article-title {
  font-size: 2.4rem;
  color: #1a202c;
  margin: 10px 0;
  line-height: 1.2;
}

.article-meta {
  display: flex;
  gap: 25px;
  font-size: 0.95rem;
  color: #718096;
  margin-bottom: 20px;
}

.separator {
  border: 0;
  border-top: 2px solid #f1f5f9;
  margin: 30px 0;
}

/* ==========================================================================
   --- ΣΤΥΛ ΓΙΑ ΤΟ SLIDESHOW (Αναλογίες Α1 Έντονα Κάθετο) ---
   ========================================================================== */
.article-slideshow-container {
  margin-bottom: 70px; 
  border-radius: 16px;
  overflow: hidden;
  background-color: #f4f6f8; 
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  padding: 30px 0; /* Περισσότερος αέρας για να ξεχωρίζει το έγγραφο */
}

.slide-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-image {
  max-width: 95%; 
  max-height: 100%;
  object-fit: contain; /* Εμφανίζει 100% ολόκληρη την Α1 σελίδα χωρίς καμία περικοπή */
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1); /* Πιο βαθιά σκιά για μεγάλο έγγραφο */
  border-radius: 6px;
}

/* Βέλη Element Plus */
.custom-carousel :deep(.el-carousel__arrow) {
  background-color: rgba(52, 152, 219, 0.8);
  color: white;
  width: 55px;
  height: 55px;
  font-size: 1.6rem;
}
.custom-carousel :deep(.el-carousel__arrow:hover) {
  background-color: rgba(52, 152, 219, 1);
}

/* ==========================================================================
   --- ΣΤΥΛ ΚΕΙΜΕΝΟΥ ---
   ========================================================================== */
.full-article-body {
  font-family: 'Georgia', serif;
  max-width: 850px;
  margin: 0 auto;
  height: auto;
  clear: both; 
  margin-top: 20px;
  margin-bottom: 60px;
}

.article-text {
  color: #2d3748;
  line-height: 1.9;
  font-size: 1.2rem;
  white-space: pre-line; 
  text-align: justify;
  margin: 0;
  padding-bottom: 50px; 
}

/* ==========================================================================
   --- ΣΤΥΛ ΛΙΣΤΑΣ (Κουτάκια) ---
   ========================================================================== */
.article-card {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin: 18px 0;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}
.article-card:hover {
  transform: translateY(-4px);
  border-color: #3498db;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.article-category {
  display: inline-block;
  background-color: #ebf8ff;
  color: #2b6cb0;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Ρυθμίσεις για Κινητά */
@media (max-width: 768px) {
  .full-article-title { font-size: 1.8rem; }
  .custom-carousel { height: 500px !important; } /* Προσαρμογή ύψους για φορητές συσκευές */
  .article-slideshow-container { margin-bottom: 40px; }
}
</style>