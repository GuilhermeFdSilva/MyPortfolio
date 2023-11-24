import { LanguagesService, Language } from './../../assets/services/languages/languages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  languages: Array<Language> = [];
  frontEnd: Array<Language> = [];
  database: Array<Language> = [];
  mainCategories: Array<Language> = []

  constructor(private languagesService: LanguagesService) { }

  ngOnInit(): void {
    this.languagesService.getObservableData.subscribe(() => {
      this.languages = this.languagesService.getLanguages.filter((lenguage) => lenguage.getType === 'PL');
      this.frontEnd = this.languagesService.getLanguages.filter((lenguage) => lenguage.getType === 'FE');
      this.database = this.languagesService.getLanguages.filter((lenguage) => lenguage.getType === 'DB');
      this.mainCategories = this.languagesService.getLanguages.filter((language) => language.isMian);
    });
  }

  goTo(link: string): void {
    window.open(link, '_blank');
  }
}
