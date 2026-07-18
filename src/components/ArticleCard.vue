<template>
  <div class="article-full-view flat-style">
    
    <!-- Κύριος Τίτλος Άρθρου -->
    <div class="full-article-header">
      <h1 class="full-article-title">{{ article.title }}</h1>
      
      <div class="article-meta">
        <span><strong>Γράφει ο/η:</strong> {{ article.author }}</span>
        <span><strong>Ημερομηνία:</strong> {{ article.date }}</span>
      </div>
    </div>
    
    <hr class="separator" />

    <!-- Slideshow Φωτογραφιών Κύριου Άρθρου -->
    <div v-if="article.images && article.images.length > 0" class="article-slideshow-container">
      <el-carousel 
        :interval="5000" 
        :arrow="article.images.length > 1 ? 'always' : 'never'" 
        indicator-position="outside"
        class="custom-carousel"
      >
        <el-carousel-item v-for="(imgUrl, idx) in article.images" :key="idx">
          <div class="slide-wrapper">
            <img :src="imgUrl" class="slide-image" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- Κείμενο και Υποενότητες -->
    <div class="full-article-body">
      <p v-if="article.content" class="article-text">{{ article.content }}</p>

      <!-- Εμφάνιση Υποενοτήτων (Οπτική δομή με εσοχή) -->
      <div v-if="article.subsections && article.subsections.length > 0" class="subsections-container">
        <div v-for="(sub, subIdx) in article.subsections" :key="subIdx" class="subsection-block">
          
          <!-- Τίτλος Υποενότητας (Σαν τον κανονικό τίτλο αλλά μικρότερος) -->
          <h2 class="subsection-title">{{ sub.title }}</h2>
          
          <!-- Meta Υποενότητας -->
          <div class="article-meta" v-if="sub.date || sub.author">
            <span v-if="sub.author"><strong>Γράφει ο/η:</strong> {{ sub.author }}</span>
            <span v-if="sub.date"><strong>Ημερομηνία:</strong> {{ sub.date }}</span>
          </div>

          <!-- Slideshow Υποενότητας -->
          <div v-if="sub.images && sub.images.length > 0" class="article-slideshow-container subsection-gallery">
            <el-carousel 
              :interval="5000" 
              :arrow="sub.images.length > 1 ? 'always' : 'never'" 
              indicator-position="outside"
              class="custom-carousel"
            >
              <el-carousel-item v-for="(imgUrl, imgIdx) in sub.images" :key="imgIdx">
                <div class="slide-wrapper">
                  <img :src="imgUrl" class="slide-image" />
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          
          <p v-if="sub.content" class="article-text">{{ sub.content }}</p>
        </div>
      </div>
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
  padding: 15px 0 40px 0; 
  border-bottom: 2px solid #f1f5f9; 
  max-width: 1200px;
  margin: 0 auto;
}

.article-full-view:last-child {
  border-bottom: none;
}

.full-article-title {
  font-size: 2.4rem;
  color: #1a202c;
  margin: 10px 0;
  line-height: 1.3;
}

.article-meta {
  display: flex;
  gap: 25px;
  font-size: 0.95rem;
  color: #718096;
  margin-bottom: 15px;
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

.subsection-gallery {
  margin-top: 25px;
  margin-bottom: 25px;
}

.custom-carousel {
  width: 100%;
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
   --- ΣΤΥΛ ΥΠΟΕΝΟΤΗΤΩΝ (ΜΕ ΕΣΩΤΕΡΙΚΗ ΕΣΟΧΗ) ---
   ========================================================================== */
.full-article-body {
  max-width: 850px;
  margin: 0 auto;
  margin-top: 15px; 
}

.article-text {
  color: #2d3748;
  line-height: 1.9;
  font-size: 1.15rem; 
  white-space: pre-line; 
  text-align: justify;
  margin: 0;
  padding-bottom: 20px; 
}

.subsections-container {
  margin-top: 40px;
}

.subsection-block {
  margin-bottom: 45px;
  padding-left: 30px; /* Σπρώχνει όλη την υποενότητα πιο μέσα για να φαίνεται η ιεραρχία */
}

.subsection-title {
  font-size: 1.8rem;
  color: #1a202c;
  margin: 0 0 10px 0;
  font-weight: 600;
  line-height: 1.3;
}

/* ==========================================================================
   --- RESPONSIVE ΡΥΘΜΙΣΕΙΣ ---
   ========================================================================== */
@media (max-width: 768px) {
  .full-article-title { font-size: 1.8rem !important; }
  .subsection-title { font-size: 1.4rem !important; }
  .subsection-block { padding-left: 15px; } /* Μικραίνει η εσοχή στις μικρές οθόνες κινητών */
  
  .article-slideshow-container { 
    margin-bottom: 25px; 
    padding: 10px; 
  }
}

h1, h2, span, p {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
}
</style>