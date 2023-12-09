import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadmeService {
  constructor(private httpClient: HttpClient) { }

  getProjectReadme(projectName: string): Observable<any> {
    return this.httpClient.get<any>(`https://api.github.com/repos/GuilhermeFdSilva/${projectName}/contents/README.md`);
  }

  static decode(projectName: string, contentReadme: string): ProjectReadme {
    const binaryString = atob(contentReadme);
    
    const textReadme = new TextDecoder('utf-8').decode(new Uint8Array([...binaryString].map(char => char.charCodeAt(0))));
    
    return new ProjectReadme(projectName, textReadme);
  }
}

export class ProjectReadme {
  private projectName: string;
  private projectReadme: string;

  constructor(projectName: string, projectReadme: string) {
    this.projectName = projectName;
    this.projectReadme = projectReadme.replaceAll('code', 'code style="display: block; width: 100%; overflow:hidden; text-overflow: ellipsis;"');
  }

  get getProjectName(): string {
    return this.projectName;
  }

  get getProjectReadme(): string {
    return this.projectReadme;
  }
}
