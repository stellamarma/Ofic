export interface Theatrico {
  id: number;
  title: string;
  category: string;
  images?: string[]; // Το ερωτηματικό σημαίνει ότι η εικόνα είναι προαιρετική
  author: string;
}

export const theatricoData: Theatrico[] = [
  {
    id: 1,
    title: 'Πιλάτος',
    category: 'Θεατρικο',
    images:['/Theatrico/PILATOS_Page_1.jpg','/Theatrico/PILATOS_Page_2.jpg','/Theatrico/PILATOS_Page_3.jpg','/Theatrico/PILATOS_Page_4.jpg','/Theatrico/PILATOS_Page_5.jpg','/Theatrico/PILATOS_Page_6.jpg','/Theatrico/PILATOS_Page_7.jpg','/Theatrico/PILATOS_Page_8.jpg','/Theatrico/PILATOS_Page_9.jpg'],// Διαδρομή εικόνας: public/images/actos.jpg
    author: 'Αστέρης'

  }
];