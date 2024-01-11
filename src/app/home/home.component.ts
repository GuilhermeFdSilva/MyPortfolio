import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManagerService } from 'src/assets/service/dataManagerService/data-manager.service';
import { Language } from 'src/assets/service/dataManagerService/languages/languages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  languages: Array<Language> = [];
  frontEnd: Array<Language> = [];
  database: Array<Language> = [];
  mainCategories: Array<Language> = []

  constructor(private router: Router, private dataManagerService: DataManagerService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.dataManagerService.getObservableData.subscribe((loaded) => {
      if (loaded) {
        this.languages = this.dataManagerService.getLanguages.filter((lenguage) => lenguage.getType === 'PL');
        this.frontEnd = this.dataManagerService.getLanguages.filter((lenguage) => lenguage.getType === 'FE');
        this.database = this.dataManagerService.getLanguages.filter((lenguage) => lenguage.getType === 'DB');
        this.mainCategories = this.dataManagerService.getLanguages.filter((language) => language.isMain);
      }
    });
  }

  goTo(link: string): void {
    window.open(link, '_blank');
  }

  goToPorjects(route: string) {
    this.router.navigate([`/projetos/${route.toLowerCase()}`]);
  }

  onGoTo(link: string) {
    this.goTo(link);
  }
}
