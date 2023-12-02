import { BehaviorSubject, Observable, catchError, delay, finalize, forkJoin, map, of } from 'rxjs';
import { ReadmeService } from './readme/readme.service';
import { Project, ProjectsService } from './projects/projects.service';
import { Language, LanguagesService } from './languages/languages.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private languages: Array<Language> = [];
  private projects: Array<Project> = [];
  private readmeList: Array<any> = [];

  private observableData = new BehaviorSubject<boolean>(false);

  constructor(
    private languagesService: LanguagesService,
    private projectsService: ProjectsService,
    private readmeService: ReadmeService
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

  get getReadmeList(): Array<any> {
    return this.readmeList;
  }

  loadLanguagesAndProjects(): void {
    forkJoin([this.languagesService.getData, this.projectsService.getData])
      .subscribe(([languages, projects]) => {
        this.languages = languages;
        this.projects = projects;

        if (this.languages.length < 1 || this.projects.length < 1) {
          setTimeout(() => {
            this.loadLanguagesAndProjects();
          }, 500);
        } else {
          this.loadReadmes();
        }
      });
  }

  loadReadmes(): void {
    const readmeObservables = this.projects.map((project) => {
      return this.readmeService.getProjectReadme(project.getNameGH);
    });

    forkJoin(readmeObservables)
      .pipe(
        map((readmeList) => {
          return readmeList.map((readme, index) => {
            return ReadmeService.decode(this.projects[index].getNameGH, readme.content);
          });
        })
      )
      .subscribe((readmeList) => {
        this.readmeList = readmeList;

        if (this.readmeList.length !== this.projects.length) {
          setTimeout(() => {
            this.loadReadmes();
          }, 500);
        } else {
          this.observableData.next(true);
        }
      });
  }
}
