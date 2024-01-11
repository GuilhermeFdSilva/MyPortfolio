import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter, ChangeDetectorRef, OnInit } from '@angular/core';
import { Language } from 'src/assets/service/dataManagerService/languages/languages.service';
import { Project } from 'src/assets/service/dataManagerService/projects/projects.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnChanges {
  @Input() languages: Array<Language> = [];
  @Input() projects: Array<Project> = [];
  @Input() filteredProjects: Array<Project> = [];
  @Input() activatedRoute: string = "";

  @Output() listProjects = new EventEmitter<Array<Project>>()

  languagesFilter: Array<any> = [];
  mainLanguages: Array<Language> = [];
  categories: Array<any> = [
    {
      category: 'PL',
      title: "Linguagens de programação"
    },
    {
      category: 'FE',
      title: "Front-End"
    },
    {
      category: 'DB',
      title: "Bancos de dados"
    }
  ];

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    for (let variableModify in changes) {
      if (variableModify === 'languages' || variableModify === 'activatedRoute') {
        setTimeout(() => {
          this.setFilters(this.activatedRoute);
          this.cdRef.detectChanges();
        });
      }
    }
  }

  toggleVisible(): void {
    let menu = document.getElementById("container-filters");

    if (menu) {
      if (menu.classList.contains("visible")) {
        menu.classList.remove("visible");
      } else {
        menu.classList.add("visible");
      }
    }
  }

  toggleActive(language: Language): void {
    let target = this.languagesFilter.find((lan) => lan.language === language);
    let index = this.languagesFilter.indexOf(target)

    if (target.active) {
      target.active = false;
      this.languagesFilter[index] = target;
    } else {
      if (target.match) {
        target.active = true;
        this.languagesFilter[index] = target;
      }
    }

    this.findMain();
    this.findMatches();
    this.filter();
  }

  setFilters(name: string): void {
    this.languagesFilter = [];

    if (name === undefined) {
      this.languages.forEach((language) => {
        this.languagesFilter.push({ language: language, match: true, active: false });
      });
    } else {
      this.languages.forEach((language) => {
        if (name.toLocaleLowerCase() === language.getName.toLocaleLowerCase()) {
          this.languagesFilter.push({ language: language, match: false, active: true });
        } else {
          this.languagesFilter.push({ language: language, match: true, active: false });
        }
      });
    }

    this.findMain();
    this.findMatches();
    this.filter();
  }

  findMain(): void {
    this.mainLanguages = [];

    this.languagesFilter.forEach((filter) => {
      if (filter.language.isMain) {
        if (filter.active) {
          this.mainLanguages.push(filter.language);
        }
      }
    });
  }

  findMatches(): void {
    this.filteredProjects = [];

    let activeLanguages = this.languagesFilter
      .filter((object) => object.active)
      .map((object) => object.language.getName);

    let languagesMatches = new Array<string>();

    if (activeLanguages.length > 0) {
      this.projects.forEach((project) => {
        let includesAll = activeLanguages.every((language) => project.getTools.includes(language))

        if (includesAll) {
          this.filteredProjects.push(project)

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
      this.filteredProjects = this.projects;
    }

    this.languagesFilter.forEach((object) => {
      object.match = languagesMatches.some((languageName) => object.language.getName === languageName);
    });
  }

  filter(): void {
    this.listProjects.emit(this.filteredProjects);
  }
}
