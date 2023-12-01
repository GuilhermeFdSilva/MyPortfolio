import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Array<Project> = [];

  private observableData = new Subject<void>();

  constructor(private httpClient: HttpClient) {
    this.projects = [];
    this.getHTTPObservable().subscribe((response) => {
      this.projects = response.map((object) => Object.assign(new Project, object));
      this.observableData.next();
    });
  }

  get getProjects(): Array<Project> {
    return this.projects;
  }

  get getObservableData(): Observable<void> {
    return this.observableData.asObservable();
  }

  private getHTTPObservable(): Observable<Array<Project>> {
    return this.httpClient.get<Array<Project>>("https://json-server-my-portfolio.vercel.app/projects");
  }
}

export class Project {
  private id: number;
  private title: string;
  private nameGH: string;
  private img: string;
  private desc: string;
  private mainLanguage: string;
  private tools: Array<string>;
  private linkGH: string;
  private linkPG: string;

  constructor() { }

  get getId(): number {
    return this.id;
  }

  get getTitle(): string {
    return this.title;
  }

  get getNameGH(): string {
    return this.nameGH;
  }

  get getImg(): string {
    return this.img;
  }

  get getDesc(): string {
    return this.desc;
  }

  get getMainLanguage(): string {
    return this.mainLanguage;
  }

  get getTools(): Array<string> {
    return this.tools;
  }

  get getLinkGH(): string {
    return this.linkGH;
  }

  get getLinkPG(): string {
    return this.linkPG;
  }
}
