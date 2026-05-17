
export interface Article {
  id: number;
  title: string;
  category: string;
  images?: string[]; // Το ερωτηματικό σημαίνει ότι η εικόνα είναι προαιρετική
  author: string;
  date: string;
}

export const articlesData: Article[] = [
  {
    id: 1,
    title: 'Σχετικά με την περίπτωση του αντιδιαβητικού φαρμάκου Actos',
    category: 'Επιστημονικα Θεματα',
    images:['/Article/actos1(a).jpg','/Article/actos1(b).jpg','/Article/actos1(c).jpg'],// Διαδρομή εικόνας: public/images/actos.jpg
    author: 'ΟΦΙΣ',
    date: '2 Σεπτ. 2022'
  },
   {
     id: 2,
     title: 'Σχετικά με την περίπτωση των mRNA εμβολίων κατά του κορωνοϊού',
     category: 'Επιστημονικα Θεματα',
     images: ['/Article/covid-1.jpg', '/Article/covid-2.jpg'], // Διαδρομή εικόνας: public/images/mrna.jpg
     author: 'ΟΦΙΣ',
     date: '2 Δεκ. 2021'
   },
      {
     id: 3,
     title: 'Οι ενέργειες της παρασκευάστριας εταιρείας',
     category: 'Επιστημονικα Θεματα',
     images: ['/Article/actos2.jpg'], // Διαδρομή εικόνας: public/images/mrna.jpg
     author: 'ΟΦΙΣ',
     date: 'Διακοπή διάθεσης Actos και Competact (2021)'
   },
    {
     id: 4,
     title: 'Μετά την ΜΕΤΦΟΡΜΙΝΗ, τί; Απαντήθηκε από την μελέτη GRADE στο New England Journal of Medicine.',
     category: 'Επιστημονικα Θεματα',
     images: ['/Article/nejmoa2200433.jpg'], // Διαδρομή εικόνας: public/images/mrna.jpg
     author: 'ΟΦΙΣ',
     date: '22 Σεπτ 2022'
   }
];