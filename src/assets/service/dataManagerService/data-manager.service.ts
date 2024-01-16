import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { Language, LanguagesService } from './languages/languages.service';
import { Project, ProjectsService } from './projects/projects.service';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private languages: Array<Language> = [];
  private projects: Array<Project> = [];

  private observableData = new BehaviorSubject<boolean>(false);

  constructor(
    private languagesService: LanguagesService,
    private projectsService: ProjectsService,
  ) {
    this.loadLanguagesAndProjects();
  }

  get getObservableData(): Observable<boolean> {
    return this.observableData.asObservable();
  }

  get getLanguages(): Array<Language> {
    return this.languages;
  }

  get getProjects(): Array<Project> {
    return this.projects;
  }

  loadLanguagesAndProjects(): void {
    forkJoin([this.languagesService.getData, this.projectsService.getData])
      .subscribe(([languages, projects]) => {
        this.languages = languages.map((language) => Object.assign(new Language, language));
        this.projects = projects.map((project) => Object.assign(new Project, project));

        if (this.languages.length < 1 || this.projects.length < 1) {
          setTimeout(() => {
            this.loadLanguagesAndProjects();
          }, 500);
        } else {
          this.observableData.next(true);
        }
      });
  }
}
