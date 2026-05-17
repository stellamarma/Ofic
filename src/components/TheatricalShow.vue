<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

export interface Theatrico {
  id: number;
  title: string;
  category: string;
  images?: string[];
  author: string;
}

const props = defineProps<{
  show: Theatrico
}>();

// Κρατάμε το index της τρέχουσας εικόνας
const currentImgIndex = ref(0);

// Ξεκινάμε με true για ασφάλεια και θα το ελέγξουμε μόλις γίνει Mount στην οθόνη
const isMobile = ref(true);

const handleResize = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth <= 768;
  }
};

onMounted(() => {
  handleResize(); // Έλεγχος αμέσως μόλις φορτώσει η σελίδα
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize);
  }
});

const totalImages = computed(() => props.show?.images?.length || 0);
const allImages = computed(() => props.show?.images || []);

// Η πρώτη και η τελευταία σελίδα είναι πάντα μονές
const isSingleView = computed(() => {
  if (currentImgIndex.value === 0) return true;
  if (currentImgIndex.value === totalImages.value - 1) return true;
  return false;
});

// Έλεγχος αν το κουμπί "Επόμενο" πρέπει να είναι κλειδωμένο
const isNextDisabled = computed(() => {
  if (totalImages.value === 0) return true;
  
  if (isMobile.value) {
    return currentImgIndex.value === totalImages.value - 1;
  } else {
    return currentImgIndex.value === totalImages.value - 1 || (!isSingleView.value && currentImgIndex.value + 1 === totalImages.value - 1);
  }
});

// Συναρτήσεις πλοήγησης
const nextPage = () => {
  if (currentImgIndex.value < totalImages.value - 1) {
    if (!isMobile.value && !isSingleView.value && currentImgIndex.value + 2 < totalImages.value) {
      currentImgIndex.value += 2;
    } else {
      currentImgIndex.value++;
    }
  }
};

const prevPage = () => {
  if (currentImgIndex.value > 0) {
    if (!isMobile.value && currentImgIndex.value > 1 && currentImgIndex.value !== totalImages.value - 1) {
      currentImgIndex.value -= 2;
    } else {
      currentImgIndex.value--;
    }
  }
};
</script>

<template>
  <div class="theatrico-container">
    <template v-if="show">
      <header class="show-header">
        <h1>{{ show.title }}</h1>
        <p class="meta">
          <strong>Κατηγορία:</strong> {{ show.category }} | 
          <strong>Συγγραφέας:</strong> {{ show.author }}
        </p>
      </header>

      <div v-if="totalImages > 0" class="slider-wrapper">
        
        <button 
          @click="prevPage" 
          class="nav-btn prev-btn" 
          :disabled="currentImgIndex === 0"
        >
          ❮
        </button>

        <div class="viewer-container">
          <div class="page-content" :key="currentImgIndex">
            
            <div class="image-grid">
              
              <div class="a1-image-container">
                <img :src="allImages[currentImgIndex]" :alt="`Σελίδα ${currentImgIndex + 1}`" class="a1-image" />
                <div class="page-number-badge">{{ currentImgIndex + 1 }}</div>
              </div>

              <div v-if="!isMobile && !isSingleView && currentImgIndex + 1 < totalImages" class="a1-image-container">
                <img :src="allImages[currentImgIndex + 1]" :alt="`Σελίδα ${currentImgIndex + 2}`" class="a1-image" />
                <div class="page-number-badge">{{ currentImgIndex + 2 }}</div>
              </div>

            </div>

          </div>
        </div>

        <button 
          @click="nextPage" 
          class="nav-btn next-btn" 
          :disabled="isNextDisabled"
        >
          ❯
        </button>
      </div>

      <div v-if="totalImages > 0" class="page-indicator">
        <p v-if="isMobile || isSingleView" class="indicator-text">
          Σελίδα {{ currentImgIndex + 1 }} από {{ totalImages }}
        </p>
        <p v-else class="indicator-text">
          Σελίδες {{ currentImgIndex + 1 }}-{{ currentImgIndex + 2 }} από {{ totalImages }}
        </p>
      </div>
    </template>
    
    <div v-else class="error-msg">
      Λείπουν τα δεδομένα του θεατρικού έργου...
    </div>
  </div>
</template>

<style scoped>
.theatrico-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family: sans-serif;
}

.show-header {
  margin-bottom: 25px;
  text-align: center;
}

.meta {
  color: #666;
}

.slider-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.viewer-container {
  flex-grow: 1;
  width: 100%;
}

.page-content {
  animation: fadeIn 0.25s ease-in-out;
}

/* Το Grid αλλάζει αυτόματα μέγεθος */
.image-grid {
  display: flex;
  justify-content: center;
  gap: 25px;
  width: 100%;
}

.a1-image-container {
  width: 100%;
  max-width: 550px; /* Όμορφο μέγεθος για PC */
  aspect-ratio: 594 / 841;
  background-color: #f5f5f5;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.a1-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.page-number-badge {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 14px;
}

.nav-btn {
  background-color: rgba(255, 255, 255, 0.95);
  border: 2px solid #3498db;
  color: #3498db;
  font-size: 26px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  user-select: none;
  flex-shrink: 0;
  z-index: 10;
}

.nav-btn:hover:not(:disabled) {
  background-color: #3498db;
  color: white;
  transform: scale(1.1);
}

.nav-btn:disabled {
  border-color: #bdc3c7;
  color: #bdc3c7;
  background-color: #f2f2f2;
  cursor: not-allowed;
}

.page-indicator {
  text-align: center;
  margin-top: 25px;
}

.indicator-text {
  font-weight: bold;
  color: #34495e;
}

.error-msg {
  text-align: center;
  color: red;
  font-size: 1.2rem;
}

/* ==================================================== */
/* ΡΥΘΜΙΣΕΙΣ ΓΙΑ ΚΙΝΗΤΑ                                 */
/* ==================================================== */
@media (max-width: 768px) {
  .theatrico-container {
    padding: 10px 0px; 
  }

  .a1-image-container {
    max-width: 100%; /* Στο κινητό απλώνει τέρμα */
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 46px;
    height: 46px;
    font-size: 20px;
    background-color: rgba(255, 255, 255, 0.85);
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }

  .prev-btn { left: 8px; }
  .next-btn { right: 8px; }

  .nav-btn:hover:not(:disabled) {
    transform: translateY(-50%);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>