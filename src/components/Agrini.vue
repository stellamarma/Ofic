<template>
  <div class="agrini-content">
    <p class="interactive-text">
      Πατήστε 
      <span class="clickable-word" @click="openPopup">ΕΔΩ</span> 
      για να δείτε την αντίδραση του Πιλάτου, όχι του Πόντιου, αλλά αυτού του ομώνυμου θεατρικού έργου.
    </p>

    <!-- Εμφάνιση της εικόνας σε στυλ Popup (Modal) -->
    <Transition name="popup-fade">
      <div v-if="showImage" class="popup-overlay" @click="closePopup">
        <div class="popup-content" @click.stop>
          <img src="/pilatos.jpg" alt="Αντίδραση Πιλάτου" />
          <p class="countdown-text">Ανακατεύθυνση στο θέατρο σε λίγα δευτερόλεπτα...</p>
          <button class="close-btn" @click="closePopup">✕</button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'

// Αυστηρός ορισμός του event για TypeScript
const emit = defineEmits<{
  (e: 'redirect-to-theater'): void
}>()

const showImage = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const openPopup = () => {
  showImage.value = true
  
  // Ξεκινάει το χρονόμετρο για 7 δευτερόλεπτα
  timer = setTimeout(() => {
    showImage.value = false
    emit('redirect-to-theater') // Στέλνουμε το σήμα
  }, 7000)
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
  text-align: left;
  margin-top: 20px;
}

.interactive-text {
  font-family: Arial, Helvetica, sans-serif !important;
  font-size: 1.15rem;
  line-height: 1.7;
  color: #2c3e50;
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

/* Στυλ για το Popup Φόντο (Καλύπτει όλη την οθόνη) */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75); /* Σκούρο ημιδιάφανο φόντο */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Να είναι πάνω από μενού και element-plus */
}

/* Το κουτί με την εικόνα */
.popup-content {
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 12px;
  max-width: 90%;
  max-height: 85vh;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.popup-content img {
  max-width: 100%;
  max-height: 65vh;
  border-radius: 6px;
  object-fit: contain;
}

.countdown-text {
  font-family: Arial, sans-serif !important;
  margin-top: 12px;
  color: #7f8c8d;
  font-size: 0.95rem;
  font-style: italic;
}

/* Κουμπί κλεισίματος (X) */
.close-btn {
  position: absolute;
  top: -15px;
  right: -15px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s;
}

.close-btn:hover {
  background: #c0392b;
}

/* Animation για το Popup */
.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: opacity 0.3s ease;
}

.popup-fade-enter-active .popup-content,
.popup-fade-leave-active .popup-content {
  transition: transform 0.3s ease;
}

.popup-fade-enter-from,
.popup-fade-leave-to {
  opacity: 0;
}

.popup-fade-enter-from .popup-content,
.popup-fade-leave-to .popup-content {
  transform: scale(0.9);
}
</style>