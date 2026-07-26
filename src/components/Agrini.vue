<template>
  <div class="agrini-content">
    <p class="sub-heading">
      Το κρίσιμο ερώτημα του Πόντιου Πιλάτου, το οποίο έμεινε αναπάντητο.
    </p>

    <!-- 3. Εικόνα -->

    <div class="image-container">

      <img src="/pilatos.jpg" alt="Αντίδραση Πιλάτου" class="pilatos-img" />

    </div>



    <!-- 4. Πατήστε ΕΔΩ -->

    <p class="interactive-text">
      Πατήστε
      <span class="clickable-word" @click="openPopup">ΕΔΩ</span>
      για να μεταβείτε στο θεατρικό.
    </p>

    <!-- Popup (Modal) -->

    <Transition name="popup-fade">

      <div v-if="showImage" class="popup-overlay" @click="closePopup">

        <div class="popup-content" @click.stop>
          <p class="popup-text">Μετάβαση στο θεατρικό...</p>
          <p class="countdown-text">Ανακατεύθυνση σε λίγα δευτερόλεπτα...</p>
          <button class="close-btn" @click="closePopup">✕</button>
        </div>

      </div>

    </Transition>

  </div>

</template>



<script setup lang="ts">

import { ref, onBeforeUnmount } from 'vue'

const emit = defineEmits<{

  (e: 'redirect-to-theater'): void

}>()



const showImage = ref(false)

let timer: ReturnType<typeof setTimeout> | null = null



const openPopup = () => {

  showImage.value = true

 

  timer = setTimeout(() => {

    showImage.value = false

    emit('redirect-to-theater')

  }, 3000)

}



const closePopup = () => {

  showImage.value = false

  if (timer) clearTimeout(timer)

}



onBeforeUnmount(() => {

  if (timer) clearTimeout(timer)

})

</script>



<style scoped>

.agrini-content {

  text-align: center;
  margin-top: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

}



/* 1. Μεγάλος Τίτλος */

.main-heading {

  font-family: Arial, Helvetica, sans-serif !important;
  font-size: 2.2rem;
  font-weight: bold;
  color: #1a2a3a;
  margin: 0; /* Μηδενισμός margins */
  padding-bottom: 6px;
  border-bottom: 2px solid #3498db;
  display: inline-block;
  width: 100%;

}



/* 2. Υπότιτλος χωρίς extra space */

.sub-heading {

  font-family: Arial, Helvetica, sans-serif !important;
  font-size: 1.15rem;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: #2c3e50;
  text-align: left;
}



.image-container {

  margin: 15px 0;

}

.pilatos-img {

  max-width: 100%;
  height: auto;
  max-height: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

}

.interactive-text {

  font-family: Arial, Helvetica, sans-serif !important;
  font-size: 1.15rem;
  line-height: 1.7;
  color: #2c3e50;
  margin-top: 15px;

}

.clickable-word {

  font-family: Arial, Helvetica, sans-serif !important;
  color: #3498db;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s ease;

}

.clickable-word:hover {

  color: #2980b9;

}

/* Popup / Modal Styling */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

}

.popup-content {

  position: relative;
  background: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  text-align: center;

}

.popup-text {
  
  font-family: Arial, Helvetica, sans-serif !important;
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;

}

.countdown-text {

  font-family: Arial, sans-serif !important;
  margin-top: 10px;
  color: #7f8c8d;
  font-size: 0.95rem;
  font-style: italic;

}

.close-btn {

  position: absolute;
  top: -12px;
  right: -12px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s;

}

.close-btn:hover {

  background: #c0392b;

}

/* Animations */

.popup-fade-enter-active,
.popup-fade-leave-active {

  transition: opacity 0.3s ease;

}

.popup-fade-enter-from,

.popup-fade-leave-to {

  opacity: 0;

}

</style> 