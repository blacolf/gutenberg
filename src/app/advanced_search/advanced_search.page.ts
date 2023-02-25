import { Component } from '@angular/core';

@Component({
  selector: 'app-advanced_search',
  templateUrl: 'advanced_search.page.html',
  styleUrls: ['advanced_search.page.scss']
})
export class AdvancedSearchPage {

  showHiddenItems = false;

  contentHidden = true;

  toggleContent() {
    this.contentHidden = !this.contentHidden;
  }

  author: string = '';
  title: string = '';
  subject: string = '';
  language: string = '';
  category: string = '';
  searchResults: any[] = [];

  onSubmit() {
    const query = {
      author: this.author,
      title: this.title,
      subject: this.subject,
      language: this.language,
      category: this.category
    };
    this.search(query);
  }

  search(query: any) {
    // Code pour la recherche des résultats
    // Mettre à jour le tableau searchResults avec les résultats de la recherche
    this.searchResults = [
      {
        author: 'blacolf',
        title: 'Titre du livre 1',
        subject: 'Sujet 1',
        language: 'Langue 1',
        category: 'Catégorie 1'
      },
      {
        author: 'Auteur 2',
        title: 'Titre du livre 2',
        subject: 'Sujet 2',
        language: 'Langue 2',
        category: 'Catégorie 2'
      },
      {
        author: 'Auteur 2',
        title: 'Titre du livre 2',
        subject: 'Sujet 2',
        language: 'Langue 2',
        category: 'Catégorie 2'
      }
    ];
  }

  constructor() {}

}
