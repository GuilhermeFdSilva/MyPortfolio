import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) { }

  get getData(): Observable<Array<Project>> {
    return this.httpClient.get<Array<Project>>('https://api.francaguilherme.com.br/projects');
  }
 
  likeProject(project: Project): Observable<Project> {
    return this.httpClient.put<Project>('https://api.francaguilherme.com.br/admin/projects/like', project);
  }

  dislikeProject(project: Project): Observable<Project> {
    return this.httpClient.put<Project>("https://api.francaguilherme.com.br/admin/projects/dislike", project);
  }
}

export class Project {
  private id: number;
  private title: string;
  private image: string;
  private description: string;
  private main_language: string;
  private tools: Array<string>;
  private readme: string;
  private likes: number;
  private link_gh: string;
  private link_pg: string;

  constructor() { }

  get getId(): number {
    return this.id;
  }

  get getTitle(): string {
    return this.title;
  }

  get getImage(): string {
    return this.image;
  }

  get getDescription(): string {
    return this.description;
  }

  get getMainLanguage(): string {
    return this.main_language;
  }

  get getTools(): Array<string> {
    return this.tools;
  }

  get getReadme(): string {
    return this.readme;
  }

  get getLikes(): number {
    return this.likes;
  }

  get getLinkGH(): string {
    return this.link_gh;
  }

  get getLinkPG(): string {
    return this.link_pg;
  }
}
