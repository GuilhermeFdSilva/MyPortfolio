import { DataManagerService } from 'src/assets/service/dataManagerService/data-manager.service';
import { Project } from 'src/assets/service/dataManagerService/projects/projects.service';
import { Language } from 'src/assets/service/dataManagerService/languages/languages.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
  projectsFilter: Array<Project> = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataManagerService: DataManagerService, private title: Title) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.activatedRoute.paramMap.subscribe((param) => {
      const name = param.get('module') ?? '';

      this.title.setTitle(`Projetos ${name ? ' - ' + name : ''}`)

      this.dataManagerService.getObservableData.subscribe((loaded) => {
        this.initVariables(name);
      });
    });
  }

  goToDetails(projectId: number): void {
    this.router.navigate([`detalhes/${projectId}`]);
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
    this.mainLanguage = new Language().noName();
    this.languagesFilter = [];

    this.languages = this.dataManagerService.getLanguages;
    this.projects = this.dataManagerService.getProjects;

    const mainLanguageTest = this.dataManagerService.getLanguages.find((language) => language.getName.toLocaleLowerCase() === name);

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
    this.projectsFilter = [];

    let activeLanguages = this.languagesFilter
      .filter((object) => object.active)
      .map((object) => object.language.getName);

    let languagesMatches = new Array<string>();

    if (activeLanguages.length > 0) {
      this.projects.forEach((project) => {
        let includesAll = activeLanguages.every((language) => project.getTools.includes(language))

        if (includesAll) {
          this.projectsFilter.push(project)

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
      this.projectsFilter = this.projects;
    }

    this.languagesFilter.forEach((object) => {
      object.match = languagesMatches.some((languageName) => object.language.getName === languageName);
    });
  }
}
