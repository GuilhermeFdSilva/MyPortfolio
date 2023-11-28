import { Router } from '@angular/router';
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

  constructor(private languagesService: LanguagesService, private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.languagesService.getObservableData.subscribe(() => {
      this.languages = this.languagesService.getLanguages.filter((lenguage) => lenguage.getType === 'PL');
      this.frontEnd = this.languagesService.getLanguages.filter((lenguage) => lenguage.getType === 'FE');
      this.database = this.languagesService.getLanguages.filter((lenguage) => lenguage.getType === 'DB');
      this.mainCategories = this.languagesService.getLanguages.filter((language) => language.isMian);
    });

    this.languages = this.languagesService.getLanguages.filter((lenguage) => lenguage.getType === 'PL');
    this.frontEnd = this.languagesService.getLanguages.filter((lenguage) => lenguage.getType === 'FE');
    this.database = this.languagesService.getLanguages.filter((lenguage) => lenguage.getType === 'DB');
    this.mainCategories = this.languagesService.getLanguages.filter((language) => language.isMian);
  }

  goTo(link: string): void {
    window.open(link, '_blank');
  }

  goToPorjects(route: string) {
    this.router.navigate([`/projetos/${route.toLowerCase()}`]);
  }
}
