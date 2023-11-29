import { Project, ProjectsService } from './../../assets/services/projects/projects.service';
import { LanguagesService } from './../../assets/services/languages/languages.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Language } from 'src/assets/services/languages/languages.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  languages: Array<Language> = [];
  projects: Array<Project> = [];
  mainLanguage: Language = new Language().noName();
  languagesFilter: Array<any> = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private languagesService: LanguagesService, private projectsService: ProjectsService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.activatedRoute.paramMap.subscribe((param) => {
      const name = param.get('module') ?? '';

      this.initVariables(name);
      this.languagesService.getObservableData.subscribe(() => {
        this.projectsService.getObservableData.subscribe(() => {
          this.initVariables(name);
        });
      });
    });
  }

  addFilter(index: number): void {
    const language = this.languagesFilter[index];

    if (language.match) {
      language.active = true;
      this.languagesFilter[index] = language;

      this.findMatches();
    }
  }

  removeFilter(language: Language): void {
    if (language.getName === this.mainLanguage.getName) {
      this.router.navigate(['projetos']);
    }

    this.languagesFilter.map((object) => {
      if (object.language.getName === language.getName) {
        object.active = false;
      }
    });
    this.findMatches();
  }

  initVariables(name: string): void {
    this.languages = [];
    this.projects = [];
    this.mainLanguage = new Language().noName();
    this.languagesFilter = [];

    this.languages = this.languagesService.getLanguages;
    this.projects = this.projectsService.getProjects;

    const mainLanguageTest = this.languagesService.getLanguages.find((language) => {
      return language.getName.toLocaleLowerCase() === name;
    });

    if (mainLanguageTest) {
      this.mainLanguage = mainLanguageTest;
      this.initFilters(this.mainLanguage.getName);
      this.findMatches();
    } else {
      this.mainLanguage = new Language();
      this.initFilters(this.mainLanguage.getName);
      this.findMatches();
    }
  }

  initFilters(name: string): void {
    if (name === undefined) {
      this.languages.forEach((language) => {
        this.languagesFilter.push({ language: language, match: true, active: false });
      });
    } else {
      this.languages.forEach((language) => {
        if (name === language.getName) {
          this.languagesFilter.splice(0, 0, { language: language, match: false, active: true });
        } else {
          this.languagesFilter.push({ language: language, match: true, active: false });
        }
      });
    }
  }

  findMatches(): void {
    let activeLanguages = this.languagesFilter
      .filter((object) => object.active)
      .map((object) => object.language.getName);

    let languagesMatches = new Array<string>();

    if (activeLanguages.length > 0) {
      this.projects.forEach((project) => {
        let includesAll = activeLanguages.every((language) => project.getTools.includes(language))

        if (includesAll) {
          project.getTools.forEach((tool) => {
            activeLanguages.forEach((languageName) => {
              if (
                tool !== languageName &&
                !languagesMatches.includes(tool) &&
                !activeLanguages.includes(tool)
              ) {
                languagesMatches.push(tool);
              }
            });
          });
        }
      });
    } else {
      this.languages.forEach((language) => languagesMatches.push(language.getName));
    }

    this.languagesFilter.forEach((object) => {
      object.match = languagesMatches.some((languageName) => object.language.getName === languageName);
    });
  }
}
