import { BehaviorSubject, Observable } from 'rxjs';
import { ReadmeService } from './readme/readme.service';
import { ProjectsService } from './projects/projects.service';
import { LanguagesService } from './languages/languages.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private observableData = new BehaviorSubject<boolean>(false);

  constructor(
    private languagesService: LanguagesService,
    private ProjectsService: ProjectsService,
    private ReadmeService: ReadmeService
  ) {
    this.loadData();
  }

  get getObservableData(): Observable<boolean> {
    return this.observableData.asObservable();
  }

  loadData(): void {
    
  }
}
