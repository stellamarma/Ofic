export interface Subsection {
  title: string;
  images?: string[];
  date?: string;
  author?: string;
}

export interface Article {
  id: number;
  title: string;
  category: string;
  images?: string[];
  author: string;
  date: string;
  subsections?: Subsection[];
}

export const articlesData: Article[] = [
  {
    id: 1,
    title: '1) Σχετικά με την περίπτωση του αντιδιαβητικού φαρμάκου Actos',
    category: 'Επιστημονικα Θεματα',
    images: ['/Article/actos1(a).jpg', '/Article/actos1(b).jpg', '/Article/actos1(c).jpg'],
    author: 'ΟΦΙΣ',
    date: '2 Σεπτ. 2022',
    subsections: [
      {
        title: 'Οι ενέργειες της παρασκευάστριας εταιρείας',
        images: ['/Article/actos2.jpg'],
        date: 'Διακοπή διάθεσης Actos και Competact (2021)',
        author: 'ΟΦΙΣ'
      }
    ]
  },
  {
    id: 2,
    title: '2) Σχετικά με την περίπτωση των mRNA εμβολίων κατά του κορωνοϊού',
    category: 'Επιστημονικα Θεματα',
    images: ['/Article/covid-1.jpg', '/Article/covid-2.jpg'],
    author: 'ΟΦΙΣ',
    date: '2 Δεκ. 2021'
  },
  {
    id: 4,
    title: '3) Μετά την ΜΕΤΦΟΡΜΙΝΗ, τί; Απαντήθηκε από την μελέτη GRADE στο New England Journal of Medicine.',
    category: 'Επιστημονικα Θεματα',
    images: ['/Article/nejmoa2200433.jpg'],
    author: 'ΟΦΙΣ',
    date: '22 Σεπτ 2022'
  }
];