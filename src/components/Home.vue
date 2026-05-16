<template>
  <div class="gfs-big-center">ΟΦΙC</div>
  
  <div class="poem-container">
    <div class="poem-quote">«Ωφελέειν, μη βλάπτειν»</div>
    <span class="poem-author">— Ιπποκράτης</span>
  </div>
  <div class="poem-container">
<div>
  <p class="poem-text">
    Ο <span class="gfs-small-center">ΟΦΙC</span> αποτελεί έναν διαδικτυακό χώρο αφιερωμένο στην ιατρική γνώση, την επιστημονική τεκμηρίωση και την εκπαιδευτική προσέγγιση της σύγχρονης και ιστορικής ιατρικής.
  </p>
</div>
</div>
</template>
<script setup lang="ts">

</script>
<style>
.gfs-big-center {
  font-family: 'GFS Jackson', serif;
  text-align: center;     /* Βάζει το κείμενο στη μέση */
  font-size: 48px;        /* Κάνει τα γράμματα μεγάλα (μπορείς να βάλεις π.χ. 60px ή 3rem αν το θες τεράστιο) */
  display: block;
  color: #000000;    /* Μαύρο χρώμα */
  font-weight: bold;
}
.gfs-small-center{
font-family: 'GFS Jackson', serif;
  text-align: center;
  /* 1. Μέγεθος: Από 48px το κατεβάζουμε π.χ. στα 20px (λίγο πιο μεγάλο από το κανονικό κείμενο) */
  font-size: 20px; 
  color: #000000;  
  /* 2. Display: inline-block για να στέκεται σωστά μέσα στην πρόταση */
  display: inline-block;
  font-weight: bold;
}
.poem-container {
  font-family: 'Georgia', 'Times New Roman', serif;
  text-align: center;       /* Κεντράρισμα */
  color: #000000;           /* Μαύρο χρώμα */
  max-width: 800px;         /* Περιορίζει το πλάτος για να φαίνεται σαν στήλη ποιήματος */
  margin: 40px auto;        /* Κεντράρει όλο το μπλοκ στην οθόνη */
  line-height: 1.8;         /* Δίνει "αέρα" και απόσταση ανάμεσα στις γραμμές */
}

.poem-quote {
  font-size: 32px;          /* Μεγάλα γράμματα για το ρητό */
  font-weight: bold;
  font-style: italic;       /* Πλάγια γραφή για το ρητό */
  margin-bottom: 5px;       /* Απόσταση από τον δημιουργό */
}

.poem-author {
  font-size: 20px;          /* Πιο μικρά γράμματα για τον Ιπποκράτη */
  margin-bottom: 30px;      /* Απόσταση πριν ξεκινήσει το επόμενο κείμενο */
  display: block;
}

.poem-text {
  font-size: 24px;          /* Μέγεθος για το κυρίως κείμενο */
  white-space: pre-line;    /* Σεβασμός στις αλλαγές γραμμής (Enter) */
}
/* Η κανονική παράγραφος για τον ΟΦΙΣ */
.normal-text {
  font-size: 18px;         /* Φυσιολογικό μέγεθος για διάβασμα */
  line-height: 1.6;        /* Καλή απόσταση γραμμών */
  text-align: justify;     /* Στοίχιση "μπλοκ" αριστερά-δεξιά (ή "center" αν το θες στο κέντρο) */
  font-style: normal;      /* Όχι πλάγια γράμματα */
  margin-top: 20px;
}
</style>