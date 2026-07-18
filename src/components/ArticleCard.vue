<template>
  <!-- Πλέον εμφανίζεται ΜΟΝΟ η Πλήρης Προβολή Άρθρου απευθείας, με flat-style εμφάνιση -->
  <div class="article-full-view flat-style">
    
    <div class="full-article-header">
      <span class="article-category">{{ article.category }}</span>
      <h1 class="full-article-title">{{ article.title }}</h1>
      
      <div class="article-meta">
        <span><strong>Γράφει ο/η:</strong> {{ article.author }}</span>
        <span><strong>Ημερομηνία:</strong> {{ article.date }}</span>
      </div>
    </div>
    
    <hr class="separator" />

    <!-- Slideshow Φωτογραφιών -->
    <div v-if="article.images && article.images.length > 0" class="article-slideshow-container">
      <el-carousel 
        :interval="5000" 
        :arrow="article.images.length > 1 ? 'always' : 'never'" 
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

    <!-- Το κείμενο εμφανίζεται ΠΑΝΤΑ κατευθείαν -->
    <div class="full-article-body">
      <p class="article-text">{{ article.content }}</p>
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
  },
  hideContent: {
    type: Boolean,
    default: false
  },
  viewMode: {
    type: String,
    default: 'list'
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  background: transparent !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  padding: 15px 0 30px 0; 
  border-bottom: 2px solid #f1f5f9; 
  max-width: 1200px;
  margin: 0 auto;
  height: auto; 
  overflow: visible;
}

.article-full-view:last-child {
  border-bottom: none;
}

.full-article-title {
  font-size: 2.4rem;
  color: #1a202c;
  margin: 10px 0;
  line-height: 1.2;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
}

.article-meta {
  display: flex;
  gap: 25px;
  font-size: 0.95rem;
  color: #718096;
  margin-bottom: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
}

.separator {
  border: 0;
  border-top: 2px solid #f1f5f9;
  margin: 20px 0;
}

/* ==========================================================================
   --- ΣΤΥΛ ΓΙΑ ΤΟ SLIDESHOW ---
   ========================================================================== */
.article-slideshow-container {
  margin-bottom: 35px;
  border-radius: 16px;
  overflow: hidden;
  background-color: #f4f6f8; 
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  padding: 20px;
  max-width: 600px; 
  margin-left: auto;
  margin-right: auto;
}

.custom-carousel {
  width: 100%;
  height: auto !important;
  aspect-ratio: 1 / 1.414; 
}

.custom-carousel :deep(.el-carousel__container) {
  height: 100% !important;
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
}

.slide-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1); 
  border-radius: 6px;
}

.custom-carousel :deep(.el-carousel__arrow) {
  background-color: rgba(52, 152, 219, 0.8);
  color: white;
  width: 45px;
  height: 45px;
  font-size: 1.4rem;
}

/* ==========================================================================
   --- ΣΤΥΛ ΚΕΙΜΕΝΟΥ ---
   ========================================================================== */
.full-article-body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  max-width: 850px;
  margin: 0 auto;
  height: auto;
  clear: both; 
  margin-top: 15px; 
  margin-bottom: 20px; 
}

.article-text {
  color: #2d3748;
  line-height: 1.9;
  font-size: 1.15rem; 
  white-space: pre-line; 
  text-align: justify;
  margin: 0;
  padding-bottom: 10px; 
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ==========================================================================
   --- RESPONSIVE ΡΥΘΜΙΣΕΙΣ ---
   ========================================================================== */
@media (max-width: 768px) {
  .full-article-title { font-size: 1.8rem !important; }
  
  .article-slideshow-container { 
    margin-bottom: 25px; 
    padding: 10px; 
  }
}

h1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
}
</style>