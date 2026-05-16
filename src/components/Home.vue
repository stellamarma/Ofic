<template>
  <div class="ofis-container">
    <!-- Κεντρικός Τίτλος (Προσαρμόζεται σε κινητά) -->
    <div class="gfs-big-center">ΟΦΙC</div>
    
    <!-- Το Ρητό του Ιπποκράτη -->
    <div class="poem-container">
      <div class="poem-quote">«Ωφελέειν, μη βλάπτειν»</div>
      <span class="poem-author">— Ιπποκράτης</span>
    </div>

    <!-- Το Κυρίως Κείμενο -->
    <div class="poem-container">
      <div>
        <p class="poem-text">
          Ο <span class="gfs-small-center">ΟΦΙC</span> αποτελεί έναν διαδικτυακό χώρο αφιερωμένο στην ιατρική γνώση, την επιστημονική τεκμηρίωση και την εκπαιδευτική προσέγγιση της σύγχρονης και ιστορικής ιατρικής.
        </p>
      </div>
    </div>
    
    <!-- Η Εικόνα στο Κάτω Μέρος (Responsive) -->
    <div class="image-wrapper">
      <img src="/Photo/Esculapio_Capitolini.jpg" alt="Άγαλμα του Ασκληπιού" class="sculpture-img" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Κεντρικό Container με padding για να μην κολλάνε τα κείμενα στις άκρες του κινητού */
.ofis-container {
  padding: 10px 20px 40px 20px;
  max-width: 800px;
  margin: 0 auto;
}

/* Τίτλος: Χρήση clamp για να είναι μεγάλος στον υπολογιστή (48px) αλλά να μικραίνει αυτόματα στο κινητό */
.gfs-big-center {
  font-family: 'GFS Jackson', serif;
  text-align: center;     
  font-size: clamp(32px, 8vw, 48px);        
  display: block;
  color: #000000;    
  font-weight: bold;
  margin-top: 0; 
  margin-bottom: 20px;
}

.gfs-small-center {
  font-family: 'GFS Jackson', serif;
  text-align: center;
  font-size: clamp(18px, 4vw, 20px); 
  color: #000000;  
  display: inline-block;
  font-weight: bold;
}

/* Ποιητικό Container */
.poem-container {
  font-family: 'Georgia', 'Times New Roman', serif;
  text-align: center;       
  color: #000000;           
  max-width: 100%; /* Για να μην ξεπερνάει το πλάτος της οθόνης του κινητού */
  margin: 20px auto;        
  line-height: 1.6; /* Ελαφρώς πιο μαζεμένο για τα κινητά */
}

/* Το Ρητό μικραίνει γλυκά στις μικρές οθόνες */
.poem-quote {
  font-size: clamp(22px, 6vw, 32px);          
  font-weight: bold;
  font-style: italic;       
  margin-bottom: 5px;       
}

.poem-author {
  font-size: clamp(16px, 4vw, 20px);          
  margin-bottom: 25px;      
  display: block;
}

/* Το Κείμενο γίνεται 20px στα κινητά για να διαβάζεται άνετα και 24px σε μεγάλες οθόνες */
.poem-text {
  font-size: clamp(20px, 5vw, 24px);          
  white-space: pre-line;    
  margin-bottom: 40px; 
}

/* Ενότητα Εικόνας */
.image-wrapper {
  display: flex;
  justify-content: center; 
  width: 100%;
  padding-bottom: 20px;
}

/* Η εικόνα πιάνει το 100% του διαθέσιμου χώρου στο κινητό, αλλά σταματάει στα 450px στον υπολογιστή */
.sculpture-img {
  width: 100%;
  max-width: 450px; 
  height: auto; /* Διατηρεί τις αναλογίες της για να μην παραμορφωθεί */
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}
</style>